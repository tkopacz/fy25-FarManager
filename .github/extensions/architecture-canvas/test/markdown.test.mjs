import { test } from "node:test";
import assert from "node:assert/strict";
import { parseBlocks, replaceBlock, appendBlock, detectEol } from "../lib/markdown.mjs";

const doc = [
    "# Tytuł",
    "",
    "## Przegląd",
    "",
    "```mermaid",
    "flowchart LR",
    "  A --> B",
    "```",
    "",
    "Tekst.",
    "",
    "### Szczegóły",
    "",
    "~~~~ Mermaid  {.diagram}",
    "sequenceDiagram",
    "  A->>B: hej",
    "~~~~",
    "",
].join("\n");

test("finds mermaid blocks with nearest heading as title", () => {
    const blocks = parseBlocks(doc);
    assert.equal(blocks.length, 2);
    assert.deepEqual(
        blocks.map((b) => ({ index: b.index, title: b.title, source: b.source, startLine: b.startLine })),
        [
            { index: 0, title: "Przegląd", source: "flowchart LR\n  A --> B\n", startLine: 5 },
            { index: 1, title: "Szczegóły", source: "sequenceDiagram\n  A->>B: hej\n", startLine: 14 },
        ],
    );
});

test("ignores mermaid text inside other fences and short closing fences", () => {
    const text = ["````markdown", "```mermaid", "graph TD", "```", "````", "", "```mermaid", "graph LR", "``", "```", ""].join("\n");
    const blocks = parseBlocks(text);
    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].source, "graph LR\n``\n");
});

test("ignores headings inside code fences when computing titles", () => {
    const text = ["## Prawdziwy", "```bash", "# komentarz", "```", "```mermaid", "graph TD", "```"].join("\n");
    assert.equal(parseBlocks(text)[0].title, "Prawdziwy");
});

test("treats an unclosed fence as running to the end of the document", () => {
    const blocks = parseBlocks("```mermaid\ngraph TD\nA-->B");
    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].source, "graph TD\nA-->B");
    assert.equal(blocks[0].closed, false);
});

test("does not treat non-mermaid info strings as mermaid", () => {
    assert.equal(parseBlocks("```mermaidx\ngraph\n```\n```js mermaid\nx\n```\n").length, 0);
});

test("handles CRLF documents and preserves their line endings on replace", () => {
    const crlf = doc.replace(/\n/g, "\r\n");
    assert.equal(detectEol(crlf), "\r\n");
    const blocks = parseBlocks(crlf);
    assert.equal(blocks[0].source, "flowchart LR\n  A --> B\n");
    const next = replaceBlock(crlf, 0, "flowchart TD\n  X --> Y");
    assert.ok(!/[^\r]\n/.test(next), "all line breaks stay CRLF");
    assert.equal(parseBlocks(next)[0].source, "flowchart TD\n  X --> Y\n");
    assert.equal(parseBlocks(next)[1].source, "sequenceDiagram\n  A->>B: hej\n");
    assert.ok(next.startsWith("# Tytuł\r\n"));
});

test("replaceBlock keeps the rest of the document byte-for-byte", () => {
    const next = replaceBlock(doc, 1, "sequenceDiagram\n  B->>A: odp\n");
    const blocks = parseBlocks(next);
    assert.equal(blocks[1].source, "sequenceDiagram\n  B->>A: odp\n");
    assert.equal(next.slice(0, next.indexOf("~~~~")), doc.slice(0, doc.indexOf("~~~~")));
    assert.ok(next.endsWith("~~~~\n"));
});

test("replaceBlock closes an unclosed fence and can empty a block", () => {
    const next = replaceBlock("```mermaid\ngraph TD", 0, "graph LR");
    assert.equal(next, "```mermaid\ngraph LR\n```\n");
    const empty = replaceBlock(doc, 0, "");
    assert.equal(parseBlocks(empty)[0].source, "");
    assert.equal(parseBlocks(empty).length, 2);
});

test("replaceBlock lengthens the fence when the source contains a fence", () => {
    const next = replaceBlock(doc, 0, "graph TD\n```\nA-->B");
    const blocks = parseBlocks(next);
    assert.equal(blocks.length, 2);
    assert.equal(blocks[0].source, "graph TD\n```\nA-->B\n");
});

test("replaceBlock rejects unknown indexes", () => {
    assert.throws(() => replaceBlock(doc, 5, "x"), /Nie ma bloku/);
});

test("appendBlock adds a titled block and returns its index", () => {
    const { text, index } = appendBlock(doc, "graph TD\nA-->B", { title: "Nowy" });
    assert.equal(index, 2);
    const blocks = parseBlocks(text);
    assert.equal(blocks[2].title, "Nowy");
    assert.equal(blocks[2].source, "graph TD\nA-->B\n");
    assert.ok(text.startsWith(doc));
});

test("appendBlock into an empty document starts with a top-level heading", () => {
    const { text, index } = appendBlock("", "graph TD", { title: "Diagram", documentTitle: "Architektura" });
    assert.equal(index, 0);
    assert.equal(text, "# Architektura\n\n## Diagram\n\n```mermaid\ngraph TD\n```\n");
});

test("appendBlock keeps CRLF and separates from text without trailing newline", () => {
    const { text } = appendBlock("# A\r\nzdanie", "graph TD", {});
    assert.equal(text, "# A\r\nzdanie\r\n\r\n```mermaid\r\ngraph TD\r\n```\r\n");
});
