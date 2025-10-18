# platform.hpp
## English
### Purpose
This file implements functionality related to: Враперы вокруг некоторых WinAPI функций
Main functional areas: core functionality
### Key Classes
- `deleter`: Removes or deletes specified item and releases associated resources
- `error_state`: Implements error_state functionality
- `function_pointer`: Implements function_pointer functionality
- `handle_closer`: Implements handle_closer functionality
- `handle_implementation`: Implements handle_implementation functionality
- `handle_t`: Implements handle_t functionality
- `last_error_guard`: Implements last_error_guard functionality
- `module`: Run-Time Dynamic Linking
- `module_deleter`: Implements module_deleter functionality
- `nt_handle_closer`: Implements nt_handle_closer functionality
### Key Functions
- `buffer()`: Implements buffer functionality
- `wait()`: Implements wait functionality
- `is_signaled()`: Checks condition and returns boolean indicating state
- `wait_any()`: Implements wait_any functionality
- `wait_all()`: Implements wait_all functionality
- `normalise()`: Implements normalise functionality
- `native_handle()`: Implements native_handle functionality
- `reset()`: Implements reset functionality
- `close()`: Implements close functionality
- `set_error_mode()`: Updates _error_mode with provided value and validates constraints
### Namespaces
- `detail`
- `netapi`
- `os`
- `rtdl`
- `uuid`
### Summary
The `platform.hpp` file provides essential functionality for core functionality. It defines 12 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Враперы вокруг некоторых WinAPI функций
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `deleter`: Removes or deletes specified item and releases associated resources
- `error_state`: Implements error_state functionality
- `function_pointer`: Implements function_pointer functionality
- `handle_closer`: Implements handle_closer functionality
- `handle_implementation`: Implements handle_implementation functionality
- `handle_t`: Implements handle_t functionality
- `last_error_guard`: Implements last_error_guard functionality
- `module`: Run-Time Dynamic Linking
- `module_deleter`: Implements module_deleter functionality
- `nt_handle_closer`: Implements nt_handle_closer functionality
### Kluczowe Funkcje
- `buffer()`: Implements buffer functionality
- `wait()`: Implements wait functionality
- `is_signaled()`: Checks condition and returns boolean indicating state
- `wait_any()`: Implements wait_any functionality
- `wait_all()`: Implements wait_all functionality
- `normalise()`: Implements normalise functionality
- `native_handle()`: Implements native_handle functionality
- `reset()`: Implements reset functionality
- `close()`: Implements close functionality
- `set_error_mode()`: Updates _error_mode with provided value and validates constraints
### Przestrzenie nazw
- `detail`
- `netapi`
- `os`
- `rtdl`
- `uuid`
### Podsumowanie
Plik `platform.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 12 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
