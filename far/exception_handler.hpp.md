# exception_handler.hpp

## English

### Purpose
This file implements functionality for exception handling and error management.

### Key Classes
- **`unhandled_exception_filter`**: Error information container for unhandled exception filter failures
- **`signal_handler`**: Processes and handles signal events and requests
- **`invalid_parameter_handler`**: Processes and handles invalid parameter events and requests
- **`vectored_exception_handler`**: Container class managing collection of vectored exception handler
- **`seh_exception`**: Exception class representing seh exception error conditions
- **`no_handler`**: Processes and handles no events and requests
- **`save_exception_to`**: Error information container for save exception to failures

### Key Functions
- **`report_to_stderr()`**: Executes report to stderr operation
- **`set_report_location()`**: Updates the report location with a new value
- **`disable_exception_handling()`**: Executes disable exception handling operation
- **`exception_handling_in_progress()`**: Executes exception handling in progress operation
- **`force_stderr_exception_ui()`**: Executes force stderr exception ui operation
- **`restore_system_exception_handler()`**: Executes restore system exception handler operation
- **`cpp_try()`**: Executes cpp try operation
- **`wrap_current_exception()`**: Executes wrap current exception operation
- **`rethrow_if()`**: Executes rethrow if operation
- **`seh_try()`**: Executes seh try operation
- **`seh_try_with_ui()`**: Executes seh try with ui operation
- **`seh_try_no_ui()`**: Executes seh try no ui operation
- **`seh_try_thread()`**: Executes seh try thread operation
- **`seh_exception::set()`**: Updates the  with a new value
- **`seh_exception::raise()`**: Executes raise operation
- **`seh_exception::dismiss()`**: Executes dismiss operation
- **`seh_exception::get()`**: Retrieves the current  value

### Namespaces
- `detail`

### Summary
The `exception_handler.hpp` file is essential for exception handling and error management. It defines 7 class(es) and implements 17 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla obsługi wyjątków i zarządzania błędami.

### Kluczowe Klasy
- **`unhandled_exception_filter`**: Error information container for unhandled exception filter failures
- **`signal_handler`**: Processes and handles signal events and requests
- **`invalid_parameter_handler`**: Processes and handles invalid parameter events and requests
- **`vectored_exception_handler`**: Container class managing collection of vectored exception handler
- **`seh_exception`**: Exception class representing seh exception error conditions
- **`no_handler`**: Processes and handles no events and requests
- **`save_exception_to`**: Error information container for save exception to failures

### Kluczowe Funkcje
- **`report_to_stderr()`**: Executes report to stderr operation
- **`set_report_location()`**: Updates the report location with a new value
- **`disable_exception_handling()`**: Executes disable exception handling operation
- **`exception_handling_in_progress()`**: Executes exception handling in progress operation
- **`force_stderr_exception_ui()`**: Executes force stderr exception ui operation
- **`restore_system_exception_handler()`**: Executes restore system exception handler operation
- **`cpp_try()`**: Executes cpp try operation
- **`wrap_current_exception()`**: Executes wrap current exception operation
- **`rethrow_if()`**: Executes rethrow if operation
- **`seh_try()`**: Executes seh try operation
- **`seh_try_with_ui()`**: Executes seh try with ui operation
- **`seh_try_no_ui()`**: Executes seh try no ui operation
- **`seh_try_thread()`**: Executes seh try thread operation
- **`seh_exception::set()`**: Updates the  with a new value
- **`seh_exception::raise()`**: Executes raise operation
- **`seh_exception::dismiss()`**: Executes dismiss operation
- **`seh_exception::get()`**: Retrieves the current  value

### Przestrzenie nazw
- `detail`

### Podsumowanie
Plik `exception_handler.hpp` jest niezbędny dla obsługi wyjątków i zarządzania błędami. Definiuje 7 klas(y) i implementuje 17 funkcji wspierających operacje menedżera plików Far Manager.
