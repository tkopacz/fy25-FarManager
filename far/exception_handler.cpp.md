# exception_handler.cpp
## English
### Purpose
This file implements functionality related to: */
Main functional areas: core functionality
### Key Classes
- `CatchableType`: Implements CatchableType functionality
- `CatchableTypeArray`: Implements CatchableTypeArray functionality
- `DelayLoadInfo`: Implements DelayLoadInfo functionality
- `DelayLoadProc`: Implements DelayLoadProc functionality
- `EXCEPTION_ASAN_ERROR`: Implements EXCEPTION_ASAN_ERROR functionality
- `EXCEPTION_SANITIZER_ERROR`: Implements EXCEPTION_SANITIZER_ERROR functionality
- `PMD`: Implements PMD functionality
- `THREAD_BASIC_INFORMATION`: Implements THREAD_BASIC_INFORMATION functionality
- `ThrowInfo`: Implements ThrowInfo functionality
- `debug_client`: Implements debug_client functionality
### Key Functions
- `code()`: Implements code functionality
- `exception_record()`: Implements exception_record functionality
- `context_record()`: Implements context_record functionality
- `thread_handle()`: Implements thread_handle functionality
- `thread_id()`: Implements thread_id functionality
- `report_to_stderr()`: On CI we can't access the filesystem, so just drop everything to stderr
- `set_report_location()`: On CI we can't access the filesystem, so just drop everything to stderr
- `disable_exception_handling()`: Validates conditions and throws exceptions when errors are detected during disable_exception_handling operation
- `exception_handling_in_progress()`: Validates conditions and throws exceptions when errors are detected during exception_handling_in_progress operation
- `force_stderr_exception_ui()`: Validates conditions and throws exceptions when errors are detected during force_stderr_exception_ui operation
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
- `CatchableType`: Implements CatchableType functionality
- `CatchableTypeArray`: Implements CatchableTypeArray functionality
- `DelayLoadInfo`: Implements DelayLoadInfo functionality
- `DelayLoadProc`: Implements DelayLoadProc functionality
- `EXCEPTION_ASAN_ERROR`: Implements EXCEPTION_ASAN_ERROR functionality
- `EXCEPTION_SANITIZER_ERROR`: Implements EXCEPTION_SANITIZER_ERROR functionality
- `PMD`: Implements PMD functionality
- `THREAD_BASIC_INFORMATION`: Implements THREAD_BASIC_INFORMATION functionality
- `ThrowInfo`: Implements ThrowInfo functionality
- `debug_client`: Implements debug_client functionality
### Kluczowe Funkcje
- `code()`: Implements code functionality
- `exception_record()`: Implements exception_record functionality
- `context_record()`: Implements context_record functionality
- `thread_handle()`: Implements thread_handle functionality
- `thread_id()`: Implements thread_id functionality
- `report_to_stderr()`: On CI we can't access the filesystem, so just drop everything to stderr
- `set_report_location()`: On CI we can't access the filesystem, so just drop everything to stderr
- `disable_exception_handling()`: Validates conditions and throws exceptions when errors are detected during disable_exception_handling operation
- `exception_handling_in_progress()`: Validates conditions and throws exceptions when errors are detected during exception_handling_in_progress operation
- `force_stderr_exception_ui()`: Validates conditions and throws exceptions when errors are detected during force_stderr_exception_ui operation
### Przestrzenie nazw
- `detail`
### Podsumowanie
Plik `exception_handler.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 16 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
