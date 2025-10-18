# module.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `Archive`: implement IInArchiveGetStream to support individual file streams (ability to access archive items without the need to extract them first)
- `FileInfo`: Performs FileInfo operation in module.cpp
- `FileStream`: *** IInArchiveGetStream ***
### Key Functions
- `GetHandlerProperty()`: Retrieves HandlerProperty value in module.cpp
- `path_buf()`: Iterates through elements in module.cpp and adds them to a collection
- `CHECK()`: num_items == -1 means extract all items
- `CreateObject()`: client will request IInStream via QueryInterface if needed
### Summary
The `module.cpp` file provides essential functionality for core functionality. It defines 3 class(es) and contains approximately 4 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `Archive`: implement IInArchiveGetStream to support individual file streams (ability to access archive items without the need to extract them first)
- `FileInfo`: Performs FileInfo operation in module.cpp
- `FileStream`: *** IInArchiveGetStream ***
### Kluczowe Funkcje
- `GetHandlerProperty()`: Retrieves HandlerProperty value in module.cpp
- `path_buf()`: Iterates through elements in module.cpp and adds them to a collection
- `CHECK()`: num_items == -1 means extract all items
- `CreateObject()`: client will request IInStream via QueryInterface if needed
### Podsumowanie
Plik `module.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 3 klas(y) i zawiera około 4 funkcji wspierających operacje menedżera plików Far Manager.
