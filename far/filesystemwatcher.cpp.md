# filesystemwatcher.cpp
## English
### Purpose
This file implements functionality related to: class FileSystemWatcher
Main functional areas: file system operations, singleton implementation
### Key Classes
- `background_watcher`: We don't care about individual events, so we wait a little here to let them collapse to one event per sec at most:
### Key Functions
- `add()`: Implements add functionality
- `remove()`: We have to ensure that the client event handle is no longer used by the watcher before letting the client go
- `process()`: We have to ensure that the client event handle is no longer used by the watcher before letting the client go
- `open()`: Implements open functionality
### Summary
The `filesystemwatcher.cpp` file provides essential functionality for file system operations, singleton implementation. It defines 1 class(es) and contains approximately 4 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: class FileSystemWatcher
Główne obszary funkcjonalne: operacje systemu plików, implementacja singletona
### Kluczowe Klasy
- `background_watcher`: We don't care about individual events, so we wait a little here to let them collapse to one event per sec at most:
### Kluczowe Funkcje
- `add()`: Implements add functionality
- `remove()`: We have to ensure that the client event handle is no longer used by the watcher before letting the client go
- `process()`: We have to ensure that the client event handle is no longer used by the watcher before letting the client go
- `open()`: Implements open functionality
### Podsumowanie
Plik `filesystemwatcher.cpp` zapewnia podstawową funkcjonalność dla operacje systemu plików, implementacja singletona. Definiuje 1 klas(y) i zawiera około 4 funkcji wspierających operacje menedżera plików Far Manager.
