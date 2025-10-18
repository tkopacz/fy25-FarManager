# exception_handler.cpp
## English
### Purpose
This file implements functionality related to: */
Main functional areas: core functionality
### Key Classes
- `CatchableType`: Performs CatchableType operation in exception_handler.cpp
- `CatchableTypeArray`: Performs CatchableTypeArray operation in exception_handler.cpp
- `DelayLoadInfo`: Performs DelayLoadInfo operation in exception_handler.cpp
- `DelayLoadProc`: Performs DelayLoadProc operation in exception_handler.cpp
- `EXCEPTION_ASAN_ERROR`: Performs EXCEPTION_ASAN_ERROR operation in exception_handler.cpp
- `EXCEPTION_SANITIZER_ERROR`: Performs EXCEPTION_SANITIZER_ERROR operation in exception_handler.cpp
- `PMD`: Performs PMD operation in exception_handler.cpp
- `THREAD_BASIC_INFORMATION`: Performs THREAD_BASIC_INFORMATION operation in exception_handler.cpp
- `ThrowInfo`: Performs ThrowInfo operation in exception_handler.cpp
- `debug_client`: Performs debug_client operation in exception_handler.cpp
### Key Functions
- `code()`: Performs code operation in exception_handler.cpp
- `exception_record()`: Performs exception_record operation in exception_handler.cpp
- `context_record()`: Performs context_record operation in exception_handler.cpp
- `thread_handle()`: Performs thread_handle operation in exception_handler.cpp
- `thread_id()`: Performs thread_id operation in exception_handler.cpp
- `report_to_stderr()`: On CI we can't access the filesystem, so just drop everything to stderr.
- `set_report_location()`: On CI we can't access the filesystem, so just drop everything to stderr.
- `disable_exception_handling()`: We can crash in the cleanup phase when profile paths are already destroyed.
- `exception_handling_in_progress()`: Performs exception_handling_in_progress operation in exception_handler.cpp
- `force_stderr_exception_ui()`: Performs force_stderr_exception_ui operation in exception_handler.cpp
### Namespaces
- `detail`
### Summary
The `exception_handler.cpp` file provides essential functionality for core functionality. It defines 16 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: */
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `CatchableType`: Performs CatchableType operation in exception_handler.cpp
- `CatchableTypeArray`: Performs CatchableTypeArray operation in exception_handler.cpp
- `DelayLoadInfo`: Performs DelayLoadInfo operation in exception_handler.cpp
- `DelayLoadProc`: Performs DelayLoadProc operation in exception_handler.cpp
- `EXCEPTION_ASAN_ERROR`: Performs EXCEPTION_ASAN_ERROR operation in exception_handler.cpp
- `EXCEPTION_SANITIZER_ERROR`: Performs EXCEPTION_SANITIZER_ERROR operation in exception_handler.cpp
- `PMD`: Performs PMD operation in exception_handler.cpp
- `THREAD_BASIC_INFORMATION`: Performs THREAD_BASIC_INFORMATION operation in exception_handler.cpp
- `ThrowInfo`: Performs ThrowInfo operation in exception_handler.cpp
- `debug_client`: Performs debug_client operation in exception_handler.cpp
### Kluczowe Funkcje
- `code()`: Performs code operation in exception_handler.cpp
- `exception_record()`: Performs exception_record operation in exception_handler.cpp
- `context_record()`: Performs context_record operation in exception_handler.cpp
- `thread_handle()`: Performs thread_handle operation in exception_handler.cpp
- `thread_id()`: Performs thread_id operation in exception_handler.cpp
- `report_to_stderr()`: On CI we can't access the filesystem, so just drop everything to stderr.
- `set_report_location()`: On CI we can't access the filesystem, so just drop everything to stderr.
- `disable_exception_handling()`: We can crash in the cleanup phase when profile paths are already destroyed.
- `exception_handling_in_progress()`: Performs exception_handling_in_progress operation in exception_handler.cpp
- `force_stderr_exception_ui()`: Performs force_stderr_exception_ui operation in exception_handler.cpp
### Przestrzenie nazw
- `detail`
### Podsumowanie
Plik `exception_handler.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 16 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
