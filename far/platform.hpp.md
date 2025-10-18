# platform.hpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`handle_implementation`**: Implements handle implementation functionality
- **`handle_closer`**: Implements handle closer functionality
- **`nt_handle_closer`**: Implements nt handle closer functionality
- **`printer_handle_closer`**: Implements printer handle closer functionality
- **`error_state`**: Error information container for error state failures
- **`last_error_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`module`**: Implements module functionality
- **`module_deleter`**: Implements module deleter functionality
- **`opaque_function_pointer`**: Implements opaque function pointer functionality
- **`function_pointer`**: Implements function pointer functionality
- **`deleter`**: Implements deleter functionality

### Key Functions
- **`handle_implementation::wait()`**: Executes wait operation
- **`handle_implementation::is_signaled()`**: Checks whether signaled condition is true
- **`handle_implementation::wait_any()`**: Executes wait any operation
- **`error_state::any()`**: Executes any operation
- **`last_error_guard::get()`**: Retrieves the current  value
- **`last_error_guard::dismiss()`**: Executes dismiss operation
- **`module::GetProcAddress()`**: Retrieves the current proc address value
- **`opaque_function_pointer::bool()`**: Executes bool operation
- **`opaque_function_pointer::name()`**: Executes name operation
- **`function_pointer::raw_function_pointer()`**: Executes raw function pointer operation
- **`deleter::handle_t()`**: Executes handle t operation
- **`deleter::explicit()`**: Executes explicit operation

### Namespaces
- `os`

### Summary
The `platform.hpp` file is essential for platform-specific operations. It defines 11 class(es) and implements 14 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`handle_implementation`**: Implements handle implementation functionality
- **`handle_closer`**: Implements handle closer functionality
- **`nt_handle_closer`**: Implements nt handle closer functionality
- **`printer_handle_closer`**: Implements printer handle closer functionality
- **`error_state`**: Error information container for error state failures
- **`last_error_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`module`**: Implements module functionality
- **`module_deleter`**: Implements module deleter functionality
- **`opaque_function_pointer`**: Implements opaque function pointer functionality
- **`function_pointer`**: Implements function pointer functionality
- **`deleter`**: Implements deleter functionality

### Kluczowe Funkcje
- **`handle_implementation::wait()`**: Executes wait operation
- **`handle_implementation::is_signaled()`**: Checks whether signaled condition is true
- **`handle_implementation::wait_any()`**: Executes wait any operation
- **`error_state::any()`**: Executes any operation
- **`last_error_guard::get()`**: Retrieves the current  value
- **`last_error_guard::dismiss()`**: Executes dismiss operation
- **`module::GetProcAddress()`**: Retrieves the current proc address value
- **`opaque_function_pointer::bool()`**: Executes bool operation
- **`opaque_function_pointer::name()`**: Executes name operation
- **`function_pointer::raw_function_pointer()`**: Executes raw function pointer operation
- **`deleter::handle_t()`**: Executes handle t operation
- **`deleter::explicit()`**: Executes explicit operation

### Przestrzenie nazw
- `os`

### Podsumowanie
Plik `platform.hpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 11 klas(y) i implementuje 14 funkcji wspierających operacje menedżera plików Far Manager.
