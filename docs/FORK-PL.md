# Czym ten fork różni się od upstreamu

[tkopacz/fy25-FarManager](https://github.com/tkopacz/fy25-FarManager) to osobisty fork projektu [FarGroup/FarManager](https://github.com/FarGroup/FarManager). Gałąź `master` śledzi `master` upstreamu, a własne zmiany forka ograniczają się do infrastruktury (CI, konfiguracja) i dokumentacji. Kod Far Managera i wtyczek jest taki sam jak w upstreamie.

## Zmiany względem upstreamu

### CI i automatyzacja

* **Walidatory na .NET 10** — `ChangelogChecker` i `HlfChecker` w `misc/build-checks/` są skompilowane dla .NET 10 (LTS) zamiast .NET 6, który nie jest już wspierany. Job `changelog-hlf-checks` w [build.yml](../.github/workflows/build.yml) instaluje odpowiednie SDK.
* **`docs-pages.yml` uruchamia się tylko w upstreamie** — workflow publikuje Encyklopedię w FarGroup/api przy użyciu sekretu `GH_PAT`, którego fork nie ma. Warunek `if: github.repository == 'FarGroup/FarManager'` pomija go w forku, a akcje zostały podniesione do nowszych wersji (`actions/checkout@v7`, `crazy-max/ghaction-github-pages@v5`).
* **Dependabot** — [.github/dependabot.yml](../.github/dependabot.yml) co tydzień sprawdza aktualizacje akcji GitHub Actions i proponuje je jako małe pull requesty.

### Zasady pracy z AI

* [.github/copilot-instructions.md](../.github/copilot-instructions.md) pozwala w forku na zmiany przygotowywane z pomocą AI. Zmiany przeznaczone do upstreamu (pull requesty, łatki, załączniki w bugtrackerze FarGroup) nie mogą być generowane, bo upstream takich kontrybucji nie przyjmuje.

### Dokumentacja

* Sekcja „Building” / „Budowanie” w [README.md](../README.md) i [README-PL.md](../README-PL.md).
* [Opis architektury](ARCHITECTURE-PL.md) z diagramami Mermaid.
* Ten dokument.

### Czego fork nie zmienia

* Kodu rdzenia (`far/`), wtyczek (`plugins/`), Encyklopedii (`enc/`) ani narzędzi w `misc/` — poza plikami projektów walidatorów.
* Odznak AppVeyor i Azure w README: wskazują buildy upstreamu, a nie forka. Fork sprawdzają wyłącznie workflow GitHub Actions.
* Pliku [CONTRIBUTING.md](../CONTRIBUTING.md), który opisuje proces zgłaszania zmian do upstreamu.

Aktualną listę różnic można sprawdzić poleceniem:

```
git log --oneline upstream/master..master
```

## Synchronizacja z upstreamem

Fork nie przepisuje historii: zmiany upstreamu są scalane do `master`, a wypychanie odbywa się bez `--force`.

1. Jednorazowo dodaj zdalne repozytorium upstreamu:
   ```
   git remote add upstream https://github.com/FarGroup/FarManager.git
   ```
2. Pobierz zmiany i scal je z `master` forka:
   ```
   git fetch upstream
   git switch master
   git merge upstream/master
   ```
3. Rozwiąż ewentualne konflikty. Najczęściej mogą dotyczyć plików zmienianych w obu repozytoriach: `README.md`, `README-PL.md`, `.github/workflows/*.yml` i plików `*.csproj` walidatorów. Zachowaj zmiany forka opisane wyżej, chyba że upstream wprowadził własne odpowiedniki (np. sam przeszedł na nowszy .NET).
4. Sprawdź, czy workflow `Build` przechodzi, i wypchnij zmiany:
   ```
   git push origin master
   ```

Na GitHubie można też użyć przycisku **Sync fork** na stronie repozytorium. Działa on bez konfliktów tylko wtedy, gdy zmiany forka nie kolidują ze zmianami upstreamu; w przeciwnym razie trzeba scalić zmiany lokalnie, jak wyżej.

## Zasady

* Pull requesty i wypychanie tylko do `origin` (tkopacz/fy25-FarManager), nigdy do FarGroup/FarManager.
* Zmiany kodu, które mają trafić do upstreamu, przygotowuje się ręcznie według [CONTRIBUTING.md](../CONTRIBUTING.md), bez treści generowanych.
