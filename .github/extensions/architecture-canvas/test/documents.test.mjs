import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DiagramDocuments } from "../lib/documents.mjs";

async function setup(t) {
    const base = await mkdtemp(join(tmpdir(), "arch-docs-"));
    t.after(() => rm(base, { recursive: true, force: true }));
    const repoRoot = join(base, "repo");
    const draftDir = join(base, "drafts");
    await mkdir(join(repoRoot, "docs"), { recursive: true });
    const changes = [];
    const make = () => new DiagramDocuments({ repoRoot, draftDir, onChange: (rel) => changes.push(rel) });
    return { repoRoot, draftDir, changes, make };
}

const ARCH = "# A\r\n\r\n## Rdzeń\r\n\r\n```mermaid\r\ngraph TD\r\n  A-->B\r\n```\r\n\r\nKoniec.\r\n";

test("edits stay in a draft until save, which preserves CRLF", async (t) => {
    const { repoRoot, make, changes } = await setup(t);
    const file = join(repoRoot, "docs", "arch.md");
    await writeFile(file, ARCH);
    const docs = make();
    const state = await docs.load("docs/arch.md");
    assert.equal(state.exists, true);
    assert.equal(state.dirty, false);
    assert.deepEqual(state.blocks.map((b) => [b.title, b.source]), [["Rdzeń", "graph TD\n  A-->B\n"]]);

    await docs.setBlock("docs/arch.md", 0, "graph LR\n  A-->C");
    assert.equal(docs.getState("docs/arch.md").dirty, true);
    assert.equal(await readFile(file, "utf8"), ARCH);
    assert.ok(changes.includes("docs/arch.md"));

    const result = await docs.save("docs/arch.md");
    assert.equal(result.saved, true);
    assert.equal(await readFile(file, "utf8"), ARCH.replace("graph TD\r\n  A-->B", "graph LR\r\n  A-->C"));
    assert.equal(docs.getState("docs/arch.md").dirty, false);
});

test("a missing file becomes a new document created (with folders) on save", async (t) => {
    const { repoRoot, make } = await setup(t);
    const docs = make();
    const state = await docs.load("docs/diagrams/new.md");
    assert.equal(state.exists, false);
    assert.deepEqual(state.blocks, []);
    const index = await docs.addBlock("docs/diagrams/new.md", "graph TD", { title: "Kontekst" });
    assert.equal(index, 0);
    await docs.save("docs/diagrams/new.md");
    const text = await readFile(join(repoRoot, "docs", "diagrams", "new.md"), "utf8");
    assert.match(text, /^# new\n\n## Kontekst\n\n```mermaid\ngraph TD\n```\n$/);
    assert.equal(docs.getState("docs/diagrams/new.md").exists, true);
});

test("save refuses to overwrite a file changed outside the editor unless forced", async (t) => {
    const { repoRoot, make } = await setup(t);
    const file = join(repoRoot, "docs", "arch.md");
    await writeFile(file, ARCH);
    const docs = make();
    await docs.load("docs/arch.md");
    await docs.setBlock("docs/arch.md", 0, "graph LR");
    await writeFile(file, ARCH + "Dopisek.\r\n");
    await assert.rejects(docs.save("docs/arch.md"), /zmieniony poza edytorem/);
    assert.equal(docs.getState("docs/arch.md").conflict, true);
    await docs.save("docs/arch.md", { force: true });
    assert.match(await readFile(file, "utf8"), /graph LR/);
    assert.equal(docs.getState("docs/arch.md").conflict, false);
});

test("drafts survive a new service instance and flag conflicts with disk", async (t) => {
    const { repoRoot, make } = await setup(t);
    const file = join(repoRoot, "docs", "arch.md");
    await writeFile(file, ARCH);
    const first = make();
    await first.load("docs/arch.md");
    await first.setBlock("docs/arch.md", 0, "graph BT");

    const second = make();
    const restored = await second.load("docs/arch.md");
    assert.equal(restored.dirty, true);
    assert.equal(restored.blocks[0].source, "graph BT\n");
    assert.equal(restored.conflict, false);

    await writeFile(file, ARCH.replace("Koniec", "Zmiana"));
    const third = make();
    const conflicted = await third.load("docs/arch.md");
    assert.equal(conflicted.dirty, true);
    assert.equal(conflicted.conflict, true);
});

test("revert drops the draft and reloads the file from disk", async (t) => {
    const { repoRoot, make } = await setup(t);
    await writeFile(join(repoRoot, "docs", "arch.md"), ARCH);
    const docs = make();
    await docs.load("docs/arch.md");
    await docs.setBlock("docs/arch.md", 0, "graph BT");
    const state = await docs.revert("docs/arch.md");
    assert.equal(state.dirty, false);
    assert.equal(state.blocks[0].source, "graph TD\n  A-->B\n");
    const again = await make().load("docs/arch.md");
    assert.equal(again.dirty, false);
});

test(".mmd files are a single whole-file diagram", async (t) => {
    const { repoRoot, make } = await setup(t);
    await writeFile(join(repoRoot, "docs", "core.mmd"), "graph TD\nA-->B\n");
    const docs = make();
    const state = await docs.load("docs/core.mmd");
    assert.deepEqual(state.blocks.map((b) => [b.index, b.title, b.source]), [[0, "core.mmd", "graph TD\nA-->B\n"]]);
    await docs.setBlock("docs/core.mmd", 0, "graph LR");
    await docs.save("docs/core.mmd");
    assert.equal(await readFile(join(repoRoot, "docs", "core.mmd"), "utf8"), "graph LR\n");
    await assert.rejects(docs.addBlock("docs/core.mmd", "graph TD", {}), /jeden diagram/);
});

test("render results are reported only for the exact source that was rendered", async (t) => {
    const { repoRoot, make } = await setup(t);
    await writeFile(join(repoRoot, "docs", "arch.md"), ARCH);
    const docs = make();
    await docs.load("docs/arch.md");
    docs.recordRender("docs/arch.md", 0, "graph TD\n  A-->B\n", { ok: false, error: "Parse error" });
    assert.deepEqual(docs.getRender("docs/arch.md", 0), { status: "error", error: "Parse error" });
    await docs.setBlock("docs/arch.md", 0, "graph LR");
    assert.deepEqual(docs.getRender("docs/arch.md", 0), { status: "unknown" });
});

test("render results match sources regardless of trailing newlines and line endings", async (t) => {
    const { repoRoot, make } = await setup(t);
    await writeFile(join(repoRoot, "docs", "arch.md"), ARCH);
    const docs = make();
    await docs.load("docs/arch.md");
    await docs.setBlock("docs/arch.md", 0, "graph LR\n  A -->");
    docs.recordRender("docs/arch.md", 0, "graph LR\r\n  A -->", { ok: false, error: "Parse error" });
    assert.deepEqual(docs.getRender("docs/arch.md", 0), { status: "error", error: "Parse error" });
});

test("setBlock validates the block index", async (t) => {
    const { repoRoot, make } = await setup(t);
    await writeFile(join(repoRoot, "docs", "arch.md"), ARCH);
    const docs = make();
    await docs.load("docs/arch.md");
    await assert.rejects(docs.setBlock("docs/arch.md", 3, "x"), /Nie ma bloku/);
});
