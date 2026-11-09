import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const MAX_BODY = 256 * 1024;
const STATIC = {
    "/": { file: ["ui", "index.html"], type: "text/html; charset=utf-8" },
    "/app.js": { file: ["ui", "app.js"], type: "text/javascript; charset=utf-8" },
    "/style.css": { file: ["ui", "style.css"], type: "text/css; charset=utf-8" },
    "/triage.mjs": { file: ["lib", "triage.mjs"], type: "text/javascript; charset=utf-8" },
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
    return text ? JSON.parse(text) : {};
}

/**
 * One loopback server per canvas instance. `instance` holds the repo the
 * panel is currently looking at; all durable data lives in `service`.
 */
export async function startInstanceServer({ root, service, instance, describe }) {
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
                res.writeHead(200, { "Content-Type": asset.type, "Cache-Control": "no-store" });
                return res.end(body);
            }
            if (req.method === "GET" && url.pathname === "/api/state") return sendJson(res, 200, describe());
            if (req.method === "GET" && url.pathname === "/events") {
                res.writeHead(200, {
                    "Content-Type": "text/event-stream",
                    "Cache-Control": "no-store",
                    Connection: "keep-alive",
                });
                res.write("retry: 2000\n\n");
                clients.add(res);
                req.on("close", () => clients.delete(res));
                return;
            }
            if (req.method !== "POST") return sendJson(res, 404, { error: "Nie znaleziono." });

            const body = await readJson(req);
            const repo = instance.repo;
            switch (url.pathname) {
                case "/api/repo":
                    instance.setRepo(body.repo);
                    break;
                case "/api/fetch":
                    await service.fetch(repo);
                    break;
                case "/api/decision":
                    service.setDecision(repo, body.number, body.patch ?? {});
                    break;
                case "/api/reset":
                    service.resetDecision(repo, body.number);
                    break;
                case "/api/discard":
                    service.discard(repo);
                    break;
                case "/api/apply": {
                    const result = await service.apply(repo, { confirm: body.confirm === true, dryRun: body.dryRun === true, planHash: typeof body.planHash === "string" ? body.planHash : undefined });
                    return sendJson(res, 200, { ok: true, result, state: describe() });
                }
                default:
                    return sendJson(res, 404, { error: "Nie znaleziono." });
            }
            return sendJson(res, 200, { ok: true, state: describe() });
        } catch (error) {
            return sendJson(res, error.status ?? 400, { error: error.message });
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
