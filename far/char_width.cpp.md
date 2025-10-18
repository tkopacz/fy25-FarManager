# char_width.cpp
## English
### Purpose
This file implements functionality related to: Fullwidth support
Main functional areas: core functionality
### Key Classes
- `codepoint_width`: Implements codepoint_width functionality
- `full_width`: Implements full_width functionality
- `unicode_range`: Implements unicode_range functionality
### Key Functions
- `quick_width()`: Implements quick_width functionality
- `lookup_width()`: Implements lookup_width functionality
- `is_bmp()`: Checks condition and returns boolean indicating state
- `device_width()`: Implements device_width functionality
- `is_fullwidth_needed()`: Checks condition and returns boolean indicating state
- `get_width()`: Retrieves _width from current context or object state
- `get()`: Processes input by dispatching to different code paths based on type or value
- `is_wide()`: Processes input by dispatching to different code paths based on type or value
- `enable()`: Processes input by dispatching to different code paths based on type or value
- `is_enabled()`: As of 23 Jun 2022 conhost and WT render half-width surrogates as half-width, but advance the cursor position as if they were full-width
### Namespaces
- `char_width`
### Summary
The `char_width.cpp` file provides essential functionality for core functionality. It defines 3 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Fullwidth support
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `codepoint_width`: Implements codepoint_width functionality
- `full_width`: Implements full_width functionality
- `unicode_range`: Implements unicode_range functionality
### Kluczowe Funkcje
- `quick_width()`: Implements quick_width functionality
- `lookup_width()`: Implements lookup_width functionality
- `is_bmp()`: Checks condition and returns boolean indicating state
- `device_width()`: Implements device_width functionality
- `is_fullwidth_needed()`: Checks condition and returns boolean indicating state
- `get_width()`: Retrieves _width from current context or object state
- `get()`: Processes input by dispatching to different code paths based on type or value
- `is_wide()`: Processes input by dispatching to different code paths based on type or value
- `enable()`: Processes input by dispatching to different code paths based on type or value
- `is_enabled()`: As of 23 Jun 2022 conhost and WT render half-width surrogates as half-width, but advance the cursor position as if they were full-width
### Przestrzenie nazw
- `char_width`
### Podsumowanie
Plik `char_width.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 3 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
