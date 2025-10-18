# platform.fs.hpp
## English
### Purpose
This file implements functionality related to: */
Main functional areas: file system operations
### Key Classes
- `Chunk`: Implements Chunk functionality
- `current_directory_guard`: Implements current_directory_guard functionality
- `file`: Implements file functionality
- `file_status`: Implements file_status functionality
- `file_walker`: Implements file_walker functionality
- `find_data`: Implements find_data functionality
- `find_file_handle_closer`: Implements find_file_handle_closer functionality
- `find_handle_closer`: Implements find_handle_closer functionality
- `find_volume_handle_closer`: Implements find_volume_handle_closer functionality
- `process_current_directory_guard`: Processes input data through core business logic pipeline
### Key Functions
- `set_current_directory_syncronisation()`: Updates _current_directory_syncronisation with provided value and validates constraints
- `AlternateFileName()`: Implements AlternateFileName functionality
- `SetAlternateFileName()`: Updates AlternateFileName with provided value and validates constraints
- `HasAlternateFileName()`: Checks condition and returns boolean indicating state
- `is_standard_letter()`: Checks condition and returns boolean indicating state
- `get_number()`: Retrieves _number from current context or object state
- `get_letter()`: Retrieves _letter from current context or object state
- `get_device_path()`: Retrieves _device_path from current context or object state
- `get_win32nt_device_path()`: Retrieves _win32nt_device_path from current context or object state
- `get_root_directory()`: Retrieves _root_directory from current context or object state
### Namespaces
- `detail`
- `drive`
- `low`
- `os`
- `state`
### Summary
The `platform.fs.hpp` file provides essential functionality for file system operations. It defines 10 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: */
Główne obszary funkcjonalne: operacje systemu plików
### Kluczowe Klasy
- `Chunk`: Implements Chunk functionality
- `current_directory_guard`: Implements current_directory_guard functionality
- `file`: Implements file functionality
- `file_status`: Implements file_status functionality
- `file_walker`: Implements file_walker functionality
- `find_data`: Implements find_data functionality
- `find_file_handle_closer`: Implements find_file_handle_closer functionality
- `find_handle_closer`: Implements find_handle_closer functionality
- `find_volume_handle_closer`: Implements find_volume_handle_closer functionality
- `process_current_directory_guard`: Processes input data through core business logic pipeline
### Kluczowe Funkcje
- `set_current_directory_syncronisation()`: Updates _current_directory_syncronisation with provided value and validates constraints
- `AlternateFileName()`: Implements AlternateFileName functionality
- `SetAlternateFileName()`: Updates AlternateFileName with provided value and validates constraints
- `HasAlternateFileName()`: Checks condition and returns boolean indicating state
- `is_standard_letter()`: Checks condition and returns boolean indicating state
- `get_number()`: Retrieves _number from current context or object state
- `get_letter()`: Retrieves _letter from current context or object state
- `get_device_path()`: Retrieves _device_path from current context or object state
- `get_win32nt_device_path()`: Retrieves _win32nt_device_path from current context or object state
- `get_root_directory()`: Retrieves _root_directory from current context or object state
### Przestrzenie nazw
- `detail`
- `drive`
- `low`
- `os`
- `state`
### Podsumowanie
Plik `platform.fs.hpp` zapewnia podstawową funkcjonalność dla operacje systemu plików. Definiuje 10 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
