# platform.fs.cpp
## English
### Purpose
This file implements functionality related to: */
Main functional areas: file system operations
### Key Classes
- `file_walker`: Implements file_walker functionality
- `i_find_file_handle_impl`: Implements i_find_file_handle_impl functionality
### Key Functions
- `SHErrorToWinError()`: Processes input by dispatching to different code paths based on type or value
- `set_current_directory_syncronisation()`: Updates _current_directory_syncronisation with provided value and validates constraints
- `is_standard_letter()`: Checks condition and returns boolean indicating state
- `get_number()`: Retrieves _number from current context or object state
- `get_letter()`: Retrieves _letter from current context or object state
- `get_device_path()`: Retrieves _device_path from current context or object state
- `get_win32nt_device_path()`: Retrieves _win32nt_device_path from current context or object state
- `get_root_directory()`: Retrieves _root_directory from current context or object state
- `get_win32nt_root_directory()`: Retrieves _win32nt_root_directory from current context or object state
- `get_type()`: Retrieves _type from current context or object state
### Namespaces
- `detail`
- `drive`
- `low`
- `os`
- `osd`
- `state`
### Summary
The `platform.fs.cpp` file provides essential functionality for file system operations. It defines 2 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: */
Główne obszary funkcjonalne: operacje systemu plików
### Kluczowe Klasy
- `file_walker`: Implements file_walker functionality
- `i_find_file_handle_impl`: Implements i_find_file_handle_impl functionality
### Kluczowe Funkcje
- `SHErrorToWinError()`: Processes input by dispatching to different code paths based on type or value
- `set_current_directory_syncronisation()`: Updates _current_directory_syncronisation with provided value and validates constraints
- `is_standard_letter()`: Checks condition and returns boolean indicating state
- `get_number()`: Retrieves _number from current context or object state
- `get_letter()`: Retrieves _letter from current context or object state
- `get_device_path()`: Retrieves _device_path from current context or object state
- `get_win32nt_device_path()`: Retrieves _win32nt_device_path from current context or object state
- `get_root_directory()`: Retrieves _root_directory from current context or object state
- `get_win32nt_root_directory()`: Retrieves _win32nt_root_directory from current context or object state
- `get_type()`: Retrieves _type from current context or object state
### Przestrzenie nazw
- `detail`
- `drive`
- `low`
- `os`
- `osd`
- `state`
### Podsumowanie
Plik `platform.fs.cpp` zapewnia podstawową funkcjonalność dla operacje systemu plików. Definiuje 2 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
