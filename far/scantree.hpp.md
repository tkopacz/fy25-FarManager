# scantree.hpp
## English
### Purpose
This file implements functionality related to: Сканирование текущего каталога и, опционально, подкаталогов на
Main functional areas: core functionality
### Key Classes
- `ScanTree`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `scantree_item`: Implements scantree_item functionality
### Key Functions
- `ScanTree()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `SetFindPath()`: Updates FindPath with provided value and validates constraints
- `GetNextName()`: Retrieves NextName from current context or object state
- `SkipDir()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `IsDirSearchDone()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `InsideReparsePoint()`: Implements InsideReparsePoint functionality
### Summary
The `scantree.hpp` file provides essential functionality for core functionality. It defines 2 class(es) and contains approximately 6 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Сканирование текущего каталога и, опционально, подкаталогов на
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `ScanTree`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `scantree_item`: Implements scantree_item functionality
### Kluczowe Funkcje
- `ScanTree()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `SetFindPath()`: Updates FindPath with provided value and validates constraints
- `GetNextName()`: Retrieves NextName from current context or object state
- `SkipDir()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `IsDirSearchDone()`: 3-й параметр - флаги из старшего слова path in full NT format, used internally to get correct results
- `InsideReparsePoint()`: Implements InsideReparsePoint functionality
### Podsumowanie
Plik `scantree.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 2 klas(y) i zawiera około 6 funkcji wspierających operacje menedżera plików Far Manager.
