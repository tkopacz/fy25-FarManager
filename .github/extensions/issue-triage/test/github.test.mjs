import { test } from "node:test";
import assert from "node:assert/strict";
import { describeSteps, applyPlan, fetchIssues, fetchLabels } from "../lib/github.mjs";

const repo = { owner: "o", repo: "r", full: "o/r" };

function fakeRunner(failOn) {
    const calls = [];
    const run = async (args, input) => {
        calls.push({ args, input });
        if (failOn && args.some((a) => a.includes(failOn))) throw new Error("boom");
        return {};
    };
    return { run, calls };
}

test("describeSteps układa kroki: etykiety, komentarz, zamknięcie na końcu", () => {
    const steps = describeSteps(repo, {
        number: 5,
        addLabels: ["question"],
        removeLabels: ["priority: low"],
        comment: "Hej",
        close: true,
        stateReason: "not_planned",
    });
    assert.deepEqual(
        steps.map((s) => s.op),
        ["add-labels", "remove-label", "comment", "close"],
    );
    assert.equal(steps[0].method, "POST");
    assert.equal(steps[0].path, "repos/o/r/issues/5/labels");
    assert.deepEqual(steps[0].body, { labels: ["question"] });
    assert.equal(steps[1].method, "DELETE");
    assert.equal(steps[1].path, "repos/o/r/issues/5/labels/priority%3A%20low");
    assert.deepEqual(steps[3].body, { state: "closed", state_reason: "not_planned" });
});

test("applyPlan w trybie dryRun nie wywołuje gh", async () => {
    const { run, calls } = fakeRunner();
    const res = await applyPlan(run, repo, { changes: [{ number: 1, addLabels: ["x"], removeLabels: [], comment: "", close: false }] }, { dryRun: true });
    assert.equal(calls.length, 0);
    assert.equal(res.dryRun, true);
    assert.equal(res.results[0].ok, true);
    assert.equal(res.results[0].steps.length, 1);
});

test("applyPlan wysyła JSON przez stdin i zbiera błędy per issue", async () => {
    const { run, calls } = fakeRunner("issues/2/comments");
    const plan = {
        changes: [
            { number: 1, addLabels: ["x"], removeLabels: [], comment: "", close: true, stateReason: "completed" },
            { number: 2, addLabels: [], removeLabels: [], comment: "c", close: true, stateReason: "completed" },
        ],
    };
    const res = await applyPlan(run, repo, plan, {});
    assert.equal(res.dryRun, false);
    assert.equal(res.results[0].ok, true);
    assert.equal(res.results[1].ok, false);
    // after a failed comment the close step for that issue must be skipped
    assert.equal(calls.filter((c) => c.args.join(" ").includes("issues/2") && c.args.includes("PATCH")).length, 0);
    const first = calls[0];
    assert.deepEqual(first.args, ["api", "-X", "POST", "repos/o/r/issues/1/labels", "--input", "-"]);
    assert.deepEqual(JSON.parse(first.input), { labels: ["x"] });
});

test("fetchIssues stronicuje, spłaszcza strony i pomija PR-y", async () => {
    const calls = [];
    const run = async (args) => {
        calls.push(args);
        return [
            [{ number: 1, title: "a", labels: [], assignees: [], user: { login: "u" }, body: null, html_url: "u1", state: "open" }],
            [{ number: 2, title: "pr", pull_request: {}, labels: [], assignees: [] }],
        ];
    };
    const issues = await fetchIssues(run, repo);
    assert.deepEqual(issues.map((i) => i.number), [1]);
    assert.ok(calls[0].includes("--paginate") && calls[0].includes("--slurp"));
    assert.ok(calls[0].some((a) => a.startsWith("repos/o/r/issues?state=open")));
});

test("fetchLabels zwraca nazwy etykiet", async () => {
    const run = async () => [[{ name: "bug", color: "d73a4a", description: "x" }]];
    assert.deepEqual(await fetchLabels(run, repo), [{ name: "bug", color: "d73a4a", description: "x" }]);
});
