import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { request } from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createArchitectureCanvas } from "../lib/canvas.mjs";

class FakeCanvasError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

async function setup(t) {
    const base = await mkdtemp(join(tmpdir(), "arch-canvas-int-"));
    const repo = join(base, "repo");
    const root = join(repo, ".github", "extensions", "architecture-canvas");
    await mkdir(root, { recursive: true });
    await mkdir(join(repo, "docs"));
    await writeFile(join(repo, "docs", "ARCHITECTURE-PL.md"), "# A\n\n## Rdzeń\n\n```mermaid\ngraph TD\n  A-->B\n```\n");
    const canvas = createArchitectureCanvas({
        createCanvas: (options) => options,
        CanvasError: FakeCanvasError,
        getSession: () => ({ workspacePath: join(base, "session") }),
        root,
    });
    const opened = [];
    t.after(async () => {
        for (const instanceId of opened) await canvas.onClose({ instanceId });
        await rm(base, { recursive: true, force: true });
    });
    const open = async (instanceId, input) => {
        opened.push(instanceId);
        return canvas.open({ instanceId, input });
    };
    const invoke = (instanceId, name, input) => canvas.actions.find((a) => a.name === name).handler({ instanceId, input });
    return { repo, open, invoke };
}

function http(url, { method = "GET", body, host } = {}) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const req = request(
            { hostname: u.hostname, port: u.port, path: u.pathname, method, headers: { Host: host ?? u.host, ...(body ? { "Content-Type": "application/json" } : {}) } },
            (res) => {
                let data = "";
                res.on("data", (c) => (data += c));
                res.on("end", () => resolve({ status: res.statusCode, json: data ? JSON.parse(data) : null }));
            },
        );
        req.on("error", reject);
        req.end(body ? JSON.stringify(body) : undefined);
    });
}

test("opens the default architecture doc and edits a block through actions", async (t) => {
    const { repo, open, invoke } = await setup(t);
    const result = await open("p1", undefined);
    assert.match(result.url, /^http:\/\/127\.0\.0\.1:\d+\/$/);
    assert.equal(result.title, "Diagramy: docs/ARCHITECTURE-PL.md");

    const list = await invoke("p1", "list_blocks", {});
    assert.deepEqual(list.blocks.map((b) => b.title), ["Rdzeń"]);

    const set = await invoke("p1", "set_diagram", { source: "graph LR\n  A-->C" });
    assert.equal(set.source, "graph LR\n  A-->C\n");
    assert.equal(set.dirty, true);
    assert.equal(set.render.status, "unknown");

    await invoke("p1", "save", {});
    assert.match(await readFile(join(repo, "docs", "ARCHITECTURE-PL.md"), "utf8"), /graph LR\n {2}A-->C\n```/);
});

test("adds diagrams from templates into a new file and rejects paths outside the repo", async (t) => {
    const { repo, open, invoke } = await setup(t);
    await open("p2", { path: "docs/diagrams/nowy.md" });
    const added = await invoke("p2", "add_diagram", { template: "sequence", save: true });
    assert.equal(added.index, 0);
    assert.equal(added.title, "Przepływ wywołań");
    assert.equal(added.saveResult.saved, true);
    assert.match(await readFile(join(repo, "docs", "diagrams", "nowy.md"), "utf8"), /^# nowy\n\n## Przepływ wywołań\n\n```mermaid\nsequenceDiagram/);

    await assert.rejects(invoke("p2", "open_file", { path: "../poza.md" }), (e) => e.code === "invalid_path");
    await assert.rejects(open("p3", { path: "C:\\Windows\\x.md" }), (e) => e.code === "invalid_path");
});

test("HTTP API edits drafts, records render results and guards the Host header", async (t) => {
    const { open, invoke } = await setup(t);
    const { url } = await open("p4", undefined);
    const base = url.replace(/\/$/, "");

    assert.equal((await http(`${base}/api/state`, { host: "evil.example:80" })).status, 403);

    const state = (await http(`${base}/api/state`)).json;
    assert.equal(state.path, "docs/ARCHITECTURE-PL.md");

    const edited = await http(`${base}/api/block`, { method: "POST", body: { path: state.path, index: 0, source: "graph TD\n  X" } });
    assert.equal(edited.status, 200);
    assert.equal(edited.json.state.dirty, true);

    const wrongFile = await http(`${base}/api/block`, { method: "POST", body: { path: "docs/other.md", index: 0, source: "x" } });
    assert.equal(wrongFile.status, 409);

    await http(`${base}/api/render`, { method: "POST", body: { path: state.path, index: 0, source: "graph TD\n  X\n", ok: false, error: "Parse error on line 2" } });
    const diagram = await invoke("p4", "get_diagram", {});
    assert.deepEqual(diagram.render, { status: "error", error: "Parse error on line 2" });

    const asset = await http(`${base}/api/nothing`);
    assert.equal(asset.status, 404);
});

test("UI requests aimed at a file the agent already switched away from are rejected or flushed safely", async (t) => {
    const { repo, open, invoke } = await setup(t);
    const { url } = await open("p5", undefined);
    const base = url.replace(/\/$/, "");
    const old = "docs/ARCHITECTURE-PL.md";
    await mkdir(join(repo, "docs", "diagrams"), { recursive: true });
    await writeFile(join(repo, "docs", "diagrams", "b.md"), "# B\n\n```mermaid\ngraph TD\n  B1\n```\n\n```mermaid\ngraph TD\n  B2\n```\n");

    await invoke("p5", "open_file", { path: "docs/diagrams/b.md", block: 1 });
    await invoke("p5", "set_diagram", { source: "graph TD\n  AGENT" });

    for (const [route, body] of [
        ["/api/save", { path: old, force: true }],
        ["/api/revert", { path: old }],
        ["/api/add", { path: old, source: "graph TD\n  N" }],
        ["/api/select", { path: old, index: 0 }],
        ["/api/save", { force: true }],
    ]) {
        assert.equal((await http(`${base}${route}`, { method: "POST", body })).status, 409, route);
    }
    assert.equal((await invoke("p5", "get_diagram", {})).source, "graph TD\n  AGENT\n");

    const flushed = await http(`${base}/api/block`, { method: "POST", body: { path: old, index: 0, source: "graph TD\n  TYPED", flush: true } });
    assert.equal(flushed.status, 200);
    assert.equal(flushed.json.state.path, "docs/diagrams/b.md");
    assert.equal(flushed.json.state.selected, 1);

    await invoke("p5", "open_file", { path: old });
    const back = await invoke("p5", "get_diagram", {});
    assert.equal(back.source, "graph TD\n  TYPED\n");
    assert.equal(back.dirty, true);

    const unknown = await http(`${base}/api/block`, { method: "POST", body: { path: "docs/never.md", index: 0, source: "x", flush: true } });
    assert.equal(unknown.status, 409);
});
