# plugin.hpp
## English
### Purpose
This file implements functionality related to: Plugin API for Far Manager <%VERSION%>
Main functional areas: plugin interface
### Key Classes
- `AnalyseInfo`: Implements AnalyseInfo functionality
- `ArclitePrivateInfo`: Implements ArclitePrivateInfo functionality
- `CloseAnalyseInfo`: Implements CloseAnalyseInfo functionality
- `ClosePanelInfo`: Implements ClosePanelInfo functionality
- `CmdLineSelect`: Implements CmdLineSelect functionality
- `CompareInfo`: Implements CompareInfo functionality
- `ConfigureInfo`: Implements ConfigureInfo functionality
- `DeleteFilesInfo`: Removes or deletes specified item and releases associated resources
- `DetectCodePageInfo`: Implements DetectCodePageInfo functionality
- `DialogInfo`: Implements DialogInfo functionality
### Key Functions
- `IsBgIndex()`: Checks condition and returns boolean indicating state
- `IsFgIndex()`: Checks condition and returns boolean indicating state
- `IsUnderlineIndex()`: Checks condition and returns boolean indicating state
- `IsBgDefault()`: Processes input by dispatching to different code paths based on type or value
- `IsFgDefault()`: Processes input by dispatching to different code paths based on type or value
- `IsUnderlineDefault()`: Processes input by dispatching to different code paths based on type or value
- `GetUnderline()`: Processes input by dispatching to different code paths based on type or value
- `SetBgIndex()`: Updates BgIndex with provided value and validates constraints
- `SetFgIndex()`: Updates FgIndex with provided value and validates constraints
- `SetUnderlineIndex()`: Updates UnderlineIndex with provided value and validates constraints
### Summary
The `plugin.hpp` file provides essential functionality for plugin interface. It defines 125 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Plugin API for Far Manager <%VERSION%>
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `AnalyseInfo`: Implements AnalyseInfo functionality
- `ArclitePrivateInfo`: Implements ArclitePrivateInfo functionality
- `CloseAnalyseInfo`: Implements CloseAnalyseInfo functionality
- `ClosePanelInfo`: Implements ClosePanelInfo functionality
- `CmdLineSelect`: Implements CmdLineSelect functionality
- `CompareInfo`: Implements CompareInfo functionality
- `ConfigureInfo`: Implements ConfigureInfo functionality
- `DeleteFilesInfo`: Removes or deletes specified item and releases associated resources
- `DetectCodePageInfo`: Implements DetectCodePageInfo functionality
- `DialogInfo`: Implements DialogInfo functionality
### Kluczowe Funkcje
- `IsBgIndex()`: Checks condition and returns boolean indicating state
- `IsFgIndex()`: Checks condition and returns boolean indicating state
- `IsUnderlineIndex()`: Checks condition and returns boolean indicating state
- `IsBgDefault()`: Processes input by dispatching to different code paths based on type or value
- `IsFgDefault()`: Processes input by dispatching to different code paths based on type or value
- `IsUnderlineDefault()`: Processes input by dispatching to different code paths based on type or value
- `GetUnderline()`: Processes input by dispatching to different code paths based on type or value
- `SetBgIndex()`: Updates BgIndex with provided value and validates constraints
- `SetFgIndex()`: Updates FgIndex with provided value and validates constraints
- `SetUnderlineIndex()`: Updates UnderlineIndex with provided value and validates constraints
### Podsumowanie
Plik `plugin.hpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 125 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
