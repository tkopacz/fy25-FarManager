# scrobj.hpp
## English
### Purpose
This file implements functionality related to: Parent class для всех screen objects
Main functional areas: screen operations
### Key Classes
- `SaveScreen`: Performs SaveScreen operation in scrobj.hpp
- `ScreenObject`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
- `ScreenObjectWithShadow`: Performs ScreenObjectWithShadow operation in scrobj.hpp
- `SimpleScreenObject`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
### Key Functions
- `ProcessKey()`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
- `ProcessMouse()`: Processes input data in scrobj.hpp
- `Hide()`: Performs Hide operation in scrobj.hpp
- `Show()`: Performs Show operation in scrobj.hpp
- `ShowConsoleTitle()`: Performs ShowConsoleTitle operation in scrobj.hpp
- `SetPosition()`: Sets or updates Position value in scrobj.hpp
- `GetPosition()`: Retrieves Position value in scrobj.hpp
- `SetScreenPosition()`: Sets or updates ScreenPosition value in scrobj.hpp
- `ResizeConsole()`: Performs ResizeConsole operation in scrobj.hpp
- `VMProcess()`: Performs VMProcess operation in scrobj.hpp
### Summary
The `scrobj.hpp` file provides essential functionality for screen operations. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Parent class для всех screen objects
Główne obszary funkcjonalne: operacje ekranowe
### Kluczowe Klasy
- `SaveScreen`: Performs SaveScreen operation in scrobj.hpp
- `ScreenObject`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
- `ScreenObjectWithShadow`: Performs ScreenObjectWithShadow operation in scrobj.hpp
- `SimpleScreenObject`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
### Kluczowe Funkcje
- `ProcessKey()`: можно использовать только младший байт (т.е. маска 0x000000FF), остальное отдается порожденным классам
- `ProcessMouse()`: Processes input data in scrobj.hpp
- `Hide()`: Performs Hide operation in scrobj.hpp
- `Show()`: Performs Show operation in scrobj.hpp
- `ShowConsoleTitle()`: Performs ShowConsoleTitle operation in scrobj.hpp
- `SetPosition()`: Sets or updates Position value in scrobj.hpp
- `GetPosition()`: Retrieves Position value in scrobj.hpp
- `SetScreenPosition()`: Sets or updates ScreenPosition value in scrobj.hpp
- `ResizeConsole()`: Performs ResizeConsole operation in scrobj.hpp
- `VMProcess()`: Performs VMProcess operation in scrobj.hpp
### Podsumowanie
Plik `scrobj.hpp` zapewnia podstawową funkcjonalność dla operacje ekranowe. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
