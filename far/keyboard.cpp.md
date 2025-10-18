# keyboard.cpp
## English
### Purpose
This file implements functionality related to: Функции, имеющие отношение к клавиатуре
Main functional areas: core functionality
### Key Classes
- `KeysData`: Implements KeysData functionality
- `TFKey`: Implements TFKey functionality
- `keyboard_repeat_emulation`: Implements keyboard_repeat_emulation functionality
- `numpad_mapping`: Implements numpad_mapping functionality
- `state`: Implements state functionality
- `wake_event`: Implements wake_event functionality
- `window_state`: Implements window_state functionality
### Key Functions
- `is_restored()`: Checks condition and returns boolean indicating state
- `update()`: Updates existing state with new values
- `wakeup_for_clock()`: Implements wakeup_for_clock functionality
- `wakeup_for_screensaver()`: Implements wakeup_for_screensaver functionality
- `wakeup_for_screensaver_time()`: Implements wakeup_for_screensaver_time functionality
- `Layouts()`: Implements Layouts functionality
- `InitKeysArray()`: Basic Latin     0020 - 007F Latin-1 Supplement 00A0 - 00FF
- `xlat_observe_tables()`: Implements xlat_observe_tables functionality
- `KeyToKeyLayoutCompare()`: Implements KeyToKeyLayoutCompare functionality
- `KeyToKeyLayout()`: Processes input by dispatching to different code paths based on type or value
### Summary
The `keyboard.cpp` file provides essential functionality for core functionality. It defines 7 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Функции, имеющие отношение к клавиатуре
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `KeysData`: Implements KeysData functionality
- `TFKey`: Implements TFKey functionality
- `keyboard_repeat_emulation`: Implements keyboard_repeat_emulation functionality
- `numpad_mapping`: Implements numpad_mapping functionality
- `state`: Implements state functionality
- `wake_event`: Implements wake_event functionality
- `window_state`: Implements window_state functionality
### Kluczowe Funkcje
- `is_restored()`: Checks condition and returns boolean indicating state
- `update()`: Updates existing state with new values
- `wakeup_for_clock()`: Implements wakeup_for_clock functionality
- `wakeup_for_screensaver()`: Implements wakeup_for_screensaver functionality
- `wakeup_for_screensaver_time()`: Implements wakeup_for_screensaver_time functionality
- `Layouts()`: Implements Layouts functionality
- `InitKeysArray()`: Basic Latin     0020 - 007F Latin-1 Supplement 00A0 - 00FF
- `xlat_observe_tables()`: Implements xlat_observe_tables functionality
- `KeyToKeyLayoutCompare()`: Implements KeyToKeyLayoutCompare functionality
- `KeyToKeyLayout()`: Processes input by dispatching to different code paths based on type or value
### Podsumowanie
Plik `keyboard.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 7 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
