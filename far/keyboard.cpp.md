# keyboard.cpp
## English
### Purpose
This file implements functionality related to: Функции, имеющие отношение к клавиатуре
Main functional areas: core functionality
### Key Classes
- `KeysData`: Performs KeysData operation in keyboard.cpp
- `TFKey`: Performs TFKey operation in keyboard.cpp
- `keyboard_repeat_emulation`: Checks a condition in keyboard.cpp and returns true or false based on the result
- `numpad_mapping`: Performs numpad_mapping operation in keyboard.cpp
- `state`: Performs state operation in keyboard.cpp
- `wake_event`: Performs wake_event operation in keyboard.cpp
- `window_state`: Performs window_state operation in keyboard.cpp
### Key Functions
- `is_restored()`: Checks a condition in keyboard.cpp and returns the result
- `update()`: Updates existing data or state in keyboard.cpp
- `wakeup_for_clock()`: Performs wakeup_for_clock operation in keyboard.cpp
- `wakeup_for_screensaver()`: Performs wakeup_for_screensaver operation in keyboard.cpp
- `wakeup_for_screensaver_time()`: Performs wakeup_for_screensaver_time operation in keyboard.cpp
- `Layouts()`: The order matters - this is how we expect them in key names like CtrlAltWhatever
- `InitKeysArray()`: Инициализация массива клавиш.
- `xlat_observe_tables()`: VKeyToLatin - используется вместе с KeyToVKey чтоб подменить нац. символ на Latin
- `KeyToKeyLayoutCompare()`: VK -> символы с кодом меньше latin_end
- `KeyToKeyLayout()`: this would allow to map that language via user-defined XLat tables
### Summary
The `keyboard.cpp` file provides essential functionality for core functionality. It defines 7 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Функции, имеющие отношение к клавиатуре
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `KeysData`: Performs KeysData operation in keyboard.cpp
- `TFKey`: Performs TFKey operation in keyboard.cpp
- `keyboard_repeat_emulation`: Checks a condition in keyboard.cpp and returns true or false based on the result
- `numpad_mapping`: Performs numpad_mapping operation in keyboard.cpp
- `state`: Performs state operation in keyboard.cpp
- `wake_event`: Performs wake_event operation in keyboard.cpp
- `window_state`: Performs window_state operation in keyboard.cpp
### Kluczowe Funkcje
- `is_restored()`: Checks a condition in keyboard.cpp and returns the result
- `update()`: Updates existing data or state in keyboard.cpp
- `wakeup_for_clock()`: Performs wakeup_for_clock operation in keyboard.cpp
- `wakeup_for_screensaver()`: Performs wakeup_for_screensaver operation in keyboard.cpp
- `wakeup_for_screensaver_time()`: Performs wakeup_for_screensaver_time operation in keyboard.cpp
- `Layouts()`: The order matters - this is how we expect them in key names like CtrlAltWhatever
- `InitKeysArray()`: Инициализация массива клавиш.
- `xlat_observe_tables()`: VKeyToLatin - используется вместе с KeyToVKey чтоб подменить нац. символ на Latin
- `KeyToKeyLayoutCompare()`: VK -> символы с кодом меньше latin_end
- `KeyToKeyLayout()`: this would allow to map that language via user-defined XLat tables
### Podsumowanie
Plik `keyboard.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 7 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
