# scrbuf.hpp
## English
### Purpose
This file implements functionality related to: Буферизация вывода на экран, весь вывод идет через этот буфер
Main functional areas: screen operations
### Key Classes
- `ScreenBuf`: Implements ScreenBuf functionality
- `flush_type`: Implements flush_type functionality
### Key Functions
- `DebugDump()`: Implements DebugDump functionality
- `AllocBuf()`: Implements AllocBuf functionality
- `Lock()`: Implements Lock functionality
- `Unlock()`: Implements Unlock functionality
- `GetLockCount()`: Retrieves LockCount from current context or object state
- `SetLockCount()`: Updates LockCount with provided value and validates constraints
- `ResetLockCount()`: Implements ResetLockCount functionality
- `MoveCursor()`: Implements MoveCursor functionality
- `GetCursorPos()`: Retrieves CursorPos from current context or object state
- `SetCursorType()`: Updates CursorType with provided value and validates constraints
### Summary
The `scrbuf.hpp` file provides essential functionality for screen operations. It defines 2 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Буферизация вывода на экран, весь вывод идет через этот буфер
Główne obszary funkcjonalne: operacje ekranowe
### Kluczowe Klasy
- `ScreenBuf`: Implements ScreenBuf functionality
- `flush_type`: Implements flush_type functionality
### Kluczowe Funkcje
- `DebugDump()`: Implements DebugDump functionality
- `AllocBuf()`: Implements AllocBuf functionality
- `Lock()`: Implements Lock functionality
- `Unlock()`: Implements Unlock functionality
- `GetLockCount()`: Retrieves LockCount from current context or object state
- `SetLockCount()`: Updates LockCount with provided value and validates constraints
- `ResetLockCount()`: Implements ResetLockCount functionality
- `MoveCursor()`: Implements MoveCursor functionality
- `GetCursorPos()`: Retrieves CursorPos from current context or object state
- `SetCursorType()`: Updates CursorType with provided value and validates constraints
### Podsumowanie
Plik `scrbuf.hpp` zapewnia podstawową funkcjonalność dla operacje ekranowe. Definiuje 2 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
