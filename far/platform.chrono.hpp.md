# platform.chrono.hpp
## English
### Purpose
This file implements functionality related to: */
Main functional areas: core functionality
### Key Classes
- `local_tag`: Implements local_tag functionality
- `nt_clock`: Implements nt_clock functionality
- `time`: Implements time functionality
- `typed_time`: Implements typed_time functionality
- `utc_tag`: Implements utc_tag functionality
### Key Functions
- `now()`: Implements now functionality
- `to_time_t()`: Implements to_time_t functionality
- `from_time_t()`: Implements from_time_t functionality
- `to_filetime()`: Implements to_filetime functionality
- `from_filetime()`: Implements from_filetime functionality
- `from_hectonanoseconds()`: Implements from_hectonanoseconds functionality
- `to_hectonanoseconds()`: Implements to_hectonanoseconds functionality
- `milliseconds()`: Implements milliseconds functionality
- `now_utc()`: Q: WTF is this, it's in the standard! A: MSVC implemented it in terms of sleep_until, which is mental
- `now_local()`: Q: WTF is this, it's in the standard! A: MSVC implemented it in terms of sleep_until, which is mental
### Namespaces
- `detail`
- `literals`
- `os`
### Summary
The `platform.chrono.hpp` file provides essential functionality for core functionality. It defines 5 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: */
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `local_tag`: Implements local_tag functionality
- `nt_clock`: Implements nt_clock functionality
- `time`: Implements time functionality
- `typed_time`: Implements typed_time functionality
- `utc_tag`: Implements utc_tag functionality
### Kluczowe Funkcje
- `now()`: Implements now functionality
- `to_time_t()`: Implements to_time_t functionality
- `from_time_t()`: Implements from_time_t functionality
- `to_filetime()`: Implements to_filetime functionality
- `from_filetime()`: Implements from_filetime functionality
- `from_hectonanoseconds()`: Implements from_hectonanoseconds functionality
- `to_hectonanoseconds()`: Implements to_hectonanoseconds functionality
- `milliseconds()`: Implements milliseconds functionality
- `now_utc()`: Q: WTF is this, it's in the standard! A: MSVC implemented it in terms of sleep_until, which is mental
- `now_local()`: Q: WTF is this, it's in the standard! A: MSVC implemented it in terms of sleep_until, which is mental
### Przestrzenie nazw
- `detail`
- `literals`
- `os`
### Podsumowanie
Plik `platform.chrono.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 5 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
