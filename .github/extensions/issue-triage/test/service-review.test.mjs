import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { TriageService } from "../lib/service.mjs";

const raw = (n) => ({ number: n, title: `I${n}`, html_url: "", state: "open", labels: [{ name: "bug" }, { name: "old" }], assignees: [], user: { login: "u" }, body: "", updated_at: "u1" });

test("częściowa porażka: ponowny zapis nie dubluje komentarza ani udanych etykiet", async () => {
    const dir = mkdtempSync(join(tmpdir(), "it-pf-"));
    try {
        let failClose = true;
        const writes = [];
        const run = async (args, input) => {
            const path = args.find((a) => a.startsWith("repos/"));
            if (args.includes("--paginate")) return path.includes("/labels?") ? [[]] : [[raw(1)]];
            writes.push(`${args[2]} ${path}`);
            if (args[2] === "PATCH" && failClose) throw new Error("boom");
            return {};
        };
        const s = new TriageService({ dir, run });
        await s.fetch("o/r");
        s.setDecision("o/r", 1, { addLabels: ["new"], removeLabels: ["old"], comment: "hi", state: "closed" });
        const plan1 = s.getState("o/r").plan;
        const r1 = await s.apply("o/r", { confirm: true, planHash: plan1.hash });
        assert.equal(r1.ok, false);
        const plan2 = s.getState("o/r").plan;
        assert.deepEqual(plan2.changes[0].addLabels, []);
        assert.deepEqual(plan2.changes[0].removeLabels, []);
        assert.equal(plan2.changes[0].comment, "");
        assert.equal(plan2.changes[0].close, true);
        failClose = false;
        writes.length = 0;
        const r2 = await s.apply("o/r", { confirm: true, planHash: plan2.hash });
        assert.equal(r2.ok, true);
        assert.deepEqual(writes, ["PATCH repos/o/r/issues/1"]);
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
});

test("apply odrzuca nieaktualny hash planu", async () => {
    const dir = mkdtempSync(join(tmpdir(), "it-h-"));
    try {
        const run = async (args) => (args.includes("--paginate") ? [[raw(1)]] : {});
        const s = new TriageService({ dir, run });
        await s.fetch("o/r");
        s.setDecision("o/r", 1, { comment: "a" });
        const stale = s.getState("o/r").plan.hash;
        s.setDecision("o/r", 1, { comment: "b", state: "closed" });
        await assert.rejects(() => s.apply("o/r", { confirm: true, planHash: stale }), /zmienił/);
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
});
