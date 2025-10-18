# pathmix.cpp
## English
### Purpose
This file implements functionality related to: Misc functions for processing of path names
Main functional areas: core functionality
### Key Functions
- `append_arg_process()`: Platform: Common: External: ----------------------------------------------------------------------------
- `nt_path()`: Iterates through collection and processes each element, storing results
- `kernel_path()`: Implements kernel_path functionality
- `ParsePath()`: "\\?\C:" -> "\\?\c:" Some file operations fail on Win2k if a drive letter is in upper case
- `IsAbsolutePath()`: Checks condition and returns boolean indicating state
- `HasPathPrefix()`: Checks condition and returns boolean indicating state
- `ExtractPathPrefix()`: Implements ExtractPathPrefix functionality
- `PathCanHoldRegularFile()`: односимвольный префикс
- `IsParentDirectory()`: Checks condition and returns boolean indicating state
- `IsCurrentDirectory()`: Аналог PointToName, только для строк типа "name\" (оканчивается на слеш) возвращает указатель на name, а не на пустую строку
### Summary
The `pathmix.cpp` file provides essential functionality for core functionality. and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Misc functions for processing of path names
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `append_arg_process()`: Platform: Common: External: ----------------------------------------------------------------------------
- `nt_path()`: Iterates through collection and processes each element, storing results
- `kernel_path()`: Implements kernel_path functionality
- `ParsePath()`: "\\?\C:" -> "\\?\c:" Some file operations fail on Win2k if a drive letter is in upper case
- `IsAbsolutePath()`: Checks condition and returns boolean indicating state
- `HasPathPrefix()`: Checks condition and returns boolean indicating state
- `ExtractPathPrefix()`: Implements ExtractPathPrefix functionality
- `PathCanHoldRegularFile()`: односимвольный префикс
- `IsParentDirectory()`: Checks condition and returns boolean indicating state
- `IsCurrentDirectory()`: Аналог PointToName, только для строк типа "name\" (оканчивается на слеш) возвращает указатель на name, а не на пустую строку
### Podsumowanie
Plik `pathmix.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
