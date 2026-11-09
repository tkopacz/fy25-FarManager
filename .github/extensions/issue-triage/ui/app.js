import { sortIssues, filterIssues, computeIssueChange, PRIORITY_PREFIX } from "/triage.mjs";

const $ = (id) => document.getElementById(id);
let state = null;
let selected = null;
let dirty = false;
let busyLocal = false;
let formPriorityLabels = [];
let shownPlanHash = null;

function h(tag, attrs = {}, ...children) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (v === undefined || v === null || v === false) continue;
        if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
        else if (k === "className") el.className = v;
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, String(v));
    }
    for (const c of children.flat()) {
        if (c === null || c === undefined || c === false) continue;
        el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
}

function safeUrl(url) {
    return /^https:\/\/github\.com\//.test(url) ? url : undefined;
}

function labelColor(name) {
    const color = state?.labels.find((l) => l.name === name)?.color ?? "";
    return /^[0-9a-f]{6}$/i.test(color) ? `#${color}` : "var(--border-color-default, #d1d9e0)";
}

function chip(name, cls) {
    const el = h("span", { className: `chip ${cls ?? ""}` }, name);
    el.style.borderLeftColor = labelColor(name);
    return el;
}

function showError(message) {
    $("error").hidden = !message;
    $("error").textContent = message ?? "";
}

function ask(message) {
    return new Promise((resolve) => {
        const dlg = $("ask-dialog");
        $("ask-text").textContent = message;
        const done = (value) => {
            $("ask-yes").onclick = $("ask-no").onclick = dlg.oncancel = null;
            dlg.close();
            resolve(value);
        };
        $("ask-yes").onclick = () => done(true);
        $("ask-no").onclick = () => done(false);
        dlg.oncancel = () => done(false);
        dlg.showModal();
    });
}

async function api(path, body) {
    const res = await fetch(path, {
        method: body === undefined ? "GET" : "POST",
        headers: body === undefined ? {} : { "Content-Type": "application/json" },
        body: body === undefined ? undefined : JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
    return data;
}

async function action(path, body, { keepDirty = false } = {}) {
    busyLocal = true;
    renderToolbar();
    try {
        const data = await api(path, body);
        showError(null);
        if (!keepDirty) dirty = false;
        if (data.state) setState(data.state);
        return data;
    } catch (error) {
        showError(error.message);
        throw error;
    } finally {
        busyLocal = false;
        renderToolbar();
    }
}

async function refresh() {
    try {
        setState(await api("/api/state"));
    } catch (error) {
        showError(error.message);
    }
}

function setState(next) {
    const repoChanged = state && state.repo !== next.repo;
    state = next;
    if (repoChanged || (selected !== null && !state.issues.some((i) => i.number === selected))) {
        selected = null;
        dirty = false;
    }
    // Keep the confirmation bound to what is on screen: a changed plan needs a fresh confirmation.
    if ($("apply-dialog").open && state.plan.hash !== shownPlanHash) showDialogPlan();
    render();
}

function visibleIssues() {
    const filtered = filterIssues(state.issues, state.decisions, {
        status: $("filter-status").value,
        label: $("filter-label").value,
        text: $("filter-text").value,
    });
    return sortIssues(filtered, $("sort").value);
}

function renderToolbar() {
    if (!state) return;
    const busy = busyLocal || Boolean(state.busy);
    if (document.activeElement !== $("repo-input")) $("repo-input").value = state.repo;
    $("fetch-btn").disabled = busy;
    $("fetch-btn").textContent = state.busy === "fetch" ? "Pobieranie…" : state.fetchedAt ? "Odśwież issues" : "Pobierz issues";
    const { total, reviewed, complete } = state.progress;
    $("progress-fill").style.width = total ? `${Math.round((reviewed / total) * 100)}%` : "0";
    $("progress-text").textContent = state.fetchedAt
        ? `Przejrzano ${reviewed} z ${total}${complete ? " ✓" : ""}`
        : "Nie pobrano issues";
    const pending = state.plan.changes.length;
    $("plan-summary").textContent = state.fetchedAt
        ? pending
            ? `Oczekujące zmiany: ${pending} issue (+${state.plan.counts.addLabels} / −${state.plan.counts.removeLabels} etykiet, ${state.plan.counts.comments} komentarzy, ${state.plan.counts.closes} zamknięć)`
            : "Brak oczekujących zmian"
        : "";
    $("apply-btn").disabled = busy || !complete || pending === 0;
    $("apply-btn").title = complete ? "" : "Dostępne po przejrzeniu wszystkich issues";
    $("discard-btn").disabled = busy || Object.keys(state.decisions).length === 0;
}

function renderLabelFilter() {
    const sel = $("filter-label");
    const current = sel.value;
    const names = [...new Set([...state.labels.map((l) => l.name), ...state.issues.flatMap((i) => i.labels)])].sort();
    sel.replaceChildren(h("option", { value: "" }, "Dowolna etykieta"), ...names.map((n) => h("option", { value: n }, n)));
    sel.value = names.includes(current) ? current : "";
}

function renderList() {
    const list = $("issue-list");
    const items = visibleIssues().map((issue) => {
        const decision = state.decisions[issue.number];
        const change = computeIssueChange(issue, decision);
        const mark = decision?.reviewed ? (change ? "●" : "✓") : "○";
        const markCls = decision?.reviewed ? (change ? "mark changed" : "mark done") : "mark";
        return h(
            "li",
            {
                className: issue.number === selected ? "selected" : "",
                tabindex: 0,
                onclick: () => select(issue.number),
                onkeydown: (e) => e.key === "Enter" && select(issue.number),
                title: change ? "Przejrzane, ze zmianami" : decision?.reviewed ? "Przejrzane, bez zmian" : "Do przejrzenia",
            },
            h("span", { className: markCls }, mark),
            h("span", { className: "title" }, `#${issue.number} ${issue.title}`),
        );
    });
    list.replaceChildren(...items);
}

async function select(number) {
    if (dirty && number !== selected && !(await ask("Porzucić niezapisane zmiany w formularzu?"))) return;
    selected = number;
    dirty = false;
    render();
}

function nextPending(after) {
    const ordered = visibleIssues();
    const all = sortIssues(state.issues, $("sort").value);
    const pool = ordered.length ? ordered : all;
    const idx = pool.findIndex((i) => i.number === after);
    const rotated = [...pool.slice(idx + 1), ...pool.slice(0, idx + 1)];
    return (rotated.find((i) => !state.decisions[i.number]?.reviewed) ?? null)?.number ?? null;
}

function renderDetail() {
    const detail = $("detail");
    if (!state.fetchedAt) {
        detail.replaceChildren(h("p", { className: "muted" }, "Kliknij „Pobierz issues”, aby wczytać otwarte zgłoszenia. Nic nie jest pobierane wcześniej."));
        return;
    }
    if (!state.issues.length) {
        detail.replaceChildren(h("p", { className: "muted" }, "Brak otwartych issues w tym repozytorium."));
        return;
    }
    const issue = state.issues.find((i) => i.number === selected);
    if (!issue) {
        detail.replaceChildren(
            h("p", { className: "muted" }, "Wybierz issue z listy po lewej."),
            h("button", { className: "primary", type: "button", onclick: () => select(nextPending(null) ?? state.issues[0].number) }, "Zacznij od pierwszego nieprzejrzanego"),
        );
        return;
    }
    if (dirty) return;

    const decision = state.decisions[issue.number];
    const labels = decision?.labels ?? issue.labels;
    const allLabels = [...new Set([...state.labels.map((l) => l.name), ...issue.labels, ...labels])]
        .filter((n) => !n.toLowerCase().startsWith(PRIORITY_PREFIX))
        .sort();
    const stateValue = decision?.state === "closed" ? `closed:${decision.stateReason ?? "completed"}` : "open";
    const markDirty = () => {
        dirty = true;
    };

    const labelBoxes = allLabels.map((name) =>
        h("label", {}, h("input", { type: "checkbox", name: "label", value: name, checked: labels.includes(name), onchange: markDirty }), " ", chip(name)),
    );
    const priorityLabels = labels.filter((l) => l.toLowerCase().startsWith(PRIORITY_PREFIX));
    const prioritySel = h(
        "select",
        { id: "f-priority", onchange: markDirty },
        h("option", { value: "keep" }, `bez zmian (${priorityLabels.length ? priorityLabels.join(", ") : "brak"})`),
        ...[["none", "usuń priorytet"], ["high", "wysoki"], ["medium", "średni"], ["low", "niski"]].map(([v, t]) => h("option", { value: v }, t)),
    );
    prioritySel.value = "keep";
    formPriorityLabels = priorityLabels;
    const stateRadios = [
        ["open", "Pozostaw otwarte"],
        ["closed:completed", "Zamknij jako ukończone"],
        ["closed:not_planned", "Zamknij jako nieplanowane"],
    ].map(([v, t]) => h("label", {}, h("input", { type: "radio", name: "state", value: v, checked: v === stateValue, onchange: markDirty }), " ", t));
    const comment = h("textarea", { id: "f-comment", placeholder: "Opcjonalny komentarz dodawany przy zapisie…", oninput: markDirty });
    comment.value = decision?.comment ?? "";

    const change = computeIssueChange(issue, decision);
    detail.replaceChildren(
        h("h2", {}, h("a", { href: safeUrl(issue.url), target: "_blank", rel: "noopener noreferrer" }, `#${issue.number}`), " ", issue.title),
        h(
            "p",
            { className: "muted" },
            `autor: ${issue.author || "?"} · komentarze: ${issue.comments}`,
            issue.assignees.length ? ` · przypisani: ${issue.assignees.join(", ")}` : "",
            issue.updatedAt ? ` · aktualizacja: ${new Date(issue.updatedAt).toLocaleString("pl-PL")}` : "",
        ),
        h("div", { className: "chips" }, issue.labels.length ? issue.labels.map((l) => chip(l)) : h("span", { className: "muted" }, "brak etykiet")),
        h("div", { className: "excerpt" }, issue.bodyExcerpt || "(brak opisu)"),
        h("fieldset", {}, h("legend", {}, "Etykiety"), h("div", { className: "label-grid" }, labelBoxes)),
        h("fieldset", {}, h("legend", {}, "Priorytet i stan"), h("div", { className: "inline" }, h("label", {}, "Priorytet: ", prioritySel), ...stateRadios)),
        h("fieldset", {}, h("legend", {}, "Komentarz"), comment),
        change ? h("p", { className: "muted" }, "Zapisana decyzja zawiera zmiany — zobaczysz je w podsumowaniu przed zapisem.") : null,
        h(
            "div",
            { className: "actions" },
            h("button", { className: "primary", type: "button", onclick: () => saveDecision(issue, true) }, "Zatwierdź i dalej"),
            h("button", { type: "button", onclick: () => saveDecision(issue, false) }, "Zatwierdź"),
            h("button", { type: "button", onclick: () => markUnchanged(issue) }, "Bez zmian i dalej"),
            decision ? h("button", { type: "button", onclick: () => resetDecision(issue) }, "Cofnij decyzję") : null,
        ),
    );
}

function readForm() {
    const labels = [...document.querySelectorAll('input[name="label"]:checked')].map((el) => el.value);
    const stateValue = document.querySelector('input[name="state"]:checked')?.value ?? "open";
    const [st, reason] = stateValue.split(":");
    const priority = $("f-priority").value;
    return {
        labels: priority === "keep" ? [...labels, ...formPriorityLabels] : labels,
        ...(priority === "keep" ? {} : { priority }),
        state: st,
        ...(reason ? { stateReason: reason } : {}),
        comment: $("f-comment").value,
        reviewed: true,
    };
}

async function saveDecision(issue, advance) {
    const patch = readForm();
    const saved = await action("/api/decision", { number: issue.number, patch }).catch(() => null);
    if (saved && advance) {
        const next = nextPending(issue.number);
        if (next !== null) select(next);
    }
}

async function markUnchanged(issue) {
    const saved = await action("/api/decision", {
        number: issue.number,
        patch: { labels: issue.labels, state: "open", comment: "", reviewed: true },
    }).catch(() => null);
    if (!saved) return;
    const next = nextPending(issue.number);
    if (next !== null) select(next);
}

async function resetDecision(issue) {
    await action("/api/reset", { number: issue.number }).catch(() => {});
}

function render() {
    if (!state) return;
    renderToolbar();
    $("notice").hidden = !state.notice;
    $("notice").textContent = state.notice ?? "";
    $("filters").hidden = !state.fetchedAt;
    renderLabelFilter();
    renderList();
    renderDetail();
}

function renderPlan(container, plan) {
    if (!plan.changes.length) {
        container.replaceChildren(h("p", {}, "Brak zmian do zapisania."));
        return;
    }
    const rows = plan.changes.map((c) =>
        h(
            "tr",
            {},
            h("td", {}, `#${c.number}`),
            h("td", {}, c.title),
            h(
                "td",
                {},
                ...c.addLabels.map((l) => h("div", { className: "add" }, `+ ${l}`)),
                ...c.removeLabels.map((l) => h("div", { className: "remove" }, `− ${l}`)),
                c.comment ? h("div", {}, `💬 ${c.comment.length > 120 ? `${c.comment.slice(0, 120)}…` : c.comment}`) : null,
                c.close ? h("div", { className: "remove" }, `Zamknij (${c.stateReason === "not_planned" ? "nieplanowane" : "ukończone"})`) : null,
            ),
        ),
    );
    container.replaceChildren(h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Issue"), h("th", {}, "Tytuł"), h("th", {}, "Zmiany"))), h("tbody", {}, rows)));
}

function renderResult(result) {
    const container = $("apply-result");
    if (!result) return container.replaceChildren();
    const title = result.dryRun ? "Podgląd kroków (nic nie zostało zapisane)" : result.ok ? "Zapisano zmiany" : "Część zmian nie powiodła się";
    container.replaceChildren(
        h("h2", {}, title),
        h(
            "ul",
            {},
            result.results.map((r) =>
                h(
                    "li",
                    {},
                    `#${r.number} ${r.ok ? "✓" : "✗"} `,
                    r.steps.map((s) => h("div", { className: s.ok ? "" : "remove" }, h("code", {}, `${s.method ?? ""} ${s.path ?? s.op}`), s.error ? ` — ${s.error}` : "", s.skipped && !s.ok ? ` — pominięto: ${s.skipped}` : "")),
                ),
            ),
        ),
    );
}

function showDialogPlan() {
    $("apply-repo").textContent = `Repozytorium: ${state.repo}`;
    renderPlan($("apply-plan"), state.plan);
    shownPlanHash = state.plan.hash;
    $("apply-confirm").checked = false;
    $("confirm-apply-btn").disabled = true;
}

function openApplyDialog() {
    showDialogPlan();
    renderResult(null);
    $("apply-dialog").showModal();
}

$("repo-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (dirty && !(await ask("Porzucić niezapisane zmiany w formularzu?"))) return;
    action("/api/repo", { repo: $("repo-input").value }).catch(() => {});
});
$("fetch-btn").addEventListener("click", () => action("/api/fetch", {}, { keepDirty: true }).catch(() => {}));
$("apply-btn").addEventListener("click", openApplyDialog);
$("discard-btn").addEventListener("click", async () => {
    if (await ask("Odrzucić wszystkie lokalne decyzje dla tego repozytorium?")) action("/api/discard", {}).catch(() => {});
});
for (const id of ["filter-status", "filter-label", "sort"]) $(id).addEventListener("change", renderList);
$("filter-text").addEventListener("input", renderList);
$("apply-confirm").addEventListener("change", () => {
    $("confirm-apply-btn").disabled = !$("apply-confirm").checked;
});
$("cancel-apply-btn").addEventListener("click", () => $("apply-dialog").close());
$("dry-run-btn").addEventListener("click", async () => {
    const data = await action("/api/apply", { confirm: true, dryRun: true, planHash: shownPlanHash }, { keepDirty: true }).catch(() => null);
    if (data) renderResult(data.result);
});
$("confirm-apply-btn").addEventListener("click", async () => {
    if (!$("apply-confirm").checked) return;
    $("confirm-apply-btn").disabled = true;
    const data = await action("/api/apply", { confirm: true, planHash: shownPlanHash }).catch(() => null);
    if (data) {
        showDialogPlan();
        renderResult(data.result);
    }
    $("apply-confirm").checked = false;
});

const events = new EventSource("/events");
events.addEventListener("change", refresh);
refresh();
