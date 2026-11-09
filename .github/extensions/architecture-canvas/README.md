# Diagramy architektury — canvas dla GitHub Copilot

Projektowe rozszerzenie Copilot CLI (`project:architecture-canvas`), które otwiera w panelu
bocznym edytor diagramów [Mermaid](https://mermaid.js.org/) z podglądem na żywo. Diagramy są
zwykłymi plikami w repozytorium, więc trafiają do commitów razem z kodem.

## Co edytuje

- **Bloki ` ```mermaid ` w plikach Markdown** (`.md`, `.markdown`) — np. istniejący
  [`docs/ARCHITECTURE-PL.md`](../../../docs/ARCHITECTURE-PL.md), który jest otwierany domyślnie.
  Każdy blok dostaje tytuł z najbliższego nagłówka nad nim; reszta pliku (tekst, inne bloki
  kodu, końce linii CRLF/LF) pozostaje nietknięta.
- **Pliki `.mmd`** — cały plik to jeden diagram.
- **Nowe pliki** — wpisz ścieżkę, której jeszcze nie ma (np. `docs/diagrams/wtyczki.md`),
  dodaj diagram przyciskiem **„+ Nowy”**; plik i katalogi powstaną przy pierwszym zapisie.

Ścieżki są zawsze względne wobec katalogu głównego repo. Ścieżki bezwzględne, z `..`,
do katalogu `.git`, przez dowiązania/junction prowadzące poza repo oraz inne rozszerzenia niż
`.md`/`.markdown`/`.mmd` są odrzucane.

## Praca w panelu

1. Wpisz lub wybierz z podpowiedzi plik i kliknij **„Otwórz”**, a następnie wybierz diagram
   z listy **„Diagram”**.
2. Edytuj kod po lewej — podgląd po prawej odświeża się w trakcie pisania. Błędy składni
   Mermaid są pokazywane nad podglądem (ostatni poprawny rysunek zostaje wyszarzony).
3. **„Wstaw szablon”** podmienia kod bieżącego diagramu na szablon (cofniesz to `Ctrl+Z`),
   a **„+ Nowy”** dopisuje nowy diagram z szablonu na końcu pliku pod nagłówkiem `## Tytuł`.
   Szablony: warstwy/moduły, kontekst C4, kontenery, sekwencja, klasy, maszyna stanów.
4. **„Zapisz”** (`Ctrl+S`) zapisuje plik na dysk. **„Przywróć”** (kliknięcie dwa razy)
   odrzuca szkic i wczytuje plik z dysku.

Motyw diagramu (jasny/ciemny) podąża za motywem aplikacji. Biblioteka Mermaid jest dołączona
lokalnie (`vendor/mermaid`), więc panel działa bez dostępu do internetu i publicznych CDN.

## Szkice i konflikty

Zmiany trafiają najpierw do szkicu, zapisywanego per plik (nie per panel) w
`<session.workspacePath>/architecture-canvas/drafts/`, więc przeładowanie panelu lub
rozszerzenia nie gubi pracy, a dwa panele z tym samym plikiem widzą tę samą treść.
Zapis odmawia nadpisania pliku, który zmienił się na dysku od chwili wczytania (np. po
`git pull` albo edycji w innym edytorze) — panel pokaże wtedy wybór: wczytać wersję z dysku
albo świadomie nadpisać ją swoją (`force`).

## Akcje dla agenta

| Akcja | Opis |
|---|---|
| `open_file` | przełącza panel na plik (`path`, opcjonalnie `block`) |
| `list_blocks` | lista diagramów: numer, tytuł, linia, stan szkicu |
| `get_diagram` | kod diagramu (`index`, domyślnie wybrany) i wynik ostatniego renderowania w panelu (`ok`/`error`/`unknown`) |
| `set_diagram` | podmienia kod diagramu w szkicu; `save: true` od razu zapisuje |
| `add_diagram` | dopisuje diagram z `source` albo szablonu `template`, opcjonalnie `title`, `save` |
| `select_block` | pokazuje wskazany diagram w panelu |
| `save` | zapisuje plik; `force: true` nadpisuje zmiany z dysku |
| `revert` | odrzuca szkic; wymaga `confirm: true` |
| `list_templates` | dostępne szablony |

Przykład:

```text
open_canvas({ canvasId: "architecture-canvas", instanceId: "arch-1", input: { path: "docs/ARCHITECTURE-PL.md" } })
invoke_canvas_action({ instanceId: "arch-1", actionName: "set_diagram", input: { index: 0, source: "flowchart LR\n  A --> B" } })
invoke_canvas_action({ instanceId: "arch-1", actionName: "get_diagram", input: { index: 0 } })   // render.status
invoke_canvas_action({ instanceId: "arch-1", actionName: "save" })
```

Wynik renderowania jest znany dopiero wtedy, gdy panel jest otwarty i narysował dany kod —
po `set_diagram` odczekaj chwilę i sprawdź `get_diagram`, aby wychwycić błędy składni.

## Bezpieczeństwo

- Serwer HTTP nasłuchuje wyłącznie na `127.0.0.1` z losowym portem, odrzuca żądania z innym
  nagłówkiem `Host` i przyjmuje zapisy tylko jako `application/json`.
- Mermaid działa z `securityLevel: "strict"` (bez skryptów i klikalnych akcji w diagramach).
- Zapis jest atomowy (plik tymczasowy + zmiana nazwy) i możliwy tylko wewnątrz repozytorium.

## Struktura i testy

- `extension.mjs` — podłączenie canvas do sesji.
- `lib/markdown.mjs` — czysta logika bloków Mermaid w Markdown (parsowanie, podmiana, dopisanie).
- `lib/paths.mjs` — walidacja ścieżek względem repo.
- `lib/documents.mjs` — szkice, zapis z wykrywaniem konfliktów, wyniki renderowania.
- `lib/snippets.mjs` — szablony (serwowane też do przeglądarki).
- `lib/server.mjs`, `lib/canvas.mjs` — serwer loopback, SSE i akcje canvas.
- `ui/` — interfejs panelu; `vendor/mermaid/` — Mermaid 11.17.2 (licencja MIT, plik `LICENSE`).

Aktualizacja Mermaid (przez skonfigurowany firmowy rejestr npm):

```powershell
npm pack mermaid@11
tar -xzf mermaid-*.tgz
Copy-Item package\dist\mermaid.min.js, package\LICENSE .github\extensions\architecture-canvas\vendor\mermaid\
```

Testy (wbudowany runner Node, bez zależności):

```powershell
node --test .github\extensions\architecture-canvas\test\
```
