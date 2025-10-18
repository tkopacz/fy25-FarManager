# exception_handler.cpp

## English

### Purpose
This file implements functionality for clipboard operations and data transfer.

### Key Classes
- **`exception_context`**: Error information container for exception context failures
- **`seh_exception_context`**: Exception class representing seh exception context error conditions
- **`writer_context`**: Implements writer context functionality
- **`debug_client`**: Implements debug client functionality
- **`handler_result`**: Processes and handles result events and requests
- **`PMD`**: Implements pmd functionality
- **`CatchableType`**: Implements catchable type functionality
- **`CatchableTypeArray`**: Container class managing collection of catchable type array
- **`ThrowInfo`**: Implements throw info functionality
- **`DelayLoadProc`**: Implements delay load proc functionality
- **`DelayLoadInfo`**: Implements delay load info functionality
- **`EXCEPTION_ASAN_ERROR`**: Error information container for exception asan error failures
- **`EXCEPTION_SANITIZER_ERROR`**: Error information container for exception sanitizer error failures
- **`THREAD_BASIC_INFORMATION`**: Implements thread basic information functionality
- **`info_block`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Key Functions
- **`report_to_stderr()`**: Executes report to stderr operation
- **`set_report_location()`**: Updates the report location with a new value
- **`disable_exception_handling()`**: Executes disable exception handling operation
- **`exception_handling_in_progress()`**: Executes exception handling in progress operation
- **`force_stderr_exception_ui()`**: Executes force stderr exception ui operation
- **`make_header()`**: Executes make header operation
- **`make_subheader()`**: Executes make subheader operation
- **`get_report_location()`**: Retrieves the current report location value
- **`write_readme()`**: Executes write readme operation
- **`write_report()`**: Executes write report operation
- **`write_minidump()`**: Executes write minidump operation
- **`read_modules()`**: Executes read modules operation
- **`read_env()`**: Executes read env operation
- **`self_version()`**: Executes self version operation
- **`timestamp()`**: Executes timestamp operation
- **`pe_timestamp()`**: Executes pe timestamp operation
- **`file_timestamp()`**: Executes file timestamp operation
- **`system_timestamp()`**: Executes system timestamp operation
- **`local_timestamp()`**: Executes local timestamp operation
- **`read_registers()`**: Executes read registers operation

### Namespaces
- `detail`

### Summary
The `exception_handler.cpp` file is essential for clipboard operations and data transfer. It defines 15 class(es) and implements 56 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji schowka i transferu danych.

### Kluczowe Klasy
- **`exception_context`**: Error information container for exception context failures
- **`seh_exception_context`**: Exception class representing seh exception context error conditions
- **`writer_context`**: Implements writer context functionality
- **`debug_client`**: Implements debug client functionality
- **`handler_result`**: Processes and handles result events and requests
- **`PMD`**: Implements pmd functionality
- **`CatchableType`**: Implements catchable type functionality
- **`CatchableTypeArray`**: Container class managing collection of catchable type array
- **`ThrowInfo`**: Implements throw info functionality
- **`DelayLoadProc`**: Implements delay load proc functionality
- **`DelayLoadInfo`**: Implements delay load info functionality
- **`EXCEPTION_ASAN_ERROR`**: Error information container for exception asan error failures
- **`EXCEPTION_SANITIZER_ERROR`**: Error information container for exception sanitizer error failures
- **`THREAD_BASIC_INFORMATION`**: Implements thread basic information functionality
- **`info_block`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Kluczowe Funkcje
- **`report_to_stderr()`**: Executes report to stderr operation
- **`set_report_location()`**: Updates the report location with a new value
- **`disable_exception_handling()`**: Executes disable exception handling operation
- **`exception_handling_in_progress()`**: Executes exception handling in progress operation
- **`force_stderr_exception_ui()`**: Executes force stderr exception ui operation
- **`make_header()`**: Executes make header operation
- **`make_subheader()`**: Executes make subheader operation
- **`get_report_location()`**: Retrieves the current report location value
- **`write_readme()`**: Executes write readme operation
- **`write_report()`**: Executes write report operation
- **`write_minidump()`**: Executes write minidump operation
- **`read_modules()`**: Executes read modules operation
- **`read_env()`**: Executes read env operation
- **`self_version()`**: Executes self version operation
- **`timestamp()`**: Executes timestamp operation
- **`pe_timestamp()`**: Executes pe timestamp operation
- **`file_timestamp()`**: Executes file timestamp operation
- **`system_timestamp()`**: Executes system timestamp operation
- **`local_timestamp()`**: Executes local timestamp operation
- **`read_registers()`**: Executes read registers operation

### Przestrzenie nazw
- `detail`

### Podsumowanie
Plik `exception_handler.cpp` jest niezbędny dla operacji schowka i transferu danych. Definiuje 15 klas(y) i implementuje 56 funkcji wspierających operacje menedżera plików Far Manager.
