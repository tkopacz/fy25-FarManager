import { realpath } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";

const EXTENSIONS = { ".md": "markdown", ".markdown": "markdown", ".mmd": "mermaid" };

function fail(message) {
    throw Object.assign(new Error(message), { code: "invalid_path" });
}

/**
 * Validates a repo-relative path to a diagram file and resolves it under `repoRoot`.
 * Only .md/.markdown (Mermaid blocks) and .mmd (whole-file diagram) are allowed.
 */
export function resolveDiagramPath(repoRoot, input) {
    const raw = String(input ?? "").trim();
    if (!raw) fail("Podaj ścieżkę pliku względem repozytorium.");
    if (raw.includes("\0")) fail("Nieprawidłowa ścieżka.");
    if (isAbsolute(raw) || /^[A-Za-z]:/.test(raw) || /^[\\/]/.test(raw)) fail("Ścieżka musi być względna — pliki poza repozytorium są niedozwolone.");
    const parts = raw.split(/[\\/]+/).filter((p) => p !== "" && p !== ".");
    if (parts.includes("..")) fail("Ścieżka wychodzi poza repozytorium.");
    if (!parts.length || /[\\/]$/.test(raw)) fail("Ścieżka musi wskazywać plik.");
    if (parts.some((p) => p.toLowerCase() === ".git")) fail("Nie można edytować plików w katalogu .git.");
    if (parts.some((p) => /[:*?"<>|]/.test(p) || /[ .]$/.test(p))) fail("Nieprawidłowa nazwa pliku.");
    const name = parts[parts.length - 1];
    const ext = (/\.[^.]+$/.exec(name)?.[0] ?? "").toLowerCase();
    const kind = EXTENSIONS[ext];
    if (!kind) fail("Obsługiwane są tylko pliki .md, .markdown i .mmd.");
    const root = resolve(repoRoot);
    const abs = join(root, ...parts);
    const rel = relative(root, abs);
    if (!rel || rel.startsWith("..") || isAbsolute(rel)) fail("Ścieżka wychodzi poza repozytorium.");
    return { rel: parts.join("/"), abs, kind };
}

/** Rejects paths whose nearest existing ancestor resolves (via symlinks/junctions) outside the repo. */
export async function assertInsideRepo(repoRoot, abs) {
    const root = await realpath(repoRoot);
    let current = abs;
    for (;;) {
        try {
            const real = await realpath(current);
            const rel = relative(root, real);
            if (rel && (rel.startsWith("..") || isAbsolute(rel))) fail("Ścieżka prowadzi poza repozytorium.");
            return;
        } catch (error) {
            if (error.code === "invalid_path") throw error;
            if (error.code !== "ENOENT" && error.code !== "ENOTDIR") throw error;
            const parent = dirname(current);
            if (parent === current) fail("Ścieżka prowadzi poza repozytorium.");
            current = parent;
        }
    }
}
