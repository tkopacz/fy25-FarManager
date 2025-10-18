# execute.cpp
## English
### Purpose
This file implements functionality related to: "Запускатель" программ.
Main functional areas: core functionality
### Key Classes
- `dual_key_t`: Performs dual_key_t operation in execute.cpp
- `external_execution_context`: .data() is fine, the underlying string is in the outer scope and null-terminated.
### Key Functions
- `FindObject()`: Checks a condition in execute.cpp and returns true or false based on the result
- `Predicate()`: Checks a condition in execute.cpp and returns true or false based on the result
- `get_comspec()`: Checks a condition in execute.cpp and returns true or false based on the result
- `PartCmdLine()`: true: ok, found command & arguments.
- `full_command()`: However, if we are in 'default condition' mode, we can't exit early as there still might be unquoted special characters in the tail.
- `OpenFolderInShell()`: Checks a condition in execute.cpp and returns true or false based on the result
- `wait_for_process()`: To avoid collisions with bat/cmd/etc.
- `detach()`: Everywhere else we peek & read input records one by one,
- `wait_for_process_or_detach()`: если окно имело HOTKEY, то старое должно его забыть.
- `log_process_exit_code()`: The process has crashed the conhost. Well done. *slow clap*
### Summary
The `execute.cpp` file provides essential functionality for core functionality. It defines 2 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: "Запускатель" программ.
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `dual_key_t`: Performs dual_key_t operation in execute.cpp
- `external_execution_context`: .data() is fine, the underlying string is in the outer scope and null-terminated.
### Kluczowe Funkcje
- `FindObject()`: Checks a condition in execute.cpp and returns true or false based on the result
- `Predicate()`: Checks a condition in execute.cpp and returns true or false based on the result
- `get_comspec()`: Checks a condition in execute.cpp and returns true or false based on the result
- `PartCmdLine()`: true: ok, found command & arguments.
- `full_command()`: However, if we are in 'default condition' mode, we can't exit early as there still might be unquoted special characters in the tail.
- `OpenFolderInShell()`: Checks a condition in execute.cpp and returns true or false based on the result
- `wait_for_process()`: To avoid collisions with bat/cmd/etc.
- `detach()`: Everywhere else we peek & read input records one by one,
- `wait_for_process_or_detach()`: если окно имело HOTKEY, то старое должно его забыть.
- `log_process_exit_code()`: The process has crashed the conhost. Well done. *slow clap*
### Podsumowanie
Plik `execute.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 2 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
