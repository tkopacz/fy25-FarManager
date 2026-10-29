|[Polski](README-PL.md)|[Русский](README-RU.md)|
|-|-|

[![Header][logo-img]][logo-url]

### Far Manager
| | AppVeyor | Azure |
|-|-|-|
| VS | [![AppVeyor][VS-AppVeyor-img]][VS-AppVeyor-url] | [![Azure Pipelines][VS-Azure-img]][VS-Azure-url] |
| GCC | [![AppVeyor][GCC-AppVeyor-img]][GCC-AppVeyor-url] | TBD |
| Clang | [![AppVeyor][Clang-AppVeyor-img]][Clang-AppVeyor-url] | TBD |


### Far Manager — what is it?
Far Manager is a program for managing files and archives in Windows operating systems. Far Manager works in text mode and provides a simple and intuitive interface for performing most of the necessary actions:
* viewing files and directories;
* editing, copying and renaming files;
* and many other actions.

### Customize it
Far Manager has a multi-language, easily configurable interface. File system navigation is made easier through the use of color highlighting and sort groups.

### Your task — your way
The functionality of Far Manager is greatly extended by external DLL modules — plugins (made possible by a special set of interfaces — the [Plugins API](https://api.farmanager.com/)). For example: archive support, FTP client, temporary panel and network browser are all implemented as plugins included in the standard distribution of Far.


### Building
Far Manager is built on Windows with Visual Studio (MSVC or clang-cl) or with GCC/Clang from MSYS2, and can be cross-compiled from Linux with llvm-mingw. The commands below are the ones used by the CI workflow [build.yml](.github/workflows/build.yml). See [CONTRIBUTING](CONTRIBUTING.md#compilation) for the development process and the comments at the top of `far/makefile_vc`, `far/makefile_gcc_common` and `plugins/makefile_*` for all build parameters.

> Building the LuaMacro plugin downloads `LuaSDK-<version>.zip` (Lua 5.1 libraries) from [FarGroup/thirdparty](https://github.com/FarGroup/thirdparty) with `curl`, so network access is required on the first build.

#### Visual Studio — whole solution (Far + plugins)
Install the components listed in [`_build/vc/.vsconfig`](_build/vc/.vsconfig) (Visual Studio Installer → *Import configuration*), then in a Developer Command Prompt:
```
cd _build\vc
msbuild -m /property:Configuration=Release /property:Platform=x64 far.slnx
```
* `Configuration`: `Release` or `Debug`; `Platform`: `Win32`, `x64` or `ARM64`.
* Output: `_build\vc\_output\product\<Configuration>.<Platform>\`.
* You can also open `_build\vc\far.slnx` in the IDE, or build only the core with `msbuild /property:Configuration=Release;platform=x64 far.vcxproj` in `far`.

#### Visual Studio — nmake
In a Developer Command Prompt for the target architecture:
```
cd far
nmake /f makefile_vc
cd ..\plugins
nmake /f makefile_all_vc
```
Optional variables (environment or `nmake` arguments): `DEBUG=1` for a debug build, `CLANG=1` to use clang-cl. The core is written to `far\<Release|Debug>.<32|64|ARM64>.vc\` (with a `.clang` suffix for clang-cl).

#### GCC / Clang (MSYS2)
In an MSYS2 `mingw64`, `ucrt64` or `clang64` shell with the toolchain and `unzip` installed (`pacman -S unzip`, `pacboy -S toolchain:p`):
```
cd far
mingw32-make -j -f makefile_gcc
cd ../plugins
mingw32-make -j -f makefile_all_gcc
```
Optional variables: `DEBUG=1`, `CLANG=1` (Clang + LLD), `USE_LLD=1` (LLD with GCC, useful for debug builds). Output goes to `far/<Release|Debug>.<32|64>.<gcc|clang>/`.

#### Cross-compiling from Linux (llvm-mingw)
With [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) in `PATH`, Python 3 and Lua 5.1 (`lua` command) installed:
```
export GCC_PREFIX=x86_64-w64-mingw32- CLANG=1 PYTHON=1 SYS_LUA=1 ENABLE_TESTS=0
cd far && make -j -f makefile_gcc
cd ../plugins && make -j -f makefile_all_gcc
```
`GCC_PREFIX` selects the target (`i686`, `x86_64`, `armv7`, `aarch64`); `PYTHON=1` uses `misc/lng/lng.generator.py` for language files, `SYS_LUA=1` uses the system Lua instead of the bundled `lua.exe` for LuaFAR code generation, and `ENABLE_TESTS=0` skips the unit tests that would otherwise run the freshly built `Far.exe` (not possible on Linux without Wine).

#### Checks and tests
* Macro tests (msbuild x86/x64 build): run `Far.exe -service "macro:test"` from the output directory.
* Source style: `python tools/source_validator.py` in `far`.
* Changelog and help-file checkers (.NET 10 SDK): `dotnet run --project ./ChangelogChecker.csproj` in `misc/build-checks/ChangelogChecker` and `dotnet run --project ./HlfChecker.csproj` in `misc/build-checks/HlfChecker`.

### Documentation of this fork
This repository is a fork of [FarGroup/FarManager](https://github.com/FarGroup/FarManager). Fork-specific documentation (in Polish): [architecture overview](docs/ARCHITECTURE-PL.md), [how this fork differs from upstream](docs/FORK-PL.md).

#### Support forum
https://enforum.farmanager.com/<br/>
https://forum.farmanager.com/

#### Bug tracker
https://bugs.farmanager.com/

#### Developers mailing list (english)
https://groups.google.com/group/fardeven<br/>
<fardeven@googlegroups.com>

#### Developers mailing list (russian)
https://groups.google.com/group/fardev<br/>
<fardev@googlegroups.com>

#### Commits mailing list
https://groups.google.com/group/farcommits<br/>
<farcommits@googlegroups.com>

#### Source code
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
