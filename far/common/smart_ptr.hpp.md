# smart_ptr.hpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `array_ptr`: Performs array_ptr operation in smart_ptr.hpp
- `block_ptr`: Storage for variable size structs, e.g. with data following the struct in the memory block
- `file_closer`: Performs file_closer operation in smart_ptr.hpp
- `nop_deleter`: Performs nop_deleter operation in smart_ptr.hpp
- `ptr_setter`: Performs ptr_setter operation in smart_ptr.hpp
- `releaser`: Performs releaser operation in smart_ptr.hpp
- `unique_ptr_with_ondestroy`: Performs unique_ptr_with_ondestroy operation in smart_ptr.hpp
### Key Functions
- `reset()`: Performs reset operation in smart_ptr.hpp
- `data()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `get_data()`: Retrieves _data value in smart_ptr.hpp
- `size()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `empty()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `bool()`: Performs bool operation in smart_ptr.hpp
- `begin()`: Performs begin operation in smart_ptr.hpp
- `end()`: Performs end operation in smart_ptr.hpp
- `cbegin()`: Performs cbegin operation in smart_ptr.hpp
- `cend()`: Performs cend operation in smart_ptr.hpp
### Namespaces
- `detail`
### Summary
The `smart_ptr.hpp` file provides essential functionality for core functionality. It defines 7 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `array_ptr`: Performs array_ptr operation in smart_ptr.hpp
- `block_ptr`: Storage for variable size structs, e.g. with data following the struct in the memory block
- `file_closer`: Performs file_closer operation in smart_ptr.hpp
- `nop_deleter`: Performs nop_deleter operation in smart_ptr.hpp
- `ptr_setter`: Performs ptr_setter operation in smart_ptr.hpp
- `releaser`: Performs releaser operation in smart_ptr.hpp
- `unique_ptr_with_ondestroy`: Performs unique_ptr_with_ondestroy operation in smart_ptr.hpp
### Kluczowe Funkcje
- `reset()`: Performs reset operation in smart_ptr.hpp
- `data()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `get_data()`: Retrieves _data value in smart_ptr.hpp
- `size()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `empty()`: We don't need a strong guarantee here, so it's better to reduce memory usage
- `bool()`: Performs bool operation in smart_ptr.hpp
- `begin()`: Performs begin operation in smart_ptr.hpp
- `end()`: Performs end operation in smart_ptr.hpp
- `cbegin()`: Performs cbegin operation in smart_ptr.hpp
- `cend()`: Performs cend operation in smart_ptr.hpp
### Przestrzenie nazw
- `detail`
### Podsumowanie
Plik `smart_ptr.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 7 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
