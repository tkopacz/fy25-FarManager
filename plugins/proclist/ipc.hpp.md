# ipc.hpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `DRIVE_LETTER_CURDIR`: Implements DRIVE_LETTER_CURDIR functionality
- `LDR_MODULE`: Implements LDR_MODULE functionality
- `LIST_ENTRY`: Implements LIST_ENTRY functionality
- `PEB`: Implements PEB functionality
- `PEB_LDR_DATA`: Implements PEB_LDR_DATA functionality
- `PROCESS_BASIC_INFORMATION`: Processes input data through core business logic pipeline
- `PROCESS_PARAMETERS`: Processes input data through core business logic pipeline
- `UNICODE_STRING`: Implements UNICODE_STRING functionality
- `bitness`: Processes input by dispatching to different code paths based on type or value
- `ipc_t`: Implements ipc_t functionality
### Key Functions
- `read_process_memory()`: Implements read_process_memory functionality
- `constexpr()`: Implements constexpr functionality
- `NT_SUCCESS()`: Implements NT_SUCCESS functionality
- `read_string()`: Implements read_string functionality
- `query_information_process()`: Implements query_information_process functionality
- `get_internal_process_data()`: Retrieves _internal_process_data from current context or object state
- `find_terminator()`: Implements find_terminator functionality
- `get_open_process_data()`: Retrieves _open_process_data from current context or object state
- `print_modules()`: Implements print_modules functionality
- `get_bitness()`: Processes input by dispatching to different code paths based on type or value
### Summary
The `ipc.hpp` file provides essential functionality for core functionality. It defines 11 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `DRIVE_LETTER_CURDIR`: Implements DRIVE_LETTER_CURDIR functionality
- `LDR_MODULE`: Implements LDR_MODULE functionality
- `LIST_ENTRY`: Implements LIST_ENTRY functionality
- `PEB`: Implements PEB functionality
- `PEB_LDR_DATA`: Implements PEB_LDR_DATA functionality
- `PROCESS_BASIC_INFORMATION`: Processes input data through core business logic pipeline
- `PROCESS_PARAMETERS`: Processes input data through core business logic pipeline
- `UNICODE_STRING`: Implements UNICODE_STRING functionality
- `bitness`: Processes input by dispatching to different code paths based on type or value
- `ipc_t`: Implements ipc_t functionality
### Kluczowe Funkcje
- `read_process_memory()`: Implements read_process_memory functionality
- `constexpr()`: Implements constexpr functionality
- `NT_SUCCESS()`: Implements NT_SUCCESS functionality
- `read_string()`: Implements read_string functionality
- `query_information_process()`: Implements query_information_process functionality
- `get_internal_process_data()`: Retrieves _internal_process_data from current context or object state
- `find_terminator()`: Implements find_terminator functionality
- `get_open_process_data()`: Retrieves _open_process_data from current context or object state
- `print_modules()`: Implements print_modules functionality
- `get_bitness()`: Processes input by dispatching to different code paths based on type or value
### Podsumowanie
Plik `ipc.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
