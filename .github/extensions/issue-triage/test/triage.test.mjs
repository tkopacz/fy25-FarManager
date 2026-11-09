import { test } from "node:test";
import assert from "node:assert/strict";
import {
    parseRepo,
    normalizeIssue,
    emptyDecision,
    applyDecisionPatch,
    setPriority,
    computeIssueChange,
    buildPlan,
    reviewProgress,
    mergeFetched,
    sortIssues,
    filterIssues,
} from "../lib/triage.mjs";

const rawIssue = (over = {}) => ({
    number: 7,
    title: "Crash on start",
    html_url: "https://github.com/o/r/issues/7",
    state: "open",
    labels: [{ name: "bug" }, { name: "priority: low" }],
    assignees: [{ login: "alice" }],
    user: { login: "bob" },
    body: "x".repeat(500),
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-02T00:00:00Z",
    comments: 3,
    ...over,
});

test("parseRepo akceptuje owner/repo i odrzuca śmieci", () => {
    assert.deepEqual(parseRepo(" tkopacz/fy25-FarManager "), {
        owner: "tkopacz",
        repo: "fy25-FarManager",
        full: "tkopacz/fy25-FarManager",
    });
    assert.throws(() => parseRepo("nope"));
    assert.throws(() => parseRepo("a/b/c"));
    assert.throws(() => parseRepo("../x"));
    assert.throws(() => parseRepo("a b/c"));
});

test("normalizeIssue spłaszcza pola i skraca treść", () => {
    const i = normalizeIssue(rawIssue());
    assert.equal(i.number, 7);
    assert.deepEqual(i.labels, ["bug", "priority: low"]);
    assert.deepEqual(i.assignees, ["alice"]);
    assert.equal(i.author, "bob");
    assert.equal(i.url, "https://github.com/o/r/issues/7");
    assert.ok(i.bodyExcerpt.length <= 301);
    assert.equal(i.updatedAt, "2026-01-02T00:00:00Z");
});

test("normalizeIssue odrzuca pull requesty", () => {
    assert.equal(normalizeIssue(rawIssue({ pull_request: {} })), null);
});

test("setPriority zastępuje istniejącą etykietę priorytetu", () => {
    assert.deepEqual(setPriority(["bug", "priority: low"], "high"), ["bug", "priority: high"]);
    assert.deepEqual(setPriority(["bug", "priority: low"], "none"), ["bug"]);
    assert.throws(() => setPriority([], "urgent"));
});

test("brak zmian w decyzji daje pusty diff", () => {
    const issue = normalizeIssue(rawIssue());
    const d = { ...emptyDecision(issue), reviewed: true };
    assert.equal(computeIssueChange(issue, d), null);
});

test("applyDecisionPatch + computeIssueChange liczą dodane/usunięte etykiety, zamknięcie i komentarz", () => {
    const issue = normalizeIssue(rawIssue());
    let d = emptyDecision(issue);
    d = applyDecisionPatch(issue, d, {
        addLabels: ["question"],
        removeLabels: ["bug"],
        priority: "high",
        state: "closed",
        stateReason: "not_planned",
        comment: "  Dzięki!  ",
    });
    assert.equal(d.reviewed, true);
    const c = computeIssueChange(issue, d);
    assert.deepEqual(c.addLabels.sort(), ["priority: high", "question"]);
    assert.deepEqual(c.removeLabels.sort(), ["bug", "priority: low"]);
    assert.equal(c.close, true);
    assert.equal(c.stateReason, "not_planned");
    assert.equal(c.comment, "Dzięki!");
});

test("applyDecisionPatch waliduje wejście", () => {
    const issue = normalizeIssue(rawIssue());
    const d = emptyDecision(issue);
    assert.throws(() => applyDecisionPatch(issue, d, { state: "merged" }));
    assert.throws(() => applyDecisionPatch(issue, d, { stateReason: "whatever" }));
    assert.throws(() => applyDecisionPatch(issue, d, { labels: "bug" }));
    assert.throws(() => applyDecisionPatch(issue, d, { addLabels: [""] }));
});

test("ponowne otwarcie (state=open) czyści powód zamknięcia", () => {
    const issue = normalizeIssue(rawIssue());
    let d = applyDecisionPatch(issue, emptyDecision(issue), { state: "closed" });
    assert.equal(d.stateReason, "completed");
    d = applyDecisionPatch(issue, d, { state: "open" });
    assert.equal(d.stateReason, null);
});

test("reviewProgress i buildPlan: plan jest gotowy dopiero po przejrzeniu wszystkich", () => {
    const a = normalizeIssue(rawIssue({ number: 1 }));
    const b = normalizeIssue(rawIssue({ number: 2 }));
    const decisions = {
        1: applyDecisionPatch(a, emptyDecision(a), { addLabels: ["question"] }),
    };
    let p = reviewProgress([a, b], decisions);
    assert.deepEqual(p, { total: 2, reviewed: 1, complete: false });
    decisions[2] = applyDecisionPatch(b, emptyDecision(b), {});
    p = reviewProgress([a, b], decisions);
    assert.equal(p.complete, true);
    const plan = buildPlan([a, b], decisions);
    assert.equal(plan.changes.length, 1);
    assert.equal(plan.changes[0].number, 1);
    assert.deepEqual(plan.counts, { issues: 1, addLabels: 1, removeLabels: 0, comments: 0, closes: 0 });
});

test("reviewProgress dla pustej listy nie jest kompletny", () => {
    assert.equal(reviewProgress([], {}).complete, false);
});

test("mergeFetched zachowuje decyzje tylko dla niezmienionych issues", () => {
    const a = normalizeIssue(rawIssue({ number: 1 }));
    const b = normalizeIssue(rawIssue({ number: 2 }));
    const decisions = {
        1: applyDecisionPatch(a, emptyDecision(a), {}),
        2: applyDecisionPatch(b, emptyDecision(b), {}),
        3: { reviewed: true },
    };
    const b2 = { ...b, updatedAt: "2026-05-05T00:00:00Z" };
    const { decisions: next, dropped } = mergeFetched([a, b], decisions, [a, b2]);
    assert.deepEqual(Object.keys(next), ["1"]);
    assert.deepEqual(dropped.sort(), [2, 3]);
});

test("sortIssues i filterIssues", () => {
    const a = normalizeIssue(rawIssue({ number: 1, title: "Alfa", labels: [{ name: "bug" }] }));
    const b = normalizeIssue(rawIssue({ number: 2, title: "Beta", labels: [] }));
    const decisions = { 2: applyDecisionPatch(b, emptyDecision(b), {}) };
    assert.deepEqual(sortIssues([a, b], "number-desc").map((i) => i.number), [2, 1]);
    assert.deepEqual(sortIssues([b, a], "title").map((i) => i.number), [1, 2]);
    assert.deepEqual(filterIssues([a, b], decisions, { status: "pending" }).map((i) => i.number), [1]);
    assert.deepEqual(filterIssues([a, b], decisions, { status: "reviewed" }).map((i) => i.number), [2]);
    assert.deepEqual(filterIssues([a, b], decisions, { label: "bug" }).map((i) => i.number), [1]);
    assert.deepEqual(filterIssues([a, b], decisions, { text: "bet" }).map((i) => i.number), [2]);
});
