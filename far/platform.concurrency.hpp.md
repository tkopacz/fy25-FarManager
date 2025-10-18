# platform.concurrency.hpp
## English
### Purpose
This file implements functionality related to: Threads, mutexes, events, critical sections etc.
Main functional areas: core functionality
### Key Classes
- `critical_section`: Implements critical_section functionality
- `event`: Implements event functionality
- `i_shared_mutex`: Implements i_shared_mutex functionality
- `mutex`: Implements mutex functionality
- `shared_mutex`: Implements shared_mutex functionality
- `state`: Implements state functionality
- `synced_queue`: Implements synced_queue functionality
- `thread`: Implements thread functionality
- `timer`: Implements timer functionality
- `timer_closer`: Implements timer_closer functionality
### Key Functions
- `make_name()`: Implements make_name functionality
- `lock()`: Implements lock functionality
- `unlock()`: Implements unlock functionality
- `thread()`: Implements thread functionality
- `get_id()`: Retrieves _id from current context or object state
- `joinable()`: Implements joinable functionality
- `detach()`: Implements detach functionality
- `join()`: Implements join functionality
- `check_joinable()`: Implements check_joinable functionality
- `finalise()`: Implements finalise functionality
### Namespaces
- `detail`
- `os`
### Summary
The `platform.concurrency.hpp` file provides essential functionality for core functionality. It defines 11 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Threads, mutexes, events, critical sections etc.
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `critical_section`: Implements critical_section functionality
- `event`: Implements event functionality
- `i_shared_mutex`: Implements i_shared_mutex functionality
- `mutex`: Implements mutex functionality
- `shared_mutex`: Implements shared_mutex functionality
- `state`: Implements state functionality
- `synced_queue`: Implements synced_queue functionality
- `thread`: Implements thread functionality
- `timer`: Implements timer functionality
- `timer_closer`: Implements timer_closer functionality
### Kluczowe Funkcje
- `make_name()`: Implements make_name functionality
- `lock()`: Implements lock functionality
- `unlock()`: Implements unlock functionality
- `thread()`: Implements thread functionality
- `get_id()`: Retrieves _id from current context or object state
- `joinable()`: Implements joinable functionality
- `detach()`: Implements detach functionality
- `join()`: Implements join functionality
- `check_joinable()`: Implements check_joinable functionality
- `finalise()`: Implements finalise functionality
### Przestrzenie nazw
- `detail`
- `os`
### Podsumowanie
Plik `platform.concurrency.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
