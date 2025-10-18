# customact.cpp

## English

### Purpose
This file implements functionality for MSI installer custom actions.

### Key Classes
- **`Error`**: Error information container for error failures
- **`NonCopyable`**: Implements non copyable functionality
- **`Buffer`**: Template class managing dynamically allocated array with automatic memory cleanup
- **`ComInit`**: RAII wrapper managing com init initialization and cleanup lifecycle

### Key Functions
- **`widen()`**: Executes widen operation
- **`int_to_str()`**: Executes int to str operation
- **`hex()`**: Executes hex operation
- **`unhex()`**: Executes unhex operation
- **`hex_str()`**: Executes hex str operation
- **`get_system_message()`**: Retrieves the current system message value
- **`get_shortcut_props()`**: Retrieves the current shortcut props value
- **`set_shortcut_props()`**: Updates the shortcut props with a new value
- **`get_field()`**: Retrieves the current field value
- **`get_property()`**: Retrieves the current property value
- **`add_trailing_slash()`**: Executes add trailing slash operation
- **`is_installed()`**: Checks whether installed condition is true
- **`is_component_installed()`**: Checks whether component installed condition is true
- **`is_feature_installed()`**: Checks whether feature installed condition is true
- **`get_shortcut_list()`**: Retrieves the current shortcut list value
- **`init_progress()`**: Executes init progress operation
- **`update_progress()`**: Executes update progress operation
- **`get_error_message()`**: Retrieves the current error message value
- **`log_message()`**: Executes log message operation
- **`save_shortcut_props()`**: Executes save shortcut props operation

### Summary
The `customact.cpp` file is essential for MSI installer custom actions. It defines 4 class(es) and implements 25 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla niestandardowych akcji instalatora MSI.

### Kluczowe Klasy
- **`Error`**: Error information container for error failures
- **`NonCopyable`**: Implements non copyable functionality
- **`Buffer`**: Template class managing dynamically allocated array with automatic memory cleanup
- **`ComInit`**: RAII wrapper managing com init initialization and cleanup lifecycle

### Kluczowe Funkcje
- **`widen()`**: Executes widen operation
- **`int_to_str()`**: Executes int to str operation
- **`hex()`**: Executes hex operation
- **`unhex()`**: Executes unhex operation
- **`hex_str()`**: Executes hex str operation
- **`get_system_message()`**: Retrieves the current system message value
- **`get_shortcut_props()`**: Retrieves the current shortcut props value
- **`set_shortcut_props()`**: Updates the shortcut props with a new value
- **`get_field()`**: Retrieves the current field value
- **`get_property()`**: Retrieves the current property value
- **`add_trailing_slash()`**: Executes add trailing slash operation
- **`is_installed()`**: Checks whether installed condition is true
- **`is_component_installed()`**: Checks whether component installed condition is true
- **`is_feature_installed()`**: Checks whether feature installed condition is true
- **`get_shortcut_list()`**: Retrieves the current shortcut list value
- **`init_progress()`**: Executes init progress operation
- **`update_progress()`**: Executes update progress operation
- **`get_error_message()`**: Retrieves the current error message value
- **`log_message()`**: Executes log message operation
- **`save_shortcut_props()`**: Executes save shortcut props operation

### Podsumowanie
Plik `customact.cpp` jest niezbędny dla niestandardowych akcji instalatora MSI. Definiuje 4 klas(y) i implementuje 25 funkcji wspierających operacje menedżera plików Far Manager.
