import { execFile } from "node:child_process";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { DiagramDocuments } from "./documents.mjs";
import { startPanelServer } from "./server.mjs";
import { SNIPPETS, snippetById } from "./snippets.mjs";

export const DEFAULT_PATH = "docs/ARCHITECTURE-PL.md";

function draftDir(session) {
    if (session?.workspacePath) return join(session.workspacePath, "architecture-canvas", "drafts");
    const home = process.env.COPILOT_HOME || join(homedir(), ".copilot");
    return join(home, "extensions", "architecture-canvas", "artifacts", "drafts");
}

function gitListFiles(repoRoot) {
    return new Promise((done) => {
        execFile(
            "git",
            ["ls-files", "-co", "--exclude-standard", "--", "*.md", "*.markdown", "*.mmd"],
            { cwd: repoRoot, timeout: 10000, maxBuffer: 4 * 1024 * 1024, windowsHide: true },
            (error, stdout) => done(error ? [] : stdout.split(/\r?\n/).filter(Boolean).slice(0, 1000)),
        );
    });
}

/** Panel = what one canvas instance is looking at (file + selected block). Content lives in `docs`. */
class Panel {
    constructor(docs) {
        this.docs = docs;
        this.path = null;
        this.selected = 0;
        this.server = null;
    }

    async open(path, block) {
        const state = await this.docs.load(path ?? this.path ?? DEFAULT_PATH);
        if (state.path !== this.path) this.selected = 0;
        this.path = state.path;
        if (Number.isInteger(block)) this.select(block);
        this.notify();
        return state;
    }

    select(index) {
        const count = this.docs.getState(this.path).blocks.length;
        if (count && (index < 0 || index >= count)) throw new RangeError(`Nie ma bloku Mermaid o numerze ${index} (bloków: ${count}).`);
        this.selected = count ? index : 0;
        this.notify();
    }

    index(input) {
        return Number.isInteger(input) ? input : this.selected;
    }

    async setBlock(index, source) {
        await this.docs.setBlock(this.path, index, source);
        this.selected = index;
    }

    async addBlock(source, title) {
        const index = await this.docs.addBlock(this.path, source, { title });
        this.selected = index;
        this.notify();
        return index;
    }

    save(options) {
        return this.docs.save(this.path, options);
    }

    revert() {
        return this.docs.revert(this.path);
    }

    describe() {
        const state = this.docs.getState(this.path);
        const selected = Math.min(this.selected, Math.max(state.blocks.length - 1, 0));
        return { ...state, selected, render: state.blocks.length ? this.docs.getRender(this.path, selected) : { status: "unknown" } };
    }

    notify() {
        this.server?.notify();
    }
}

export function createArchitectureCanvas({ createCanvas, CanvasError, getSession, root }) {
    const repoRoot = resolve(root, "..", "..", "..");
    const panels = new Map(); // instanceId → Panel (ephemeral view state only)
    let docs = null;

    function getDocs() {
        if (!docs) {
            docs = new DiagramDocuments({
                repoRoot,
                draftDir: draftDir(getSession()),
                onChange: (rel) => {
                    for (const p of panels.values()) if (p.path === rel) p.notify();
                },
            });
        }
        return docs;
    }

    async function panelFor(instanceId) {
        let panel = panels.get(instanceId);
        if (!panel) {
            panel = new Panel(getDocs());
            panels.set(instanceId, panel);
        }
        if (!panel.path) await panel.open(DEFAULT_PATH);
        return panel;
    }

    function wrap(handler) {
        return async (ctx) => {
            try {
                return await handler(await panelFor(ctx.instanceId), ctx.input ?? {});
            } catch (error) {
                if (error instanceof CanvasError) throw error;
                throw new CanvasError(error.code === "conflict" ? "conflict" : error.code === "invalid_path" ? "invalid_path" : "diagram_error", error.message);
            }
        };
    }

    function blockList(panel) {
        const s = panel.describe();
        return {
            path: s.path,
            exists: s.exists,
            dirty: s.dirty,
            conflict: s.conflict,
            selected: s.selected,
            blocks: s.blocks.map((b) => ({ index: b.index, title: b.title, startLine: b.startLine, lines: b.source.split("\n").filter(Boolean).length, firstLine: b.source.split("\n")[0] })),
        };
    }

    function diagram(panel, index) {
        const s = panel.describe();
        const block = s.blocks[index];
        if (!block) throw new CanvasError("invalid_block", `Nie ma bloku Mermaid o numerze ${index} (bloków: ${s.blocks.length}).`);
        return { path: s.path, index, title: block.title, startLine: block.startLine, source: block.source, dirty: s.dirty, render: panel.docs.getRender(s.path, index) };
    }

    async function maybeSave(panel, save) {
        return save ? await panel.save({ force: false }) : { saved: false, reason: "Szkic — wywołaj save, aby zapisać plik." };
    }

    const pathSchema = { type: "string", minLength: 1, maxLength: 500, description: "Ścieżka względem katalogu głównego repo, np. docs/ARCHITECTURE-PL.md lub docs/diagrams/rdzen.mmd." };
    const indexSchema = { type: "integer", minimum: 0, description: "Numer bloku Mermaid (od 0). Domyślnie wybrany blok." };
    const sourceSchema = { type: "string", maxLength: 200000, description: "Kod Mermaid bez ogrodzenia ```mermaid." };

    return createCanvas({
        id: "architecture-canvas",
        displayName: "Diagramy architektury",
        description: "Edytor diagramów architektury Mermaid z podglądem na żywo; edytuje bloki ```mermaid w plikach .md (np. docs/ARCHITECTURE-PL.md) lub pliki .mmd w repo i zapisuje je na dysk.",
        inputSchema: {
            type: "object",
            properties: { path: pathSchema, block: { type: "integer", minimum: 0 } },
            additionalProperties: false,
        },
        actions: [
            {
                name: "open_file",
                description: "Przełącza panel na plik .md/.markdown/.mmd w repo (nieistniejący plik zostanie utworzony przy pierwszym zapisie).",
                inputSchema: { type: "object", properties: { path: pathSchema, block: { type: "integer", minimum: 0 } }, required: ["path"], additionalProperties: false },
                handler: wrap(async (panel, input) => {
                    await panel.open(input.path, input.block);
                    return blockList(panel);
                }),
            },
            {
                name: "list_blocks",
                description: "Zwraca listę bloków Mermaid w otwartym pliku (numer, tytuł z najbliższego nagłówka, linia) oraz stan szkicu.",
                inputSchema: { type: "object", properties: {}, additionalProperties: false },
                handler: wrap((panel) => blockList(panel)),
            },
            {
                name: "get_diagram",
                description: "Zwraca kod Mermaid bloku oraz wynik ostatniego renderowania w panelu (ok/error/unknown).",
                inputSchema: { type: "object", properties: { index: indexSchema }, additionalProperties: false },
                handler: wrap((panel, input) => diagram(panel, panel.index(input.index))),
            },
            {
                name: "set_diagram",
                description: "Podmienia kod bloku Mermaid w szkicu i pokazuje go w panelu; save: true od razu zapisuje plik.",
                inputSchema: {
                    type: "object",
                    properties: { index: indexSchema, source: sourceSchema, save: { type: "boolean", default: false } },
                    required: ["source"],
                    additionalProperties: false,
                },
                handler: wrap(async (panel, input) => {
                    const index = panel.index(input.index);
                    await panel.setBlock(index, input.source);
                    panel.notify();
                    const saveResult = await maybeSave(panel, input.save === true);
                    return { ...diagram(panel, index), saveResult };
                }),
            },
            {
                name: "add_diagram",
                description: "Dopisuje nowy blok Mermaid (opcjonalnie pod nagłówkiem ## title) na końcu pliku .md — z podanego kodu albo szablonu.",
                inputSchema: {
                    type: "object",
                    properties: {
                        source: sourceSchema,
                        template: { type: "string", enum: SNIPPETS.map((s) => s.id), description: "Szablon startowy, gdy nie podano source." },
                        title: { type: "string", minLength: 1, maxLength: 200 },
                        save: { type: "boolean", default: false },
                    },
                    additionalProperties: false,
                },
                handler: wrap(async (panel, input) => {
                    const snippet = input.template ? snippetById(input.template) : null;
                    const source = input.source ?? snippet?.source ?? "flowchart TB\n  A --> B";
                    const title = (input.title ?? snippet?.title)?.replace(/[\r\n]+/g, " ");
                    const index = await panel.addBlock(source, title);
                    const saveResult = await maybeSave(panel, input.save === true);
                    return { ...diagram(panel, index), saveResult };
                }),
            },
            {
                name: "select_block",
                description: "Pokazuje w panelu wskazany blok Mermaid.",
                inputSchema: { type: "object", properties: { index: { type: "integer", minimum: 0 } }, required: ["index"], additionalProperties: false },
                handler: wrap((panel, input) => {
                    panel.select(input.index);
                    return diagram(panel, input.index);
                }),
            },
            {
                name: "save",
                description: "Zapisuje szkic do pliku w repo. Odmawia, jeśli plik zmienił się poza edytorem, chyba że force: true.",
                inputSchema: { type: "object", properties: { force: { type: "boolean", default: false } }, additionalProperties: false },
                handler: wrap(async (panel, input) => ({ ...(await panel.save({ force: input.force === true })), ...blockList(panel) })),
            },
            {
                name: "revert",
                description: "Odrzuca szkic i wczytuje plik z dysku. Wymaga confirm: true.",
                inputSchema: { type: "object", properties: { confirm: { type: "boolean", const: true } }, required: ["confirm"], additionalProperties: false },
                handler: wrap(async (panel) => {
                    await panel.revert();
                    return blockList(panel);
                }),
            },
            {
                name: "list_templates",
                description: "Zwraca dostępne szablony diagramów (id, opis, kod).",
                inputSchema: { type: "object", properties: {}, additionalProperties: false },
                handler: () => SNIPPETS.map(({ id, label, title, source }) => ({ id, label, title, source })),
            },
        ],
        open: async (ctx) => {
            let panel = panels.get(ctx.instanceId);
            if (!panel) {
                panel = new Panel(getDocs());
                panels.set(ctx.instanceId, panel);
            }
            try {
                await panel.open(ctx.input?.path ?? panel.path ?? DEFAULT_PATH, ctx.input?.block);
            } catch (error) {
                if (!panel.path) panels.delete(ctx.instanceId);
                throw new CanvasError(error.code === "invalid_path" ? "invalid_path" : "diagram_error", error.message);
            }
            if (!panel.server) {
                panel.server = await startPanelServer({ root, panel, listFiles: () => gitListFiles(repoRoot) });
            }
            const s = panel.describe();
            return {
                url: panel.server.url,
                title: `Diagramy: ${s.path}`,
                status: `${s.blocks.length} diagram(ów)${s.dirty ? " · niezapisane zmiany" : ""}${s.exists ? "" : " · nowy plik"}`,
            };
        },
        onClose: async (ctx) => {
            const panel = panels.get(ctx.instanceId);
            panels.delete(ctx.instanceId);
            await panel?.server?.close();
        },
    });
}
