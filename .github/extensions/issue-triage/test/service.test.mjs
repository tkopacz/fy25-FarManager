import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { TriageService } from "../lib/service.mjs";

const issue = (n, updated = "2026-01-01T00:00:00Z") => ({
    number: n,
    title: `Issue ${n}`,
    html_url: `https://github.com/o/r/issues/${n}`,
    state: "open",
    labels: [{ name: "bug" }],
    assignees: [],
    user: { login: "u" },
    body: "b",
    updated_at: updated,
});

function fakeGh(issues) {
    const calls = [];
    const run = async (args, input) => {
        calls.push({ args, input });
        const path = args.find((a) => a.startsWith("repos/"));
        if (args.includes("--paginate") && path.includes("/issues?")) return [issues];
        if (args.includes("--paginate") && path.includes("/labels?")) return [[{ name: "bug" }, { name: "question" }]];
        return {};
    };
    return { run, calls };
}

function withDir(fn) {
    return async () => {
        const dir = mkdtempSync(join(tmpdir(), "issue-triage-"));
        try {
            await fn(dir);
        } finally {
            rmSync(dir, { recursive: true, force: true });
        }
    };
}

test("stan jest trwały i kluczowany repozytorium, nie instancją", withDir(async (dir) => {
    const gh = fakeGh([issue(1), issue(2)]);
    const s1 = new TriageService({ dir, run: gh.run });
    await s1.fetch("o/r");
    s1.setDecision("o/r", 1, { addLabels: ["question"] });
    assert.deepEqual(readdirSync(dir), ["o__r.json"]);

    const s2 = new TriageService({ dir, run: gh.run });
    const st = s2.getState("o/r");
    assert.equal(st.issues.length, 2);
    assert.equal(st.progress.reviewed, 1);
    assert.deepEqual(st.decisions[1].labels, ["bug", "question"]);
}));

test("przed pobraniem nie ma issues i nic nie jest wołane", withDir(async (dir) => {
    const gh = fakeGh([issue(1)]);
    const s = new TriageService({ dir, run: gh.run });
    const st = s.getState("o/r");
    assert.equal(st.fetchedAt, null);
    assert.equal(st.issues.length, 0);
    assert.equal(gh.calls.length, 0);
}));

test("apply wymaga confirm i przejrzenia wszystkich issues", withDir(async (dir) => {
    const gh = fakeGh([issue(1), issue(2)]);
    const s = new TriageService({ dir, run: gh.run });
    await s.fetch("o/r");
    s.setDecision("o/r", 1, { state: "closed", comment: "dup" });
    await assert.rejects(() => s.apply("o/r", { confirm: true }), /przejrz/i);
    s.setDecision("o/r", 2, {});
    await assert.rejects(() => s.apply("o/r", { confirm: false }), /confirm/i);

    const before = gh.calls.length;
    const dry = await s.apply("o/r", { confirm: true, dryRun: true });
    assert.equal(dry.dryRun, true);
    assert.equal(gh.calls.length, before);
    assert.equal(s.getState("o/r").plan.changes.length, 1);

    const res = await s.apply("o/r", { confirm: true });
    assert.equal(res.ok, true);
    const writes = gh.calls.slice(before).filter((c) => c.args.includes("-X"));
    assert.deepEqual(writes.map((c) => c.args[2]), ["POST", "PATCH"]);
    // applied issues leave the local draft and a log entry remains
    const st = s.getState("o/r");
    assert.equal(st.plan.changes.length, 0);
    assert.equal(st.lastApply.results.length, 1);
}));

test("discard czyści decyzje", withDir(async (dir) => {
    const gh = fakeGh([issue(1)]);
    const s = new TriageService({ dir, run: gh.run });
    await s.fetch("o/r");
    s.setDecision("o/r", 1, { addLabels: ["question"] });
    s.discard("o/r");
    assert.equal(s.getState("o/r").progress.reviewed, 0);
}));

test("setDecision dla nieznanego issue rzuca błąd", withDir(async (dir) => {
    const gh = fakeGh([issue(1)]);
    const s = new TriageService({ dir, run: gh.run });
    await s.fetch("o/r");
    assert.throws(() => s.setDecision("o/r", 99, {}), /99/);
}));

test("onChange informuje o zmianach danego repo", withDir(async (dir) => {
    const gh = fakeGh([issue(1)]);
    const seen = [];
    const s = new TriageService({ dir, run: gh.run, onChange: (repo) => seen.push(repo) });
    await s.fetch("o/r");
    s.setDecision("o/r", 1, {});
    assert.ok(seen.length >= 2 && seen.every((r) => r === "o/r"));
}));
