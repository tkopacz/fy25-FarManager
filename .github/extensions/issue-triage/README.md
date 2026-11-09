# Triage issues — canvas dla GitHub Copilot

Projektowe rozszerzenie Copilot CLI (`project:issue-triage`), które otwiera w panelu bocznym
canvas do przeglądania i segregowania otwartych issues repozytorium GitHub.

## Jak to działa

1. **Pobieranie na żądanie.** Po otwarciu canvas nic nie jest pobierane. Dopiero przycisk
   **„Pobierz issues”** wczytuje otwarte issues (bez pull requestów) oraz etykiety repozytorium
   przez `gh api --paginate`. Domyślne repo to `tkopacz/fy25-FarManager`; inne można wpisać
   w polu „Repozytorium” albo podać przy otwieraniu (`{ "repo": "owner/repo" }`).
2. **Lokalny triage.** Dla każdego issue ustawiasz decyzję: etykiety, priorytet
   (etykiety `priority: high|medium|low`), pozostawienie otwartego lub zamknięcie
   (ukończone / nieplanowane) oraz opcjonalny komentarz. Lista ma filtry (status, etykieta,
   tekst) i sortowanie, a pasek postępu pokazuje „Przejrzano X z N”.
   Oznaczenia na liście: `○` do przejrzenia, `✓` przejrzane bez zmian, `●` przejrzane ze zmianami.
3. **Zapis tylko po przejrzeniu wszystkiego.** Przycisk **„Zastosuj na GitHubie…”** jest aktywny
   dopiero, gdy wszystkie issues są przejrzane i istnieją zmiany. Otwiera podsumowanie (diff),
   pozwala wykonać **podgląd kroków (dry-run)** i wymaga zaznaczenia potwierdzenia przed zapisem.
   Zapis jest opcjonalny — decyzje można też odrzucić.

Kolejność kroków dla jednego issue: dodanie etykiet → usunięcie etykiet → komentarz → zamknięcie.
Jeśli któryś krok się nie powiedzie, pozostałe kroki tego issue są pomijane (issue nie zostanie
zamknięte bez komentarza); pozostałe issues są przetwarzane dalej, a raport pokazuje błędy.
Kroki, które już się udały, są odnotowywane lokalnie, więc ponowny zapis nie dubluje komentarza
ani etykiet; usunięcie etykiety, której już nie ma (HTTP 404), liczy się jako sukces. Zapis
dotyczy dokładnie planu pokazanego w podsumowaniu (`planHash`) — jeśli plan zmieni się w
międzyczasie, okno odświeża diff i wymaga ponownego potwierdzenia. Etykiety porównywane są bez
względu na wielkość liter (tak jak na GitHubie), a priorytet „bez zmian” zachowuje istniejące,
także niestandardowe etykiety `priority: …`.

## Trwałość szkiców

Szkice są zapisywane per repozytorium (nie per panel) w pliku
`<session.workspacePath>/issue-triage/<owner>__<repo>.json`, więc przeładowanie panelu,
rozszerzenia lub otwarcie nowej instancji nie gubi pracy. Ponowne pobranie issues zachowuje
decyzje tylko dla issues, które nie zmieniły się na GitHubie od chwili podjęcia decyzji.

## Akcje dla agenta

| Akcja | Opis |
|---|---|
| `set_repo` | przełącza panel na inne `owner/repo` |
| `fetch_issues` | pobiera/odświeża issues i etykiety |
| `get_state` | postęp, issues z decyzjami, oczekujące zmiany |
| `set_decision` | ustawia lokalną decyzję (`labels`, `addLabels`, `removeLabels`, `priority`, `state`, `stateReason`, `comment`, `reviewed`) |
| `reset_decision` | cofa decyzję dla issue |
| `get_pending_changes` | podsumowanie zmian do zapisu |
| `apply_changes` | zapis na GitHubie; wymaga `confirm: true`, `dryRun: true` tylko pokazuje kroki, opcjonalny `planHash` z `get_pending_changes` wiąże zapis z potwierdzonym planem |
| `discard_changes` | odrzuca wszystkie decyzje; wymaga `confirm: true` |

Przykład: `open_canvas({ canvasId: "issue-triage", instanceId: "triage-1" })`, potem
`invoke_canvas_action({ instanceId: "triage-1", actionName: "fetch_issues" })`.

## Wymagania i bezpieczeństwo

- Zalogowane `gh` (np. przez keyring — rozszerzenie nie prosi o zmienne środowiskowe z tokenem).
- Serwer HTTP nasłuchuje wyłącznie na `127.0.0.1` z losowym portem, odrzuca żądania z innym
  nagłówkiem `Host` i przyjmuje zapisy tylko jako `application/json`.
- Treść issues jest wstawiana do DOM wyłącznie jako tekst.

## Struktura i testy

- `extension.mjs` — podłączenie canvas do sesji.
- `lib/triage.mjs` — czysta logika (diff, postęp, filtry); serwowana też do przeglądarki.
- `lib/github.mjs` — wywołania `gh` (pobieranie, kroki zapisu, dry-run).
- `lib/service.mjs` — stan per repo i jego trwały zapis.
- `lib/server.mjs`, `lib/canvas.mjs` — serwer loopback, SSE i akcje canvas.
- `ui/` — interfejs panelu.

Testy (wbudowany runner Node, bez zależności):

```powershell
node --test .github\extensions\issue-triage\test\
```
