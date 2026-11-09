import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const MAX_BODY = 1024 * 1024;
const JS = "text/javascript; charset=utf-8";
const STATIC = {
    "/": { file: ["ui", "index.html"], type: "text/html; charset=utf-8" },
    "/app.js": { file: ["ui", "app.js"], type: JS },
    "/style.css": { file: ["ui", "style.css"], type: "text/css; charset=utf-8" },
    "/snippets.mjs": { file: ["lib", "snippets.mjs"], type: JS },
    "/mermaid.min.js": { file: ["vendor", "mermaid", "mermaid.min.js"], type: JS, cache: "max-age=3600" },
};

function sendJson(res, status, payload) {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
    res.end(JSON.stringify(payload));
}

async function readJson(req) {
    if (!String(req.headers["content-type"] ?? "").startsWith("application/json")) {
        throw Object.assign(new Error("Wymagany nagłówek Content-Type: application/json."), { status: 415 });
    }
    let size = 0;
    const chunks = [];
    for await (const chunk of req) {
        size += chunk.length;
        if (size > MAX_BODY) throw Object.assign(new Error("Zbyt duże żądanie."), { status: 413 });
        chunks.push(chunk);
    }
    const text = Buffer.concat(chunks).toString("utf8");
    const body = text ? JSON.parse(text) : {};
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Oczekiwano obiektu JSON.");
    return body;
}

const int = (v) => (Number.isInteger(v) && v >= 0 ? v : null);
const str = (v, max = 200000) => (typeof v === "string" && v.length <= max ? v : null);

/** One loopback server per canvas panel; durable data lives in the shared `panel.docs` service. */
export async function startPanelServer({ root, panel, listFiles }) {
    const clients = new Set();
    let port = 0;

    const server = createServer(async (req, res) => {
        try {
            // Reject requests addressed to any other host name (DNS rebinding guard).
            if (req.headers.host !== `127.0.0.1:${port}`) return sendJson(res, 403, { error: "Nieprawidłowy host." });
            const url = new URL(req.url, `http://127.0.0.1:${port}`);

            if (req.method === "GET" && STATIC[url.pathname]) {
                const asset = STATIC[url.pathname];
                const body = await readFile(join(root, ...asset.file));
                res.writeHead(200, { "Content-Type": asset.type, "Cache-Control": asset.cache ?? "no-store", "X-Content-Type-Options": "nosniff" });
                return res.end(body);
            }
            if (req.method === "GET" && url.pathname === "/favicon.ico") {
                res.writeHead(204);
                return res.end();
            }
            if (req.method === "GET" && url.pathname === "/api/state") return sendJson(res, 200, panel.describe());
            if (req.method === "GET" && url.pathname === "/api/files") return sendJson(res, 200, { files: await listFiles() });
            if (req.method === "GET" && url.pathname === "/events") {
                res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive" });
                res.write("retry: 2000\n\n");
                clients.add(res);
                req.on("close", () => clients.delete(res));
                return;
            }
            if (req.method !== "POST") return sendJson(res, 404, { error: "Nie znaleziono." });

            const body = await readJson(req);
            const stale = () => Object.assign(new Error("Panel pokazuje już inny plik — odśwież i spróbuj ponownie."), { status: 409 });
            const requirePanelPath = () => {
                if (body.path !== panel.path) throw stale();
            };
            let result;
            switch (url.pathname) {
                case "/api/open":
                    await panel.open(str(body.path, 500) ?? "");
                    break;
                case "/api/select":
                    requirePanelPath();
                    panel.select(int(body.index) ?? 0);
                    break;
                case "/api/block": {
                    const source = str(body.source);
                    if (int(body.index) === null || source === null) throw new Error("Nieprawidłowe dane bloku.");
                    if (body.flush === true) {
                        // Edits typed just before the agent switched the panel elsewhere: keep them in the old
                        // file's draft without moving the panel's current selection.
                        const path = str(body.path, 500);
                        if (path === null || !panel.docs.isLoaded(path)) throw stale();
                        await panel.docs.setBlock(path, body.index, source);
                        break;
                    }
                    requirePanelPath();
                    await panel.setBlock(body.index, source);
                    break;
                }
                case "/api/add": {
                    requirePanelPath();
                    const source = str(body.source) ?? "";
                    const title = str(body.title, 200) ?? undefined;
                    await panel.addBlock(source, title);
                    break;
                }
                case "/api/save":
                    requirePanelPath();
                    result = await panel.save({ force: body.force === true });
                    break;
                case "/api/revert":
                    requirePanelPath();
                    await panel.revert();
                    break;
                case "/api/render": {
                    const source = str(body.source);
                    if (int(body.index) === null || source === null || body.path !== panel.path) return sendJson(res, 200, { ok: true, ignored: true });
                    panel.docs.recordRender(panel.path, body.index, source, { ok: body.ok === true, error: str(body.error, 4000) ?? undefined });
                    return sendJson(res, 200, { ok: true });
                }
                default:
                    return sendJson(res, 404, { error: "Nie znaleziono." });
            }
            return sendJson(res, 200, { ok: true, result, state: panel.describe() });
        } catch (error) {
            return sendJson(res, error.status ?? (error.code === "conflict" ? 409 : 400), { error: error.message, code: error.code });
        }
    });

    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    port = server.address().port;

    return {
        url: `http://127.0.0.1:${port}/`,
        notify() {
            for (const res of clients) res.write("event: change\ndata: {}\n\n");
        },
        async close() {
            for (const res of clients) res.end();
            clients.clear();
            await new Promise((resolve) => server.close(() => resolve()));
        },
    };
}
