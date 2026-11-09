import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, symlink, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolveDiagramPath, assertInsideRepo } from "../lib/paths.mjs";

const root = join(tmpdir(), "repo-root");

test("resolves repo-relative markdown and mmd paths", () => {
    assert.deepEqual(resolveDiagramPath(root, "docs/ARCHITECTURE-PL.md"), {
        rel: "docs/ARCHITECTURE-PL.md",
        abs: join(root, "docs", "ARCHITECTURE-PL.md"),
        kind: "markdown",
    });
    assert.equal(resolveDiagramPath(root, "docs\\diagrams\\core.mmd").rel, "docs/diagrams/core.mmd");
    assert.equal(resolveDiagramPath(root, "./docs/a.MD").kind, "markdown");
    assert.equal(resolveDiagramPath(root, "docs/x.mmd").kind, "mermaid");
});

test("rejects paths that leave the repository", () => {
    for (const bad of ["../x.md", "docs/../../x.md", "/etc/x.md", "C:\\x.md", "c:x.md", "\\\\server\\share\\x.md", "docs/..\\..\\x.md"]) {
        assert.throws(() => resolveDiagramPath(root, bad), /poza repozytorium|ścieżk/i, bad);
    }
});

test("rejects unsupported extensions, git internals, empty and odd names", () => {
    for (const bad of ["", "   ", "docs/a.txt", "docs/a.md.exe", ".git/a.md", "docs/.GIT/a.md", "docs/a\u0000.md", "docs/", "docs/a.md:stream"]) {
        assert.throws(() => resolveDiagramPath(root, bad), Error, JSON.stringify(bad));
    }
});

test("assertInsideRepo rejects symlinked directories that escape the repo", async (t) => {
    const base = await mkdtemp(join(tmpdir(), "arch-canvas-"));
    t.after(() => rm(base, { recursive: true, force: true }));
    const repo = join(base, "repo");
    const outside = join(base, "outside");
    await mkdir(join(repo, "docs"), { recursive: true });
    await mkdir(outside);
    await writeFile(join(repo, "docs", "ok.md"), "x");
    await assertInsideRepo(repo, join(repo, "docs", "ok.md"));
    await assertInsideRepo(repo, join(repo, "docs", "new", "deeper", "new.md"));
    try {
        await symlink(outside, join(repo, "escape"), "junction");
    } catch {
        t.skip("symlinks not available");
        return;
    }
    await assert.rejects(assertInsideRepo(repo, join(repo, "escape", "a.md")), /poza repozytorium/);
});
