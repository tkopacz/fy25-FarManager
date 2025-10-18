# smart_ptr.hpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `array_ptr`: Implements array_ptr functionality
- `block_ptr`: Implements block_ptr functionality
- `file_closer`: Implements file_closer functionality
- `nop_deleter`: Implements nop_deleter functionality
- `ptr_setter`: Implements ptr_setter functionality
- `releaser`: Implements releaser functionality
- `unique_ptr_with_ondestroy`: Implements unique_ptr_with_ondestroy functionality
### Key Functions
- `reset()`: We don't need a strong guarantee here, so it's better to
- `data()`: Returns pointer to internal buffer for direct access to stored data
- `get_data()`: Returns pointer to internal buffer for direct access to stored data
- `size()`: Returns current allocated size of the buffer in elements
- `empty()`: Implements empty functionality
- `bool()`: Implements bool functionality
- `begin()`: Implements begin functionality
- `end()`: Implements end functionality
- `cbegin()`: Implements cbegin functionality
- `cend()`: Implements cend functionality
### Namespaces
- `detail`
### Summary
The `smart_ptr.hpp` file provides essential functionality for core functionality. It defines 7 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `array_ptr`: Implements array_ptr functionality
- `block_ptr`: Implements block_ptr functionality
- `file_closer`: Implements file_closer functionality
- `nop_deleter`: Implements nop_deleter functionality
- `ptr_setter`: Implements ptr_setter functionality
- `releaser`: Implements releaser functionality
- `unique_ptr_with_ondestroy`: Implements unique_ptr_with_ondestroy functionality
### Kluczowe Funkcje
- `reset()`: We don't need a strong guarantee here, so it's better to
- `data()`: Returns pointer to internal buffer for direct access to stored data
- `get_data()`: Returns pointer to internal buffer for direct access to stored data
- `size()`: Returns current allocated size of the buffer in elements
- `empty()`: Implements empty functionality
- `bool()`: Implements bool functionality
- `begin()`: Implements begin functionality
- `end()`: Implements end functionality
- `cbegin()`: Implements cbegin functionality
- `cend()`: Implements cend functionality
### Przestrzenie nazw
- `detail`
### Podsumowanie
Plik `smart_ptr.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 7 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
