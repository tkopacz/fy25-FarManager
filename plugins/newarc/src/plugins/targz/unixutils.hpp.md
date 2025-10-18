# unixutils.hpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `dosdate_t`: Implements dosdate_t functionality
- `new_cpio_header`: Implements new_cpio_header functionality
- `old_cpio_header`: Implements old_cpio_header functionality
- `posix_header`: Implements posix_header functionality
- `time`: Implements time functionality
### Key Functions
- `UnixToDos()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes
- `GetOctal()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes hours
- `GetHex()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes hours
- `UnixTimeToFileTime()`: extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1980 - 2099
### Summary
The `unixutils.hpp` file provides essential functionality for core functionality. It defines 5 class(es) and contains approximately 4 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `dosdate_t`: Implements dosdate_t functionality
- `new_cpio_header`: Implements new_cpio_header functionality
- `old_cpio_header`: Implements old_cpio_header functionality
- `posix_header`: Implements posix_header functionality
- `time`: Implements time functionality
### Kluczowe Funkcje
- `UnixToDos()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes
- `GetOctal()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes hours
- `GetHex()`: TOOLS extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1-31 1-12 1980 - 2099 0 - 6 (0=Sunday) minutes hours
- `UnixTimeToFileTime()`: extern void UnixToDos(long time,struct dosdate_t *d,struct time *t); 1980 - 2099
### Podsumowanie
Plik `unixutils.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 5 klas(y) i zawiera około 4 funkcji wspierających operacje menedżera plików Far Manager.
