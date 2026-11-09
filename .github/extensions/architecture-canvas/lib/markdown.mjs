// Pure helpers for Mermaid fenced code blocks inside Markdown (CommonMark fences).
// No Node APIs: this module is also served to the browser.

const FENCE_OPEN = /^( {0,3})(`{3,}|~{3,})(.*)$/;
const HEADING = /^ {0,3}#{1,6}(?:[ \t]+(.*))?$/;

export function detectEol(text) {
    return /\r\n/.test(text) ? "\r\n" : "\n";
}

function splitLines(text) {
    const lines = [];
    const re = /([^\r\n]*)(\r\n|\n|\r|$)/g;
    let m;
    while ((m = re.exec(text)) !== null) {
        if (m[0] === "" && m.index >= text.length) break;
        lines.push({ text: m[1], start: m.index, end: m.index + m[1].length, next: m.index + m[0].length });
        if (m[2] === "") break;
    }
    return lines;
}

function isClosingFence(line, char, length) {
    const m = /^ {0,3}(`{3,}|~{3,})[ \t]*$/.exec(line);
    return !!m && m[1][0] === char && m[1].length >= length;
}

function headingText(line) {
    const m = HEADING.exec(line);
    if (!m) return null;
    return (m[1] ?? "").replace(/[ \t]+#+[ \t]*$/, "").replace(/^#+$/, "").trim();
}

function scan(text) {
    const lines = splitLines(text);
    const blocks = [];
    let title = "";
    let open = null;
    lines.forEach((line, i) => {
        if (open) {
            if (isClosingFence(line.text, open.char, open.length)) {
                if (open.block) {
                    Object.assign(open.block, { closed: true, contentEnd: line.start, closeStart: line.start, closeEnd: line.end, endLine: i + 1 });
                }
                open = null;
            }
            return;
        }
        const m = FENCE_OPEN.exec(line.text);
        if (m) {
            const char = m[2][0];
            const info = m[3].trim();
            if (char === "`" && info.includes("`")) return;
            const isMermaid = (info.split(/\s+/)[0] ?? "").toLowerCase() === "mermaid";
            open = { char, length: m[2].length, block: null };
            if (isMermaid) {
                open.block = {
                    index: blocks.length,
                    title,
                    info,
                    indent: m[1],
                    fence: m[2],
                    infoRaw: m[3],
                    startLine: i + 1,
                    endLine: lines.length,
                    closed: false,
                    openStart: line.start,
                    openEnd: line.end,
                    contentStart: line.next,
                    contentEnd: text.length,
                    closeStart: text.length,
                    closeEnd: text.length,
                };
                blocks.push(open.block);
            }
            return;
        }
        const heading = headingText(line.text);
        if (heading !== null) title = heading;
    });
    for (const b of blocks) b.source = text.slice(b.contentStart, b.contentEnd).replace(/\r\n?/g, "\n");
    return { blocks, unclosed: open !== null };
}

/** Lists Mermaid blocks with their nearest preceding heading as title. Sources use "\n". */
export function parseBlocks(text) {
    return scan(text).blocks;
}

function normalizeSource(source) {
    let s = String(source ?? "").replace(/\r\n?/g, "\n");
    if (s && !s.endsWith("\n")) s += "\n";
    return s;
}

function fenceFor(char, minLength, source) {
    let longest = 0;
    for (const line of source.split("\n")) {
        const m = /^ {0,3}(`{3,}|~{3,})/.exec(line);
        if (m && m[1][0] === char) longest = Math.max(longest, m[1].length);
    }
    return char.repeat(Math.max(minLength, longest + 1, 3));
}

/** Replaces the source of block `index`, keeping everything else (incl. line endings) intact. */
export function replaceBlock(text, index, source) {
    const block = parseBlocks(text)[index];
    if (!block) throw new RangeError(`Nie ma bloku Mermaid o numerze ${index}.`);
    const eol = detectEol(text);
    const normalized = normalizeSource(source);
    const fence = fenceFor(block.fence[0], block.fence.length, normalized);
    const fenceChanged = fence !== block.fence;
    const openLine = fenceChanged ? block.indent + fence + block.infoRaw : text.slice(block.openStart, block.openEnd);
    const closeLine = fenceChanged || !block.closed ? block.indent + fence : text.slice(block.closeStart, block.closeEnd);
    const rest = block.closed ? text.slice(block.closeEnd) : eol;
    return text.slice(0, block.openStart) + openLine + eol + normalized.replace(/\n/g, eol) + closeLine + rest;
}

/** Appends a new Mermaid block (optionally under a "## title" heading). */
export function appendBlock(text, source, { title, documentTitle } = {}) {
    const { unclosed } = scan(text);
    if (unclosed) throw new Error("Dokument kończy się niezamkniętym blokiem kodu — nie można dopisać diagramu.");
    const eol = text ? detectEol(text) : "\n";
    const normalized = normalizeSource(source);
    const fence = fenceFor("`", 3, normalized);
    let prefix;
    if (!text.trim()) {
        prefix = documentTitle ? `# ${documentTitle}${eol}${eol}` : "";
    } else {
        prefix = text;
        if (!/(\r\n|\n|\r)$/.test(prefix)) prefix += eol;
        const withoutLastBreak = prefix.replace(/(\r\n|\n|\r)$/, "");
        if (!/(^|\r\n|\n|\r)[ \t]*$/.test(withoutLastBreak)) prefix += eol;
    }
    const heading = title ? `## ${title}${eol}${eol}` : "";
    const result = `${prefix}${heading}${fence}mermaid${eol}${normalized.replace(/\n/g, eol)}${fence}${eol}`;
    return { text: result, index: parseBlocks(result).length - 1 };
}
