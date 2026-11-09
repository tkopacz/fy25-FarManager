import { execFile } from "node:child_process";
import { normalizeIssue } from "./triage.mjs";

/**
 * Runs `gh` with the given args, optionally piping `input` to stdin, and
 * parses the JSON response (empty output resolves to null).
 */
export function createGhRunner({ bin = "gh", timeoutMs = 60_000 } = {}) {
    return (args, input) =>
        new Promise((resolve, reject) => {
            const child = execFile(
                bin,
                args,
                { maxBuffer: 64 * 1024 * 1024, timeout: timeoutMs, windowsHide: true },
                (error, stdout, stderr) => {
                    if (error) {
                        const detail = String(stderr || error.message).trim().split("\n").slice(-3).join(" ");
                        reject(new Error(`gh ${args.slice(0, 4).join(" ")}: ${detail}`));
                        return;
                    }
                    const text = String(stdout).trim();
                    if (!text) return resolve(null);
                    try {
                        resolve(JSON.parse(text));
                    } catch {
                        resolve(text);
                    }
                },
            );
            if (input !== undefined) child.stdin.end(input);
            else child.stdin.end();
        });
}

function flattenPages(pages) {
    if (!Array.isArray(pages)) return [];
    return pages.flatMap((p) => (Array.isArray(p) ? p : [p]));
}

export async function fetchIssues(run, repo) {
    const pages = await run(["api", "--paginate", "--slurp", `repos/${repo.owner}/${repo.repo}/issues?state=open&per_page=100`]);
    return flattenPages(pages).map(normalizeIssue).filter(Boolean);
}

export async function fetchLabels(run, repo) {
    const pages = await run(["api", "--paginate", "--slurp", `repos/${repo.owner}/${repo.repo}/labels?per_page=100`]);
    return flattenPages(pages).map((l) => ({ name: l.name, color: l.color ?? "", description: l.description ?? "" }));
}

export function describeSteps(repo, change) {
    const base = `repos/${repo.owner}/${repo.repo}/issues/${change.number}`;
    const steps = [];
    if (change.addLabels?.length) {
        steps.push({ op: "add-labels", method: "POST", path: `${base}/labels`, body: { labels: change.addLabels }, labels: change.addLabels });
    }
    for (const name of change.removeLabels ?? []) {
        steps.push({ op: "remove-label", method: "DELETE", path: `${base}/labels/${encodeURIComponent(name)}`, body: null, label: name });
    }
    if (change.comment) {
        steps.push({ op: "comment", method: "POST", path: `${base}/comments`, body: { body: change.comment } });
    }
    if (change.close) {
        steps.push({
            op: "close",
            method: "PATCH",
            path: base,
            body: { state: "closed", state_reason: change.stateReason ?? "completed" },
        });
    }
    return steps;
}

/**
 * Applies the plan sequentially. Within one issue the first failing step
 * stops the remaining steps (so an issue is never closed without its
 * comment); other issues continue.
 */
export async function applyPlan(run, repo, plan, { dryRun = false } = {}) {
    const results = [];
    for (const change of plan.changes) {
        const steps = describeSteps(repo, change);
        const outcome = { number: change.number, ok: true, steps: [] };
        for (const step of steps) {
            const info = { op: step.op, method: step.method, path: step.path, labels: step.labels, label: step.label };
            if (dryRun) {
                outcome.steps.push({ ...info, ok: true, skipped: "dry-run" });
                continue;
            }
            if (!outcome.ok) {
                outcome.steps.push({ ...info, ok: false, skipped: "poprzedni krok nie powiódł się" });
                continue;
            }
            try {
                const args = ["api", "-X", step.method, step.path];
                if (step.body) await run([...args, "--input", "-"], JSON.stringify(step.body));
                else await run(args);
                outcome.steps.push({ ...info, ok: true });
            } catch (error) {
                // The label is already gone (e.g. after a partially failed earlier run) — that is the goal.
                if (step.op === "remove-label" && /HTTP 404/.test(error.message)) {
                    outcome.steps.push({ ...info, ok: true, note: "etykiety już nie było" });
                    continue;
                }
                outcome.ok = false;
                outcome.steps.push({ ...info, ok: false, error: error.message });
            }
        }
        results.push(outcome);
    }
    return { dryRun, results, ok: results.every((r) => r.ok) };
}
