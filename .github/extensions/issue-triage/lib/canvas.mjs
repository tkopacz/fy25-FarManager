import { join } from "node:path";
import { homedir } from "node:os";
import { parseRepo, PRIORITIES, STATE_REASONS } from "./triage.mjs";
import { createGhRunner } from "./github.mjs";
import { TriageService } from "./service.mjs";
import { startInstanceServer } from "./server.mjs";

export const DEFAULT_REPO = "tkopacz/fy25-FarManager";
const REPO_PATTERN = "^[A-Za-z0-9][A-Za-z0-9._-]{0,99}/[A-Za-z0-9][A-Za-z0-9._-]{0,99}$";

function storageDir(session) {
    if (session?.workspacePath) return join(session.workspacePath, "issue-triage");
    const home = process.env.COPILOT_HOME || join(homedir(), ".copilot");
    return join(home, "extensions", "issue-triage", "artifacts");
}

const labelArray = { type: "array", items: { type: "string", minLength: 1, maxLength: 100 } };

export function createTriageCanvas({ createCanvas, CanvasError, getSession, root, run = createGhRunner() }) {
    // instanceId → { repo, server? }. Only the panel's current repo lives here; drafts are in the service.
    const instances = new Map();
    let service = null;

    function getService() {
        if (!service) {
            service = new TriageService({
                dir: storageDir(getSession()),
                run,
                onChange: (repo) => {
                    for (const inst of instances.values()) if (inst.repo === repo) inst.server?.notify();
                },
            });
        }
        return service;
    }

    function instanceFor(instanceId) {
        let inst = instances.get(instanceId);
        if (!inst) {
            inst = { repo: DEFAULT_REPO, server: null };
            inst.setRepo = (value) => {
                inst.repo = parseRepo(value).full;
                inst.server?.notify();
            };
            instances.set(instanceId, inst);
        }
        return inst;
    }

    function describe(inst) {
        const state = getService().getState(inst.repo);
        return { ...state, storageFile: getService().fileFor(inst.repo) };
    }

    function wrap(handler) {
        return async (ctx) => {
            try {
                return await handler(instanceFor(ctx.instanceId), ctx.input ?? {});
            } catch (error) {
                if (error instanceof CanvasError) throw error;
                throw new CanvasError("triage_error", error.message);
            }
        };
    }

    function summary(inst, { includeIssues = true } = {}) {
        const s = describe(inst);
        return {
            repo: s.repo,
            fetchedAt: s.fetchedAt,
            busy: s.busy,
            notice: s.notice,
            progress: s.progress,
            availableLabels: s.labels.map((l) => l.name),
            pendingChanges: s.plan,
            canApply: s.progress.complete && s.plan.changes.length > 0,
            storageFile: s.storageFile,
            issues: includeIssues
                ? s.issues.map((i) => ({
                      number: i.number,
                      title: i.title,
                      url: i.url,
                      labels: i.labels,
                      assignees: i.assignees,
                      bodyExcerpt: i.bodyExcerpt,
                      decision: s.decisions[i.number] ?? null,
                  }))
                : undefined,
        };
    }

    return createCanvas({
        id: "issue-triage",
        displayName: "Triage issues",
        description: "Pobiera otwarte issues GitHuba na żądanie, pozwala je lokalnie posegregować i po przejrzeniu wszystkich opcjonalnie zapisać triage na GitHubie.",
        inputSchema: {
            type: "object",
            properties: { repo: { type: "string", pattern: REPO_PATTERN, description: "Repozytorium owner/repo (domyślnie tkopacz/fy25-FarManager)." } },
            additionalProperties: false,
        },
        actions: [
            {
                name: "set_repo",
                description: "Przełącza panel na inne repozytorium (owner/repo). Szkice są przechowywane osobno dla każdego repo.",
                inputSchema: {
                    type: "object",
                    properties: { repo: { type: "string", pattern: REPO_PATTERN } },
                    required: ["repo"],
                    additionalProperties: false,
                },
                handler: wrap((inst, input) => {
                    inst.setRepo(input.repo);
                    return summary(inst, { includeIssues: false });
                }),
            },
            {
                name: "fetch_issues",
                description: "Pobiera (lub odświeża) listę otwartych issues i etykiet z GitHuba przez gh. Zachowuje decyzje dla niezmienionych issues.",
                inputSchema: { type: "object", properties: {}, additionalProperties: false },
                handler: wrap(async (inst) => {
                    const r = await getService().fetch(inst.repo);
                    return { ...r, ...summary(inst, { includeIssues: false }) };
                }),
            },
            {
                name: "get_state",
                description: "Zwraca repozytorium, postęp przeglądu, issues z lokalnymi decyzjami oraz oczekujące zmiany.",
                inputSchema: {
                    type: "object",
                    properties: { includeIssues: { type: "boolean", default: true } },
                    additionalProperties: false,
                },
                handler: wrap((inst, input) => summary(inst, { includeIssues: input.includeIssues !== false })),
            },
            {
                name: "set_decision",
                description: "Ustawia lokalną decyzję triage dla issue (etykiety, priorytet, zamknięcie, komentarz) i domyślnie oznacza je jako przejrzane. Nic nie zapisuje na GitHubie.",
                inputSchema: {
                    type: "object",
                    properties: {
                        number: { type: "integer", minimum: 1 },
                        labels: { ...labelArray, description: "Docelowy pełny zestaw etykiet." },
                        addLabels: labelArray,
                        removeLabels: labelArray,
                        priority: { type: "string", enum: [...PRIORITIES, "none"] },
                        state: { type: "string", enum: ["open", "closed"] },
                        stateReason: { type: "string", enum: STATE_REASONS },
                        comment: { type: "string", maxLength: 10000 },
                        reviewed: { type: "boolean", default: true },
                    },
                    required: ["number"],
                    additionalProperties: false,
                },
                handler: wrap((inst, input) => {
                    const { number, ...patch } = input;
                    const decision = getService().setDecision(inst.repo, number, patch);
                    return { number, decision, progress: describe(inst).progress };
                }),
            },
            {
                name: "reset_decision",
                description: "Usuwa lokalną decyzję dla issue (wraca do stanu 'do przejrzenia').",
                inputSchema: {
                    type: "object",
                    properties: { number: { type: "integer", minimum: 1 } },
                    required: ["number"],
                    additionalProperties: false,
                },
                handler: wrap((inst, input) => {
                    getService().resetDecision(inst.repo, input.number);
                    return { number: input.number, progress: describe(inst).progress };
                }),
            },
            {
                name: "get_pending_changes",
                description: "Zwraca podsumowanie (diff) zmian, które zostałyby zapisane na GitHubie.",
                inputSchema: { type: "object", properties: {}, additionalProperties: false },
                handler: wrap((inst) => {
                    const s = describe(inst);
                    return { repo: s.repo, progress: s.progress, plan: s.plan, canApply: s.progress.complete && s.plan.changes.length > 0 };
                }),
            },
            {
                name: "apply_changes",
                description: "Zapisuje oczekujące zmiany na GitHubie. Wymaga przejrzenia wszystkich issues i jawnego confirm: true; dryRun: true tylko pokazuje kroki. Opcjonalny planHash (z get_pending_changes) gwarantuje, że zapisany zostanie dokładnie potwierdzony plan.",
                inputSchema: {
                    type: "object",
                    properties: {
                        confirm: { type: "boolean", const: true },
                        dryRun: { type: "boolean", default: false },
                        planHash: { type: "string", pattern: "^[0-9a-f]{8}$" },
                    },
                    required: ["confirm"],
                    additionalProperties: false,
                },
                handler: wrap(async (inst, input) => getService().apply(inst.repo, { confirm: input.confirm, dryRun: input.dryRun === true, planHash: input.planHash })),
            },
            {
                name: "discard_changes",
                description: "Odrzuca wszystkie lokalne decyzje dla bieżącego repo. Wymaga confirm: true.",
                inputSchema: {
                    type: "object",
                    properties: { confirm: { type: "boolean", const: true } },
                    required: ["confirm"],
                    additionalProperties: false,
                },
                handler: wrap((inst) => {
                    getService().discard(inst.repo);
                    return summary(inst, { includeIssues: false });
                }),
            },
        ],
        open: async (ctx) => {
            const inst = instanceFor(ctx.instanceId);
            if (ctx.input?.repo) inst.setRepo(ctx.input.repo);
            if (!inst.server) {
                inst.server = await startInstanceServer({ root, service: getService(), instance: inst, describe: () => describe(inst) });
            }
            const progress = describe(inst).progress;
            return {
                url: inst.server.url,
                title: `Triage: ${inst.repo}`,
                status: progress.total ? `${progress.reviewed}/${progress.total} przejrzanych` : "Nie pobrano issues",
            };
        },
        onClose: async (ctx) => {
            const inst = instances.get(ctx.instanceId);
            instances.delete(ctx.instanceId);
            await inst?.server?.close();
        },
    });
}
