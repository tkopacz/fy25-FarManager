|[English](README.md)|[Русский](README-RU.md)|
|-|-|

[![Header][logo-img]][logo-url]

### Far Manager
| | AppVeyor | Azure |
|-|-|-|
| VS | [![AppVeyor][VS-AppVeyor-img]][VS-AppVeyor-url] | [![Azure Pipelines][VS-Azure-img]][VS-Azure-url] |
| GCC | [![AppVeyor][GCC-AppVeyor-img]][GCC-AppVeyor-url] | TBD |
| Clang | [![AppVeyor][Clang-AppVeyor-img]][Clang-AppVeyor-url] | TBD |


### Far Manager — czym jest?
Far Manager to program do zarządzania plikami i archiwami w systemach operacyjnych Windows. Far Manager pracuje w trybie tekstowym i oferuje prosty oraz intuicyjny interfejs do przeprowadzania większości niezbędnych czynności:
* podgląd plików i folderów;
* edytowanie, kopiowanie i zmienianie nazw plików;
* i wiele innych operacji.

### Dostosowanie
Far Manager posiada wielojęzykowy, łatwy do skonfigurowania interfejs. Nawigacja po systemie plików jest łatwiejsza dzięki użyciu grup sortowania i podświetlania kolorami.

### Twoje zadanie - Twój sposób
Funkcjonalność Far Manager jest znacznie rozszerzona o zewnętrzne moduły DLL — wtyczki (tworzone dzięki specjalnemu zestawowi interfejsów [API dla wtyczek](https://api.farmanager.com/)). Dla przykładu: obsługa archiwów, klient FTP, panel tymczasowy oraz przeglądarka sieci są zaimplementowane jako wtyczki zawarte w standardowej dystrybucji Far.


### Budowanie
Far Manager buduje się w Windows za pomocą Visual Studio (MSVC lub clang-cl) albo GCC/Clang z MSYS2; można go też skompilować skrośnie w Linuksie za pomocą llvm-mingw. Poniższe polecenia pochodzą z workflow CI [build.yml](.github/workflows/build.yml). Proces rozwoju opisuje [CONTRIBUTING](CONTRIBUTING-PL.md), a wszystkie parametry budowania — komentarze na początku plików `far/makefile_vc`, `far/makefile_gcc_common` i `plugins/makefile_*`.

> Budowanie wtyczki LuaMacro pobiera `curl`-em archiwum `LuaSDK-<wersja>.zip` (biblioteki Lua 5.1) z [FarGroup/thirdparty](https://github.com/FarGroup/thirdparty), więc pierwsze budowanie wymaga dostępu do sieci.

#### Visual Studio — całe rozwiązanie (Far + wtyczki)
Zainstaluj składniki wymienione w [`_build/vc/.vsconfig`](_build/vc/.vsconfig) (Visual Studio Installer → *Importuj konfigurację*), a następnie w Developer Command Prompt:
```
cd _build\vc
msbuild -m /property:Configuration=Release /property:Platform=x64 far.slnx
```
* `Configuration`: `Release` lub `Debug`; `Platform`: `Win32`, `x64` lub `ARM64`.
* Wynik: `_build\vc\_output\product\<Configuration>.<Platform>\`.
* Rozwiązanie `_build\vc\far.slnx` można też otworzyć w IDE albo zbudować sam rdzeń poleceniem `msbuild /property:Configuration=Release;platform=x64 far.vcxproj` w katalogu `far`.

#### Visual Studio — nmake
W Developer Command Prompt dla docelowej architektury:
```
cd far
nmake /f makefile_vc
cd ..\plugins
nmake /f makefile_all_vc
```
Opcjonalne zmienne (środowiskowe lub argumenty `nmake`): `DEBUG=1` — wersja debug, `CLANG=1` — kompilacja clang-cl. Rdzeń trafia do `far\<Release|Debug>.<32|64|ARM64>.vc\` (z przyrostkiem `.clang` dla clang-cl).

#### GCC / Clang (MSYS2)
W powłoce MSYS2 `mingw64`, `ucrt64` lub `clang64` z zainstalowanym zestawem narzędzi i `unzip` (`pacman -S unzip`, `pacboy -S toolchain:p`):
```
cd far
mingw32-make -j -f makefile_gcc
cd ../plugins
mingw32-make -j -f makefile_all_gcc
```
Opcjonalne zmienne: `DEBUG=1`, `CLANG=1` (Clang + LLD), `USE_LLD=1` (LLD z GCC, przydatne przy wersji debug). Wynik: `far/<Release|Debug>.<32|64>.<gcc|clang>/`.

#### Kompilacja skrośna w Linuksie (llvm-mingw)
Z [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) w `PATH` oraz zainstalowanymi Pythonem 3 i Lua 5.1 (polecenie `lua`):
```
export GCC_PREFIX=x86_64-w64-mingw32- CLANG=1 PYTHON=1 SYS_LUA=1 ENABLE_TESTS=0
cd far && make -j -f makefile_gcc
cd ../plugins && make -j -f makefile_all_gcc
```
`GCC_PREFIX` wybiera platformę docelową (`i686`, `x86_64`, `armv7`, `aarch64`); `PYTHON=1` generuje pliki językowe skryptem `misc/lng/lng.generator.py`, `SYS_LUA=1` używa systemowej Lua zamiast dołączonego `lua.exe` do generowania kodu LuaFAR, a `ENABLE_TESTS=0` pomija testy jednostkowe, które uruchamiają świeżo zbudowany `Far.exe` (w Linuksie niemożliwe bez Wine).

#### Kontrole i testy
* Testy makr (build msbuild x86/x64): `Far.exe -service "macro:test"` w katalogu wynikowym.
* Styl kodu: `python tools/source_validator.py` w katalogu `far`.
* Walidatory changeloga i plików pomocy (.NET 10 SDK): `dotnet run --project ./ChangelogChecker.csproj` w `misc/build-checks/ChangelogChecker` oraz `dotnet run --project ./HlfChecker.csproj` w `misc/build-checks/HlfChecker`.

### Dokumentacja tego forka
To repozytorium jest forkiem [FarGroup/FarManager](https://github.com/FarGroup/FarManager). Dokumentacja specyficzna dla forka: [architektura](docs/ARCHITECTURE-PL.md), [czym fork różni się od upstreamu](docs/FORK-PL.md).

#### Forum wsparcia (po angielsku i rosyjsku)
https://enforum.farmanager.com/<br/>
https://forum.farmanager.com/

#### Zgłaszanie błędów (po angielsku i rosyjsku)
https://bugs.farmanager.com/

#### Lista mailingowa dla programistów (po angielsku)
https://groups.google.com/group/fardeven<br/>
<fardeven@googlegroups.com>

#### Lista mailingowa dla programistów (po rosyjsku)
https://groups.google.com/group/fardev<br/>
<fardev@googlegroups.com>

#### Lista mailingowa z poprawkami kodu
https://groups.google.com/group/farcommits<br/>
<farcommits@googlegroups.com>

#### Kod źródłowy
https://github.com/FarGroup/FarManager

[logo-img]: ./logo.svg
[logo-url]: https://www.farmanager.com
[VS-AppVeyor-img]: https://ci.appveyor.com/api/projects/status/6pca73evwo3oxvr9?svg=true
[VS-AppVeyor-url]: https://ci.appveyor.com/project/FarGroup/farmanager/history
[GCC-AppVeyor-img]: https://ci.appveyor.com/api/projects/status/k7ln3edp8nt5aoay?svg=true
[GCC-AppVeyor-url]: https://ci.appveyor.com/project/FarGroup/farmanager-5lhsj/history
[Clang-AppVeyor-img]: https://ci.appveyor.com/api/projects/status/pvwnc6gc5tjlpmti?svg=true
[Clang-AppVeyor-url]: https://ci.appveyor.com/project/FarGroup/farmanager-tgu1s/history
[VS-Azure-img]: https://img.shields.io/azure-devops/build/FarGroup/66d0ddcf-a098-4b98-9470-1c90632c4ba3/1.svg?logo=azuredevops
[VS-Azure-url]: https://dev.azure.com/FarGroup/FarManager/_build?definitionId=1
