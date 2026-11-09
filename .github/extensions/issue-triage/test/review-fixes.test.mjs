import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeIssue, emptyDecision, applyDecisionPatch, computeIssueChange, setPriority, buildPlan } from "../lib/triage.mjs";
import { applyPlan } from "../lib/github.mjs";

const mk = (labels, n = 1) => normalizeIssue({ number: n, title: "t", labels: labels.map((name) => ({ name })), assignees: [], updated_at: "u" });

test("etykiety różniące się wielkością liter nie tworzą pary dodaj/usuń", () => {
    const issue = mk(["Priority: High", "Bug"]);
    const d = applyDecisionPatch(issue, emptyDecision(issue), { labels: ["bug", "Priority: High"], priority: "high" });
    assert.equal(computeIssueChange(issue, d), null);
});

test("setPriority zachowuje istniejącą etykietę o innej wielkości liter", () => {
    assert.deepEqual(setPriority(["Priority: High"], "high"), ["Priority: High"]);
});

test("removeLabels działa bez względu na wielkość liter", () => {
    const issue = mk(["Bug"]);
    const d = applyDecisionPatch(issue, emptyDecision(issue), { removeLabels: ["bug"] });
    assert.deepEqual(computeIssueChange(issue, d).removeLabels, ["Bug"]);
});

test("niestandardowa etykieta priorytetu nie blokuje zapisu bez pola priority", () => {
    const issue = mk(["priority: critical"]);
    const d = applyDecisionPatch(issue, emptyDecision(issue), { labels: ["priority: critical", "bug"] });
    assert.deepEqual(computeIssueChange(issue, d).addLabels, ["bug"]);
});

test("plan ma stabilny hash zmieniający się razem z treścią", () => {
    const a = mk(["bug"]);
    const d1 = { 1: applyDecisionPatch(a, emptyDecision(a), { comment: "x" }) };
    const d2 = { 1: applyDecisionPatch(a, emptyDecision(a), { comment: "y" }) };
    assert.equal(buildPlan([a], d1).hash, buildPlan([a], d1).hash);
    assert.notEqual(buildPlan([a], d1).hash, buildPlan([a], d2).hash);
});

test("usunięcie nieistniejącej już etykiety (404) traktujemy jako sukces", async () => {
    const run = async (args) => {
        if (args.includes("DELETE")) throw new Error("gh api -X DELETE: Label does not exist (HTTP 404)");
        return {};
    };
    const res = await applyPlan(run, { owner: "o", repo: "r" }, { changes: [{ number: 1, addLabels: [], removeLabels: ["x"], comment: "c", close: false }] });
    assert.equal(res.ok, true);
    assert.equal(res.results[0].steps.length, 2);
});

test("kroki w wyniku niosą nazwy etykiet", async () => {
    const res = await applyPlan(async () => ({}), { owner: "o", repo: "r" }, { changes: [{ number: 1, addLabels: ["a"], removeLabels: ["b"], comment: "", close: false }] });
    assert.deepEqual(res.results[0].steps.map((s) => s.labels ?? s.label), [["a"], "b"]);
});
