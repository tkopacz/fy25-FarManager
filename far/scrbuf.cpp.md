# scrbuf.cpp
## English
### Purpose
This file implements functionality related to: Буферизация вывода на экран, весь вывод идет через этот буфер
Main functional areas: screen operations
### Key Classes
- `border`: Implements border functionality
### Key Functions
- `is_visible()`: Checks condition and returns boolean indicating state
- `invalidate_broken_pairs_in_cache()`: Implements invalidate_broken_pairs_in_cache functionality
- `apply_nt_index_shadow()`: If it's intense then remove the intensity
- `apply_index_shadow()`: Non-intense can't get any darker, so just return black
- `apply_shadow()`: Apply half-transparent black and hope that the approximation will yield something sensible
- `bake_shadows()`: Apply half-transparent black and hope that the approximation will yield something sensible
- `expand_write_region_if_needed()`: Implements expand_write_region_if_needed functionality
- `Flush()`: "Сбросить" виртуальный буфер на консоль
### Namespaces
- `colors`
### Summary
The `scrbuf.cpp` file provides essential functionality for screen operations. It defines 1 class(es) and contains approximately 8 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Буферизация вывода на экран, весь вывод идет через этот буфер
Główne obszary funkcjonalne: operacje ekranowe
### Kluczowe Klasy
- `border`: Implements border functionality
### Kluczowe Funkcje
- `is_visible()`: Checks condition and returns boolean indicating state
- `invalidate_broken_pairs_in_cache()`: Implements invalidate_broken_pairs_in_cache functionality
- `apply_nt_index_shadow()`: If it's intense then remove the intensity
- `apply_index_shadow()`: Non-intense can't get any darker, so just return black
- `apply_shadow()`: Apply half-transparent black and hope that the approximation will yield something sensible
- `bake_shadows()`: Apply half-transparent black and hope that the approximation will yield something sensible
- `expand_write_region_if_needed()`: Implements expand_write_region_if_needed functionality
- `Flush()`: "Сбросить" виртуальный буфер на консоль
### Przestrzenie nazw
- `colors`
### Podsumowanie
Plik `scrbuf.cpp` zapewnia podstawową funkcjonalność dla operacje ekranowe. Definiuje 1 klas(y) i zawiera około 8 funkcji wspierających operacje menedżera plików Far Manager.
