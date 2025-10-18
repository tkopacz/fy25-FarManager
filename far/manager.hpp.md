# manager.hpp
## English
### Purpose
This file implements functionality related to: Переключение между несколькими file panels, viewers, editors
Main functional areas: core functionality
### Key Classes
- `Key`: Implements Key functionality
- `Manager`: Iterates through collection and processes each element, storing results
- `Viewer`: Implements Viewer functionality
- `direction`: Implements direction functionality
- `window_comparer`: Implements window_comparer functionality
### Key Functions
- `Key()`: Implements Key functionality
- `Event()`: Implements Event functionality
- `IsEvent()`: Checks condition and returns boolean indicating state
- `IsReal()`: Эти функции можно безопасно вызывать практически из любого места кода они как бы накапливают информацию о том, ч
- `NumberOfWheelEvents()`: Iterates through collection and processes each element, storing results
- `Fill()`: Iterates through collection and processes each element, storing results
- `InitDesktop()`: Iterates through collection and processes each element, storing results
- `InsertWindow()`: Iterates through collection and processes each element, storing results
- `DeleteWindow()`: они как бы накапливают информацию о том, что нужно будет сделать с окнами при следующем вызове Commit() ! Функции для запуска модальных окон
- `ActivateWindow()`: ! Функции для запуска модальных окон
### Summary
The `manager.hpp` file provides essential functionality for core functionality. It defines 5 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Переключение между несколькими file panels, viewers, editors
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `Key`: Implements Key functionality
- `Manager`: Iterates through collection and processes each element, storing results
- `Viewer`: Implements Viewer functionality
- `direction`: Implements direction functionality
- `window_comparer`: Implements window_comparer functionality
### Kluczowe Funkcje
- `Key()`: Implements Key functionality
- `Event()`: Implements Event functionality
- `IsEvent()`: Checks condition and returns boolean indicating state
- `IsReal()`: Эти функции можно безопасно вызывать практически из любого места кода они как бы накапливают информацию о том, ч
- `NumberOfWheelEvents()`: Iterates through collection and processes each element, storing results
- `Fill()`: Iterates through collection and processes each element, storing results
- `InitDesktop()`: Iterates through collection and processes each element, storing results
- `InsertWindow()`: Iterates through collection and processes each element, storing results
- `DeleteWindow()`: они как бы накапливают информацию о том, что нужно будет сделать с окнами при следующем вызове Commit() ! Функции для запуска модальных окон
- `ActivateWindow()`: ! Функции для запуска модальных окон
### Podsumowanie
Plik `manager.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 5 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
