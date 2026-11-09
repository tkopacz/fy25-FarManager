// Pure triage logic shared by the extension process and the canvas iframe.
// Keep this file free of Node-only imports: it is also served to the browser.

export const PRIORITIES = ["high", "medium", "low"];
export const PRIORITY_PREFIX = "priority: ";
export const STATE_REASONS = ["completed", "not_planned"];
const EXCERPT_LENGTH = 300;
const NAME_RE = /^[A-Za-z0-9](?:[A-Za-z0-9._-]{0,99})$/;

export function parseRepo(value) {
    const text = String(value ?? "").trim();
    const parts = text.split("/");
    if (parts.length !== 2 || !parts.every((p) => NAME_RE.test(p) && p !== "." && p !== "..")) {
        throw new Error(`Nieprawidłowe repozytorium "${text}" — oczekiwano formatu owner/repo.`);
    }
    return { owner: parts[0], repo: parts[1], full: `${parts[0]}/${parts[1]}` };
}

export function normalizeIssue(raw) {
    if (!raw || raw.pull_request) return null;
    const body = String(raw.body ?? "").replace(/\s+/g, " ").trim();
    return {
        number: raw.number,
        title: String(raw.title ?? ""),
        url: raw.html_url ?? "",
        state: raw.state ?? "open",
        labels: (raw.labels ?? []).map((l) => (typeof l === "string" ? l : l?.name)).filter(Boolean),
        assignees: (raw.assignees ?? []).map((a) => a?.login).filter(Boolean),
        author: raw.user?.login ?? "",
        bodyExcerpt: body.length > EXCERPT_LENGTH ? `${body.slice(0, EXCERPT_LENGTH)}…` : body,
        createdAt: raw.created_at ?? null,
        updatedAt: raw.updated_at ?? null,
        comments: raw.comments ?? 0,
    };
}

export function emptyDecision(issue) {
    return {
        reviewed: false,
        labels: [...issue.labels],
        state: issue.state === "closed" ? "closed" : "open",
        stateReason: null,
        comment: "",
        updatedAt: issue.updatedAt,
    };
}

export function getPriority(labels) {
    const found = labels.find((l) => l.toLowerCase().startsWith(PRIORITY_PREFIX));
    return found ? found.slice(PRIORITY_PREFIX.length).trim().toLowerCase() : "none";
}

export function setPriority(labels, priority) {
    if (priority !== "none" && !PRIORITIES.includes(priority)) {
        throw new Error(`Nieznany priorytet "${priority}" — dozwolone: ${PRIORITIES.join(", ")}, none.`);
    }
    const isPriority = (l) => l.toLowerCase().startsWith(PRIORITY_PREFIX);
    const rest = labels.filter((l) => !isPriority(l));
    if (priority === "none") return rest;
    const target = `${PRIORITY_PREFIX}${priority}`;
    // GitHub label names are case-insensitive: keep the existing spelling if it already matches.
    const existing = labels.find((l) => isPriority(l) && l.toLowerCase() === target);
    return [...rest, existing ?? target];
}

function labelList(value, field) {
    if (!Array.isArray(value)) throw new Error(`Pole "${field}" musi być tablicą nazw etykiet.`);
    return value.map((l) => {
        const name = typeof l === "string" ? l.trim() : "";
        if (!name || name.length > 100) throw new Error(`Pole "${field}" zawiera nieprawidłową etykietę.`);
        return name;
    });
}

const key = (label) => label.toLowerCase();

function unique(list) {
    const seen = new Set();
    return list.filter((l) => !seen.has(key(l)) && seen.add(key(l)));
}

// FNV-1a; good enough to detect that a confirmed plan changed before applying it.
function hashText(text) {
    let h = 0x811c9dc5;
    for (let i = 0; i < text.length; i++) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(16).padStart(8, "0");
}

/**
 * Returns a new decision with `patch` applied. Any patch marks the issue as
 * reviewed unless `reviewed: false` is passed explicitly.
 */
export function applyDecisionPatch(issue, current, patch = {}) {
    const next = { ...(current ?? emptyDecision(issue)) };
    next.labels = [...next.labels];
    if (patch.labels !== undefined) next.labels = labelList(patch.labels, "labels");
    if (patch.addLabels !== undefined) next.labels = [...next.labels, ...labelList(patch.addLabels, "addLabels")];
    if (patch.removeLabels !== undefined) {
        const drop = new Set(labelList(patch.removeLabels, "removeLabels").map(key));
        next.labels = next.labels.filter((l) => !drop.has(key(l)));
    }
    if (patch.priority !== undefined) next.labels = setPriority(next.labels, patch.priority);
    next.labels = unique(next.labels);
    if (patch.state !== undefined) {
        if (patch.state !== "open" && patch.state !== "closed") {
            throw new Error(`Nieprawidłowy stan "${patch.state}" — dozwolone: open, closed.`);
        }
        next.state = patch.state;
    }
    if (patch.stateReason !== undefined && patch.stateReason !== null) {
        if (!STATE_REASONS.includes(patch.stateReason)) {
            throw new Error(`Nieprawidłowy powód zamknięcia "${patch.stateReason}".`);
        }
        next.stateReason = patch.stateReason;
    }
    if (next.state === "open") next.stateReason = null;
    else if (!next.stateReason) next.stateReason = "completed";
    if (patch.comment !== undefined) {
        if (typeof patch.comment !== "string") throw new Error(`Pole "comment" musi być tekstem.`);
        next.comment = patch.comment;
    }
    next.reviewed = patch.reviewed === undefined ? true : Boolean(patch.reviewed);
    next.updatedAt = issue.updatedAt;
    return next;
}

export function computeIssueChange(issue, decision) {
    if (!decision) return null;
    const before = new Set(issue.labels.map(key));
    const after = new Set(decision.labels.map(key));
    const addLabels = unique(decision.labels).filter((l) => !before.has(key(l)));
    const removeLabels = unique(issue.labels).filter((l) => !after.has(key(l)));
    const comment = String(decision.comment ?? "").trim();
    const close = decision.state === "closed" && issue.state !== "closed";
    if (!addLabels.length && !removeLabels.length && !comment && !close) return null;
    return {
        number: issue.number,
        title: issue.title,
        addLabels,
        removeLabels,
        comment,
        close,
        stateReason: close ? decision.stateReason ?? "completed" : null,
    };
}

export function reviewProgress(issues, decisions) {
    const reviewed = issues.filter((i) => decisions[i.number]?.reviewed).length;
    return { total: issues.length, reviewed, complete: issues.length > 0 && reviewed === issues.length };
}

export function buildPlan(issues, decisions) {
    const changes = issues.map((i) => computeIssueChange(i, decisions[i.number])).filter(Boolean);
    const counts = { issues: changes.length, addLabels: 0, removeLabels: 0, comments: 0, closes: 0 };
    for (const c of changes) {
        counts.addLabels += c.addLabels.length;
        counts.removeLabels += c.removeLabels.length;
        if (c.comment) counts.comments += 1;
        if (c.close) counts.closes += 1;
    }
    return { changes, counts, hash: hashText(JSON.stringify(changes)) };
}

/**
 * Re-fetching keeps a draft decision only when the issue still exists and was
 * not modified on GitHub since the decision was made.
 */
export function mergeFetched(oldIssues, decisions, newIssues) {
    const fresh = new Map(newIssues.map((i) => [String(i.number), i]));
    const next = {};
    const dropped = [];
    for (const [key, decision] of Object.entries(decisions ?? {})) {
        const issue = fresh.get(key);
        if (issue && decision?.updatedAt === issue.updatedAt) next[key] = decision;
        else dropped.push(Number(key));
    }
    return { decisions: next, dropped };
}

export const SORTS = {
    "number-desc": (a, b) => b.number - a.number,
    "number-asc": (a, b) => a.number - b.number,
    title: (a, b) => a.title.localeCompare(b.title),
    "updated-desc": (a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)),
    "comments-desc": (a, b) => b.comments - a.comments,
};

export function sortIssues(issues, sort = "number-desc") {
    return [...issues].sort(SORTS[sort] ?? SORTS["number-desc"]);
}

export function filterIssues(issues, decisions, { status = "all", label = "", text = "" } = {}) {
    const needle = text.trim().toLowerCase();
    return issues.filter((i) => {
        const reviewed = Boolean(decisions[i.number]?.reviewed);
        if (status === "pending" && reviewed) return false;
        if (status === "reviewed" && !reviewed) return false;
        if (status === "changed" && !computeIssueChange(i, decisions[i.number])) return false;
        if (label && !i.labels.includes(label)) return false;
        if (needle && !`#${i.number} ${i.title} ${i.bodyExcerpt}`.toLowerCase().includes(needle)) return false;
        return true;
    });
}
