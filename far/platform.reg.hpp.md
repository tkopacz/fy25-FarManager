# platform.reg.hpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`error`**: Enumeration defining possible values for error
- **`exception`**: Enumeration defining possible values for exception
- **`key`**: Enumeration defining possible values for key
- **`hkey_deleter`**: Implements hkey deleter functionality
- **`value`**: Implements value functionality

### Key Functions
- **`key::open()`**: Opens and initializes the resource for subsequent operations
- **`key::close()`**: Closes the resource and releases any associated system handles
- **`key::native_handle()`**: Executes native handle operation
- **`key::enum_keys()`**: Executes enum keys operation
- **`key::enum_values()`**: Executes enum values operation
- **`key::exits()`**: Executes exits operation
- **`key::get_string()`**: Retrieves the current string value
- **`key::get_dword()`**: Retrieves the current dword value

### Namespaces
- `os`

### Summary
The `platform.reg.hpp` file is essential for platform-specific operations. It defines 5 class(es) and implements 10 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`error`**: Enumeration defining possible values for error
- **`exception`**: Enumeration defining possible values for exception
- **`key`**: Enumeration defining possible values for key
- **`hkey_deleter`**: Implements hkey deleter functionality
- **`value`**: Implements value functionality

### Kluczowe Funkcje
- **`key::open()`**: Opens and initializes the resource for subsequent operations
- **`key::close()`**: Closes the resource and releases any associated system handles
- **`key::native_handle()`**: Executes native handle operation
- **`key::enum_keys()`**: Executes enum keys operation
- **`key::enum_values()`**: Executes enum values operation
- **`key::exits()`**: Executes exits operation
- **`key::get_string()`**: Retrieves the current string value
- **`key::get_dword()`**: Retrieves the current dword value

### Przestrzenie nazw
- `os`

### Podsumowanie
Plik `platform.reg.hpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 5 klas(y) i implementuje 10 funkcji wspierających operacje menedżera plików Far Manager.
