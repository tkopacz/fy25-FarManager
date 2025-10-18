# cs.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Functions
- `InitializeCriticalSection()`: ! CriticalSection .
- `DeleteCriticalSection()`: ! CriticalSection .
- `EnterCriticalSection()`: ! CriticalSection .
- `LeaveCriticalSection()`: ! CriticalSection .
- `TryEnterCriticalSection()`: - QNX .
- `Destroy()`: Writers wait on this if a reader has access
- `PRAccessCreate()`: (0=no threads, >0=# of readers, -1=1 writer)
- `PRAccessDestroy()`: Initially no readers want access, no writers want access, and
- `PRAccessEnter()`: no threads are accessing the resource
- `PRAccessLeave()`: Performs PRAccessLeave operation in cs.cpp
### Summary
The `cs.cpp` file provides essential functionality for core functionality. and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `InitializeCriticalSection()`: ! CriticalSection .
- `DeleteCriticalSection()`: ! CriticalSection .
- `EnterCriticalSection()`: ! CriticalSection .
- `LeaveCriticalSection()`: ! CriticalSection .
- `TryEnterCriticalSection()`: - QNX .
- `Destroy()`: Writers wait on this if a reader has access
- `PRAccessCreate()`: (0=no threads, >0=# of readers, -1=1 writer)
- `PRAccessDestroy()`: Initially no readers want access, no writers want access, and
- `PRAccessEnter()`: no threads are accessing the resource
- `PRAccessLeave()`: Performs PRAccessLeave operation in cs.cpp
### Podsumowanie
Plik `cs.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
