import { mkdirSync, readFileSync, renameSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
    parseRepo,
    emptyDecision,
    applyDecisionPatch,
    buildPlan,
    reviewProgress,
    mergeFetched,
} from "./triage.mjs";
import { fetchIssues, fetchLabels, applyPlan } from "./github.mjs";

const VERSION = 1;

function blankState(full) {
    return { version: VERSION, repo: full, fetchedAt: null, issues: [], labels: [], decisions: {}, lastApply: null, notice: null };
}

/**
 * Owns triage drafts per repository. Drafts are persisted as one JSON file per
 * repo so any canvas instance (or a fresh one after reload) sees the same work.
 */
export class TriageService {
    constructor({ dir, run, onChange = () => {} }) {
        this.dir = dir;
        this.run = run;
        this.onChange = onChange;
        this.cache = new Map();
        this.busy = new Map();
    }

    fileFor(full) {
        return join(this.dir, `${full.replace("/", "__")}.json`);
    }

    load(full) {
        if (this.cache.has(full)) return this.cache.get(full);
        let state = blankState(full);
        const file = this.fileFor(full);
        if (existsSync(file)) {
            try {
                const parsed = JSON.parse(readFileSync(file, "utf8"));
                if (parsed?.version === VERSION) state = { ...state, ...parsed, repo: full };
            } catch {
                state.notice = "Nie udało się odczytać zapisanego szkicu — zaczynamy od nowa.";
            }
        }
        this.cache.set(full, state);
        return state;
    }

    save(full) {
        const state = this.cache.get(full);
        mkdirSync(this.dir, { recursive: true });
        const file = this.fileFor(full);
        const tmp = `${file}.${process.pid}.tmp`;
        writeFileSync(tmp, JSON.stringify(state, null, 2), "utf8");
        renameSync(tmp, file);
        this.onChange(full);
    }

    getState(repoText) {
        const { full } = parseRepo(repoText);
        const state = this.load(full);
        return {
            ...state,
            busy: this.busy.get(full) ?? null,
            progress: reviewProgress(state.issues, state.decisions),
            plan: buildPlan(state.issues, state.decisions),
        };
    }

    async withBusy(full, what, fn) {
        if (this.busy.get(full)) throw new Error(`Trwa już operacja "${this.busy.get(full)}" dla ${full}.`);
        this.busy.set(full, what);
        this.onChange(full);
        try {
            return await fn();
        } finally {
            this.busy.delete(full);
            this.onChange(full);
        }
    }

    async fetch(repoText) {
        const repo = parseRepo(repoText);
        return this.withBusy(repo.full, "fetch", async () => {
            const [issues, labels] = await Promise.all([fetchIssues(this.run, repo), fetchLabels(this.run, repo)]);
            const state = this.load(repo.full);
            const { decisions, dropped } = mergeFetched(state.issues, state.decisions, issues);
            Object.assign(state, {
                issues,
                labels,
                decisions,
                fetchedAt: new Date().toISOString(),
                notice: dropped.length
                    ? `Odrzucono decyzje dla ${dropped.length} issue (zmienione lub zamknięte na GitHubie): ${dropped.map((n) => `#${n}`).join(", ")}.`
                    : null,
            });
            this.save(repo.full);
            return { count: issues.length, dropped };
        });
    }

    setDecision(repoText, number, patch) {
        const { full } = parseRepo(repoText);
        if (this.busy.get(full)) throw new Error(`Trwa operacja "${this.busy.get(full)}" — spróbuj za chwilę.`);
        const state = this.load(full);
        const issue = state.issues.find((i) => i.number === Number(number));
        if (!issue) throw new Error(`Issue #${number} nie występuje na pobranej liście ${full}.`);
        state.decisions[issue.number] = applyDecisionPatch(issue, state.decisions[issue.number], patch);
        this.save(full);
        return state.decisions[issue.number];
    }

    resetDecision(repoText, number) {
        const { full } = parseRepo(repoText);
        const state = this.load(full);
        delete state.decisions[Number(number)];
        this.save(full);
    }

    discard(repoText) {
        const { full } = parseRepo(repoText);
        if (this.busy.get(full)) throw new Error(`Trwa operacja "${this.busy.get(full)}" — spróbuj za chwilę.`);
        const state = this.load(full);
        state.decisions = {};
        state.notice = "Odrzucono wszystkie lokalne decyzje.";
        this.save(full);
    }

    async apply(repoText, { confirm = false, dryRun = false, planHash } = {}) {
        const repo = parseRepo(repoText);
        const view = this.getState(repo.full);
        if (!view.progress.complete) {
            throw new Error(`Najpierw przejrzyj wszystkie issues (${view.progress.reviewed}/${view.progress.total}).`);
        }
        if (confirm !== true) throw new Error("Zapis na GitHubie wymaga jawnego potwierdzenia (confirm: true).");
        if (planHash !== undefined && planHash !== view.plan.hash) {
            throw new Error("Plan zmienił się od momentu potwierdzenia — przejrzyj podsumowanie ponownie.");
        }
        if (!view.plan.changes.length) return { dryRun, ok: true, results: [], message: "Brak zmian do zastosowania." };
        if (dryRun) return applyPlan(this.run, repo, view.plan, { dryRun: true });

        return this.withBusy(repo.full, "apply", async () => {
            const result = await applyPlan(this.run, repo, view.plan, { dryRun: false });
            const state = this.load(repo.full);
            for (const r of result.results) {
                const decision = state.decisions[r.number];
                const idx = state.issues.findIndex((i) => i.number === r.number);
                if (idx < 0 || !decision) continue;
                if (!r.ok) {
                    // Record what already reached GitHub so a retry does not repeat it.
                    let labels = [...state.issues[idx].labels];
                    for (const step of r.steps.filter((s) => s.ok)) {
                        if (step.op === "add-labels") labels = [...labels, ...step.labels];
                        if (step.op === "remove-label") labels = labels.filter((l) => l.toLowerCase() !== step.label.toLowerCase());
                        if (step.op === "comment") state.decisions[r.number] = { ...state.decisions[r.number], comment: "" };
                    }
                    state.issues[idx] = { ...state.issues[idx], labels };
                    continue;
                }
                if (decision.state === "closed") {
                    state.issues.splice(idx, 1);
                    delete state.decisions[r.number];
                } else {
                    state.issues[idx] = { ...state.issues[idx], labels: [...decision.labels] };
                    state.decisions[r.number] = { ...emptyDecision(state.issues[idx]), reviewed: true };
                }
            }
            state.lastApply = { at: new Date().toISOString(), ok: result.ok, results: result.results };
            state.notice = result.ok
                ? `Zastosowano zmiany w ${result.results.length} issue.`
                : "Część zmian nie powiodła się — szczegóły w ostatnim raporcie.";
            this.save(repo.full);
            return result;
        });
    }
}
