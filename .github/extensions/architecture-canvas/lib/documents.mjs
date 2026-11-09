import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile, rename } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { appendBlock, detectEol, parseBlocks, replaceBlock } from "./markdown.mjs";
import { assertInsideRepo, resolveDiagramPath } from "./paths.mjs";

const hash = (text) => (text === null ? null : createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16));
const normalize = (s) => String(s ?? "").replace(/\r\n?/g, "\n");
const renderKey = (s) => hash(normalize(s).replace(/\n+$/, ""));

async function readText(abs) {
    try {
        return await readFile(abs, "utf8");
    } catch (error) {
        if (error.code === "ENOENT") return null;
        throw error;
    }
}

async function writeAtomic(file, text) {
    await mkdir(dirname(file), { recursive: true });
    const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
    await writeFile(tmp, text, "utf8");
    try {
        await rename(tmp, file);
    } catch (error) {
        await rm(tmp, { force: true });
        throw error;
    }
}

/**
 * Diagram files keyed by their repo-relative path (the durable ID). Edits live in
 * drafts (persisted under `draftDir`) until `save` writes them back to the repo.
 */
export class DiagramDocuments {
    #docs = new Map();
    #renders = new Map();
    #locks = new Map();

    constructor({ repoRoot, draftDir, onChange = () => {} }) {
        this.repoRoot = repoRoot;
        this.draftDir = draftDir;
        this.onChange = onChange;
    }

    resolve(path) {
        return resolveDiagramPath(this.repoRoot, path);
    }

    #draftFile(rel) {
        return this.draftDir ? join(this.draftDir, `${hash(rel)}.json`) : null;
    }

    async #exclusive(rel, fn) {
        const previous = this.#locks.get(rel) ?? Promise.resolve();
        const run = previous.then(fn, fn);
        const settled = run.then(() => {}, () => {});
        this.#locks.set(rel, settled);
        settled.then(() => {
            if (this.#locks.get(rel) === settled) this.#locks.delete(rel);
        });
        return run;
    }

    #changed(doc) {
        doc.revision += 1;
        this.onChange(doc.rel);
    }

    #require(rel) {
        const doc = this.#docs.get(this.resolve(rel).rel);
        if (!doc) throw new Error(`Plik ${rel} nie jest otwarty.`);
        return doc;
    }

    async #persistDraft(doc) {
        const file = this.#draftFile(doc.rel);
        if (!file) return;
        if (this.#isDirty(doc)) await writeAtomic(file, JSON.stringify({ rel: doc.rel, baseHash: doc.baseHash, text: doc.text }));
        else await rm(file, { force: true });
    }

    async #readDraft(rel) {
        const file = this.#draftFile(rel);
        if (!file) return null;
        try {
            const draft = JSON.parse(await readFile(file, "utf8"));
            return draft?.rel === rel && typeof draft.text === "string" ? draft : null;
        } catch {
            return null;
        }
    }

    #isDirty(doc) {
        return doc.text !== (doc.diskText ?? "");
    }

    /** True when the path is valid and was already opened in this session. */
    isLoaded(path) {
        try {
            return this.#docs.has(this.resolve(path).rel);
        } catch {
            return false;
        }
    }

    /** Opens (or re-syncs with disk) a diagram file and returns its state. */
    async load(path) {
        const { rel, abs, kind } = this.resolve(path);
        return this.#exclusive(rel, async () => {
            await assertInsideRepo(this.repoRoot, abs);
            const diskText = await readText(abs);
            const diskHash = hash(diskText);
            let doc = this.#docs.get(rel);
            if (!doc) {
                doc = { rel, abs, kind, revision: 0 };
                const draft = await this.#readDraft(rel);
                Object.assign(doc, draft ? { text: draft.text, baseHash: draft.baseHash ?? null } : { text: diskText ?? "", baseHash: diskHash });
                doc.diskText = diskText;
                this.#docs.set(rel, doc);
            } else if (!this.#isDirty(doc)) {
                doc.text = diskText ?? "";
                doc.baseHash = diskHash;
            }
            doc.diskText = diskText;
            doc.exists = diskText !== null;
            if (!this.#isDirty(doc)) doc.baseHash = diskHash;
            doc.conflict = this.#isDirty(doc) && doc.baseHash !== diskHash;
            return this.getState(rel);
        });
    }

    #blocks(doc) {
        if (doc.kind === "mermaid") return [{ index: 0, title: basename(doc.rel), source: normalize(doc.text), startLine: 1 }];
        return parseBlocks(doc.text).map((b) => ({ index: b.index, title: b.title, source: b.source, startLine: b.startLine }));
    }

    getState(path) {
        const doc = this.#require(path);
        return {
            path: doc.rel,
            kind: doc.kind,
            exists: doc.exists,
            dirty: this.#isDirty(doc),
            conflict: doc.conflict,
            revision: doc.revision,
            blocks: this.#blocks(doc),
        };
    }

    getText(path) {
        return this.#require(path).text;
    }

    async setBlock(path, index, source) {
        const doc = this.#require(path);
        return this.#exclusive(doc.rel, async () => {
            if (doc.kind === "mermaid") {
                if (index !== 0) throw new RangeError(`Nie ma bloku Mermaid o numerze ${index}.`);
                let text = normalize(source);
                if (text && !text.endsWith("\n")) text += "\n";
                doc.text = text.replace(/\n/g, detectEol(doc.diskText ?? ""));
            } else {
                doc.text = replaceBlock(doc.text, index, source);
            }
            await this.#persistDraft(doc);
            this.#changed(doc);
            return this.getState(doc.rel);
        });
    }

    async addBlock(path, source, { title } = {}) {
        const doc = this.#require(path);
        if (doc.kind === "mermaid") throw new Error("Plik .mmd zawiera jeden diagram — użyj pliku .md, aby mieć ich wiele.");
        return this.#exclusive(doc.rel, async () => {
            const documentTitle = basename(doc.rel).replace(/\.[^.]+$/, "");
            const result = appendBlock(doc.text, source, { title, documentTitle });
            doc.text = result.text;
            await this.#persistDraft(doc);
            this.#changed(doc);
            return result.index;
        });
    }

    async save(path, { force = false } = {}) {
        const doc = this.#require(path);
        return this.#exclusive(doc.rel, async () => {
            await assertInsideRepo(this.repoRoot, doc.abs);
            const diskText = await readText(doc.abs);
            const diskHash = hash(diskText);
            if (!force && diskHash !== doc.baseHash) {
                doc.conflict = true;
                doc.diskText = diskText;
                doc.exists = diskText !== null;
                this.#changed(doc);
                throw Object.assign(new Error("Plik został zmieniony poza edytorem. Przywróć wersję z dysku albo zapisz z nadpisaniem (force)."), { code: "conflict" });
            }
            if (diskText === doc.text) {
                doc.baseHash = diskHash;
                doc.conflict = false;
                await this.#persistDraft(doc);
                return { saved: false, path: doc.rel, reason: "Brak zmian do zapisania." };
            }
            await writeAtomic(doc.abs, doc.text);
            doc.diskText = doc.text;
            doc.baseHash = hash(doc.text);
            doc.exists = true;
            doc.conflict = false;
            await this.#persistDraft(doc);
            this.#changed(doc);
            return { saved: true, path: doc.rel, bytes: Buffer.byteLength(doc.text, "utf8") };
        });
    }

    async revert(path) {
        const doc = this.#require(path);
        await this.#exclusive(doc.rel, async () => {
            const diskText = await readText(doc.abs);
            Object.assign(doc, { diskText, text: diskText ?? "", baseHash: hash(diskText), exists: diskText !== null, conflict: false });
            await this.#persistDraft(doc);
            this.#changed(doc);
        });
        return this.getState(doc.rel);
    }

    recordRender(path, index, source, { ok, error }) {
        const doc = this.#require(path);
        this.#renders.set(`${doc.rel}#${index}`, { sourceHash: renderKey(source), ok: !!ok, error: ok ? undefined : String(error ?? "Nieznany błąd") });
    }

    getRender(path, index) {
        const doc = this.#require(path);
        const block = this.#blocks(doc)[index];
        const record = this.#renders.get(`${doc.rel}#${index}`);
        if (!block || !record || record.sourceHash !== renderKey(block.source)) return { status: "unknown" };
        return record.ok ? { status: "ok" } : { status: "error", error: record.error };
    }
}
