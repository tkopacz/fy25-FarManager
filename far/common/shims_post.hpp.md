# shims_post.hpp
## English
### Purpose
This file implements functionality related to: Workarounds for supported compilers & libraries
Main functional areas: core functionality
### Key Functions
- `wcschr()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcspbrk()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcsrchr()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcsstr()`: Performs wcsstr operation in shims_post.hpp
- `wmemchr()`: Performs wmemchr operation in shims_post.hpp
### Namespaces
- `std`
### Summary
The `shims_post.hpp` file provides essential functionality for core functionality. and contains approximately 5 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Workarounds for supported compilers & libraries
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `wcschr()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcspbrk()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcsrchr()`: These inline implementations in gcc/cwchar are wrong and non-compilable if _CONST_RETURN is defined.
- `wcsstr()`: Performs wcsstr operation in shims_post.hpp
- `wmemchr()`: Performs wmemchr operation in shims_post.hpp
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `shims_post.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 5 funkcji wspierających operacje menedżera plików Far Manager.
