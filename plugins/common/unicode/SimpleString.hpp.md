# SimpleString.hpp
## English
### Purpose
Main functional areas: string utilities
### Key Classes
- `SimpleString`: Implements SimpleString functionality
### Key Functions
- `Alloc()`: Implements Alloc functionality
- `SimpleString()`: Implements SimpleString functionality
- `Inflate()`: Implements Inflate functionality
- `Len()`: Implements Len functionality
- `SetLen()`: Updates Len with provided value and validates constraints
- `Size()`: Returns current allocated size of the buffer in elements
- `At()`: Implements At functionality
- `IsEmpty()`: _vsnwprintf не всегда ставит '\0' вконце
- `Format()`: _vsnwprintf не всегда ставит '\0' вконце
- `Replace()`: Pos & Len must be valid Data and *this must not intersect (but Data can be located entirely within *this) copy data from self
### Summary
The `SimpleString.hpp` file provides essential functionality for string utilities. It defines 1 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: narzędzia łańcuchowe
### Kluczowe Klasy
- `SimpleString`: Implements SimpleString functionality
### Kluczowe Funkcje
- `Alloc()`: Implements Alloc functionality
- `SimpleString()`: Implements SimpleString functionality
- `Inflate()`: Implements Inflate functionality
- `Len()`: Implements Len functionality
- `SetLen()`: Updates Len with provided value and validates constraints
- `Size()`: Returns current allocated size of the buffer in elements
- `At()`: Implements At functionality
- `IsEmpty()`: _vsnwprintf не всегда ставит '\0' вконце
- `Format()`: _vsnwprintf не всегда ставит '\0' вконце
- `Replace()`: Pos & Len must be valid Data and *this must not intersect (but Data can be located entirely within *this) copy data from self
### Podsumowanie
Plik `SimpleString.hpp` zapewnia podstawową funkcjonalność dla narzędzia łańcuchowe. Definiuje 1 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
