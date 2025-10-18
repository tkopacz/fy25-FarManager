# platform.fs.hpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`find_handle_closer`**: Implements find handle closer functionality
- **`find_file_handle_closer`**: Implements find file handle closer functionality
- **`find_volume_handle_closer`**: Implements find volume handle closer functionality
- **`find_data`**: Implements find data functionality
- **`file`**: Enumeration defining possible values for file
- **`file_walker`**: Implements file walker functionality
- **`file_status`**: Implements file status functionality
- **`current_directory_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`process_current_directory_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Key Functions
- **`file_walker::InitWalk()`**: Executes init walk operation
- **`file_walker::Step()`**: Executes step operation
- **`file_walker::GetChunkOffset()`**: Retrieves the current chunk offset value
- **`file_walker::GetChunkSize()`**: Retrieves the current chunk size value
- **`file_walker::GetPercent()`**: Retrieves the current percent value
- **`file_status::check()`**: Executes check operation

### Namespaces
- `os`

### Summary
The `platform.fs.hpp` file is essential for platform-specific operations. It defines 9 class(es) and implements 6 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`find_handle_closer`**: Implements find handle closer functionality
- **`find_file_handle_closer`**: Implements find file handle closer functionality
- **`find_volume_handle_closer`**: Implements find volume handle closer functionality
- **`find_data`**: Implements find data functionality
- **`file`**: Enumeration defining possible values for file
- **`file_walker`**: Implements file walker functionality
- **`file_status`**: Implements file status functionality
- **`current_directory_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`process_current_directory_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Kluczowe Funkcje
- **`file_walker::InitWalk()`**: Executes init walk operation
- **`file_walker::Step()`**: Executes step operation
- **`file_walker::GetChunkOffset()`**: Retrieves the current chunk offset value
- **`file_walker::GetChunkSize()`**: Retrieves the current chunk size value
- **`file_walker::GetPercent()`**: Retrieves the current percent value
- **`file_status::check()`**: Executes check operation

### Przestrzenie nazw
- `os`

### Podsumowanie
Plik `platform.fs.hpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 9 klas(y) i implementuje 6 funkcji wspierających operacje menedżera plików Far Manager.
