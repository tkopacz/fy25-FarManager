import { SNIPPETS } from "/snippets.mjs";

const $ = (id) => document.getElementById(id);
const els = {
    fileForm: $("file-form"),
    filePath: $("file-path"),
    fileList: $("file-list"),
    blockSelect: $("block-select"),
    newToggle: $("new-toggle"),
    newForm: $("new-form"),
    newTitle: $("new-title"),
    newTemplate: $("new-template"),
    newCancel: $("new-cancel"),
    insertTemplate: $("insert-template"),
    status: $("status"),
    save: $("save"),
    revert: $("revert"),
    banner: $("banner"),
    source: $("source"),
    preview: $("preview"),
    renderError: $("render-error"),
    zoomIn: $("zoom-in"),
    zoomOut: $("zoom-out"),
    zoomFit: $("zoom-fit"),
};

const mermaid = window.mermaid;
let state = null;
let editorKey = null;
let editorTarget = null;
let lastSynced = "";
let pending = false;
let sendTimer = null;
let renderTimer = null;
let renderSeq = 0;
let zoom = "fit";
let darkTheme = null;
let sending = Promise.resolve(true);

const sameSource = (a, b) => a.replace(/\r\n?/g, "\n").replace(/\n+$/, "") === b.replace(/\r\n?/g, "\n").replace(/\n+$/, "");

async function api(method, url, body) {
    const res = await fetch(url, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { code: data.code, status: res.status });
    return data;
}

function showBanner(message, { kind = "error", actions = [] } = {}) {
    els.banner.replaceChildren(document.createTextNode(message));
    els.banner.className = `banner ${kind === "info" ? "info" : ""}`;
    for (const { label, onClick } of actions) {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", onClick);
        els.banner.append(b);
    }
    els.banner.hidden = false;
}

function hideBanner() {
    els.banner.hidden = true;
}

function currentBlock() {
    return state?.blocks?.[state.selected] ?? null;
}

// ---------- theme & rendering ----------

function isDark() {
    const el = document.documentElement;
    const tone = el.dataset.themeTone || document.body.dataset.themeTone;
    if (tone) return tone === "dark";
    const mode = el.dataset.colorMode || document.body.dataset.colorMode;
    if (mode === "dark" || mode === "light") return mode === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function initMermaid() {
    const dark = isDark();
    if (dark === darkTheme) return false;
    darkTheme = dark;
    const fontFamily = getComputedStyle(document.body).getPropertyValue("--font-sans").trim() || undefined;
    mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: dark ? "dark" : "default", fontFamily });
    return true;
}

function applyZoom() {
    const svg = els.preview.querySelector("svg");
    els.preview.classList.toggle("fit", zoom === "fit");
    if (!svg) return;
    if (zoom === "fit") {
        svg.style.width = "";
        return;
    }
    const width = svg.viewBox?.baseVal?.width || svg.getBoundingClientRect().width;
    svg.style.maxWidth = "none";
    svg.style.width = `${Math.round(width * zoom)}px`;
}

function scheduleRender(delay = 250) {
    clearTimeout(renderTimer);
    renderTimer = setTimeout(render, delay);
}

async function render() {
    const block = currentBlock();
    const key = editorKey;
    const source = els.source.value;
    if (!mermaid) {
        els.renderError.textContent = "Nie udało się wczytać biblioteki Mermaid.";
        els.renderError.hidden = false;
        return;
    }
    if (!block) {
        els.renderError.hidden = true;
        const p = document.createElement("p");
        p.className = "empty";
        p.textContent = "Brak diagramów w tym pliku — użyj „+ Nowy”, aby dodać pierwszy.";
        els.preview.replaceChildren(p);
        return;
    }
    if (!source.trim()) {
        els.renderError.hidden = true;
        const p = document.createElement("p");
        p.className = "empty";
        p.textContent = "Pusty diagram.";
        els.preview.replaceChildren(p);
        return;
    }
    initMermaid();
    const id = `arch-mmd-${++renderSeq}`;
    let result;
    try {
        const { svg } = await mermaid.render(id, source);
        if (key !== editorKey || source !== els.source.value) return;
        els.preview.innerHTML = svg;
        els.preview.classList.remove("stale");
        els.renderError.hidden = true;
        applyZoom();
        result = { ok: true };
    } catch (error) {
        document.getElementById(id)?.remove();
        document.getElementById(`d${id}`)?.remove();
        if (key !== editorKey || source !== els.source.value) return;
        const message = String(error?.message ?? error);
        els.renderError.textContent = message;
        els.renderError.hidden = false;
        els.preview.classList.add("stale");
        result = { ok: false, error: message };
    }
    api("POST", "/api/render", { path: state.path, index: state.selected, source, ...result }).catch(() => {});
}

// ---------- state sync ----------

function renderStatus() {
    els.status.classList.toggle("dirty", !!state?.dirty || pending);
    if (!state) return (els.status.textContent = "");
    const parts = [];
    if (!state.exists) parts.push("nowy plik");
    if (state.dirty || pending) parts.push("● niezapisane zmiany");
    else if (state.exists) parts.push("zapisano");
    els.status.textContent = parts.join(" · ");
    els.save.disabled = !(state.dirty || pending) && state.exists;
    els.revert.disabled = !(state.dirty || pending);
}

function applyState(next) {
    state = next;
    if (document.activeElement !== els.filePath) els.filePath.value = state.path;

    const options = state.blocks.map((b) => {
        const o = document.createElement("option");
        o.value = String(b.index);
        o.textContent = `${b.index + 1}. ${b.title || "(bez tytułu)"} — linia ${b.startLine}`;
        return o;
    });
    els.blockSelect.replaceChildren(...options);
    els.blockSelect.disabled = !options.length;
    if (options.length) els.blockSelect.value = String(state.selected);
    els.newToggle.disabled = state.kind === "mermaid";

    if (state.conflict) {
        showBanner("Plik zmienił się na dysku poza edytorem.", {
            actions: [
                { label: "Wczytaj z dysku", onClick: () => revert(true) },
                { label: "Nadpisz moją wersją", onClick: () => save(true) },
            ],
        });
    } else if (!els.banner.classList.contains("info")) {
        hideBanner();
    }

    const block = currentBlock();
    const key = block ? `${state.path}#${block.index}` : `${state.path}#-`;
    els.source.disabled = !block;
    if (key !== editorKey) {
        clearTimeout(sendTimer);
        if (pending && editorTarget && !sameSource(els.source.value, lastSynced)) flushTo(editorTarget, els.source.value);
        pending = false;
        editorKey = key;
        editorTarget = block ? { path: state.path, index: block.index } : null;
        els.source.value = block?.source ?? "";
        lastSynced = els.source.value;
        scheduleRender(0);
    } else if (block && !pending && !sameSource(block.source, els.source.value)) {
        els.source.value = block.source;
        lastSynced = block.source;
        scheduleRender(0);
    }
    renderStatus();
}

async function refresh() {
    try {
        applyState(await api("GET", "/api/state"));
    } catch (error) {
        showBanner(error.message);
    }
}

// The agent switched the panel while the user still had unsent edits: store them in the
// draft of the block they were typed into, so nothing is silently lost.
function flushTo(target, source) {
    const body = { ...target, source, flush: true };
    sending = sending.then(() =>
        api("POST", "/api/block", body).then(
            () => {
                showBanner(`Niezapisane zmiany zachowano w szkicu ${target.path} (blok ${target.index + 1}).`, { kind: "info" });
                return true;
            },
            (error) => {
                showBanner(`Nie zachowano zmian w ${target.path}: ${error.message}`);
                return false;
            },
        ),
    );
}

function sendNow() {
    clearTimeout(sendTimer);
    if (!pending || !state || !currentBlock() || !editorTarget) return sending.then(() => true);
    const source = els.source.value;
    const body = { ...editorTarget, source };
    sending = sending
        .then(() => api("POST", "/api/block", body))
        .then((data) => {
            lastSynced = source;
            if (els.source.value === source) pending = false;
            applyState(data.state);
            return true;
        })
        .catch((error) => {
            showBanner(`Nie zapisano szkicu: ${error.message}`);
            return false;
        });
    return sending;
}

async function run(fn) {
    try {
        if (!(await sendNow())) return null;
        const data = await fn();
        if (data?.state) applyState(data.state);
        return data;
    } catch (error) {
        showBanner(error.message);
        return null;
    }
}

async function save(force = false) {
    if (!(await sendNow())) return;
    try {
        const data = await api("POST", "/api/save", { path: state.path, force });
        applyState(data.state);
        showBanner(data.result?.saved ? `Zapisano ${data.state.path}.` : data.result?.reason || "Brak zmian.", { kind: "info" });
        setTimeout(() => els.banner.classList.contains("info") && hideBanner(), 2500);
    } catch (error) {
        if (error.code === "conflict") await refresh();
        else showBanner(error.message);
    }
}

let revertArmed = null;
async function revert(confirmed = false) {
    if (!confirmed) {
        if (!revertArmed) {
            els.revert.textContent = "Na pewno?";
            revertArmed = setTimeout(() => {
                els.revert.textContent = "Przywróć";
                revertArmed = null;
            }, 3000);
            return;
        }
        clearTimeout(revertArmed);
        revertArmed = null;
        els.revert.textContent = "Przywróć";
    }
    clearTimeout(sendTimer);
    pending = false;
    editorKey = null;
    hideBanner();
    await run(() => api("POST", "/api/revert", { path: state.path }));
}

// ---------- wiring ----------

for (const s of SNIPPETS) {
    const a = new Option(s.label, s.id);
    const b = new Option(s.label, s.id);
    els.newTemplate.append(a);
    els.insertTemplate.append(b);
}

els.source.addEventListener("input", () => {
    pending = !sameSource(els.source.value, lastSynced) || pending;
    renderStatus();
    scheduleRender();
    clearTimeout(sendTimer);
    sendTimer = setTimeout(sendNow, 500);
});

els.source.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && !e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        if (!document.execCommand("insertText", false, "  ")) els.source.setRangeText("  ", els.source.selectionStart, els.source.selectionEnd, "end");
    }
});

document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        save(false);
    }
});

els.fileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hideBanner();
    run(() => api("POST", "/api/open", { path: els.filePath.value.trim() }));
});

els.blockSelect.addEventListener("change", () => {
    run(() => api("POST", "/api/select", { path: state.path, index: Number(els.blockSelect.value) }));
});

els.newToggle.addEventListener("click", () => {
    els.newForm.hidden = !els.newForm.hidden;
    if (!els.newForm.hidden) els.newTitle.focus();
});
els.newCancel.addEventListener("click", () => (els.newForm.hidden = true));
els.newForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const snippet = SNIPPETS.find((s) => s.id === els.newTemplate.value) ?? SNIPPETS[0];
    const title = els.newTitle.value.trim() || snippet.title;
    const data = await run(() => api("POST", "/api/add", { path: state.path, source: snippet.source, title }));
    if (data) {
        els.newForm.hidden = true;
        els.newTitle.value = "";
    }
});

els.insertTemplate.addEventListener("change", () => {
    const snippet = SNIPPETS.find((s) => s.id === els.insertTemplate.value);
    els.insertTemplate.value = "";
    if (!snippet || els.source.disabled) return;
    els.source.focus();
    els.source.select();
    if (!document.execCommand("insertText", false, snippet.source)) {
        els.source.value = snippet.source;
        els.source.dispatchEvent(new Event("input"));
    }
});

els.save.addEventListener("click", () => save(false));
els.revert.addEventListener("click", () => revert(false));

els.zoomFit.addEventListener("click", () => {
    zoom = "fit";
    applyZoom();
});
els.zoomIn.addEventListener("click", () => {
    zoom = Math.min((zoom === "fit" ? 1 : zoom) * 1.25, 5);
    applyZoom();
});
els.zoomOut.addEventListener("click", () => {
    zoom = Math.max((zoom === "fit" ? 1 : zoom) / 1.25, 0.2);
    applyZoom();
});

const themeObserver = new MutationObserver(() => {
    if (initMermaid()) scheduleRender(0);
});
themeObserver.observe(document.documentElement, { attributes: true });
themeObserver.observe(document.body, { attributes: true });
window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
    if (initMermaid()) scheduleRender(0);
});

let refreshTimer = null;
const events = new EventSource("/events");
events.addEventListener("change", () => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(refresh, 50);
});

api("GET", "/api/files")
    .then(({ files }) => els.fileList.replaceChildren(...files.map((f) => new Option(f, f))))
    .catch(() => {});

initMermaid();
refresh();
