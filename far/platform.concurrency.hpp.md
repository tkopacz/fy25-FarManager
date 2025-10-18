# platform.concurrency.hpp
## English
### Purpose
This file implements functionality related to: Threads, mutexes, events, critical sections etc.
Main functional areas: core functionality
### Key Classes
- `critical_section`: Performs critical_section operation in platform.concurrency.hpp
- `event`: Performs event operation in platform.concurrency.hpp
- `i_shared_mutex`: Performs i_shared_mutex operation in platform.concurrency.hpp
- `mutex`: Performs mutex operation in platform.concurrency.hpp
- `shared_mutex`: Q: WTF is this, it's in the standard!
- `state`: Performs state operation in platform.concurrency.hpp
- `synced_queue`: Performs synced_queue operation in platform.concurrency.hpp
- `thread`: Performs thread operation in platform.concurrency.hpp
- `timer`: Performs timer operation in platform.concurrency.hpp
- `timer_closer`: Performs timer_closer operation in platform.concurrency.hpp
### Key Functions
- `make_name()`: Performs make_name operation in platform.concurrency.hpp
- `lock()`: Checks a condition in platform.concurrency.hpp and returns true or false based on the result
- `unlock()`: Performs unlock operation in platform.concurrency.hpp
- `thread()`: Performs thread operation in platform.concurrency.hpp
- `get_id()`: Retrieves _id value in platform.concurrency.hpp
- `joinable()`: Performs joinable operation in platform.concurrency.hpp
- `detach()`: Performs detach operation in platform.concurrency.hpp
- `join()`: Performs join operation in platform.concurrency.hpp
- `check_joinable()`: Performs check_joinable operation in platform.concurrency.hpp
- `finalise()`: Performs finalise operation in platform.concurrency.hpp
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
- `critical_section`: Performs critical_section operation in platform.concurrency.hpp
- `event`: Performs event operation in platform.concurrency.hpp
- `i_shared_mutex`: Performs i_shared_mutex operation in platform.concurrency.hpp
- `mutex`: Performs mutex operation in platform.concurrency.hpp
- `shared_mutex`: Q: WTF is this, it's in the standard!
- `state`: Performs state operation in platform.concurrency.hpp
- `synced_queue`: Performs synced_queue operation in platform.concurrency.hpp
- `thread`: Performs thread operation in platform.concurrency.hpp
- `timer`: Performs timer operation in platform.concurrency.hpp
- `timer_closer`: Performs timer_closer operation in platform.concurrency.hpp
### Kluczowe Funkcje
- `make_name()`: Performs make_name operation in platform.concurrency.hpp
- `lock()`: Checks a condition in platform.concurrency.hpp and returns true or false based on the result
- `unlock()`: Performs unlock operation in platform.concurrency.hpp
- `thread()`: Performs thread operation in platform.concurrency.hpp
- `get_id()`: Retrieves _id value in platform.concurrency.hpp
- `joinable()`: Performs joinable operation in platform.concurrency.hpp
- `detach()`: Performs detach operation in platform.concurrency.hpp
- `join()`: Performs join operation in platform.concurrency.hpp
- `check_joinable()`: Performs check_joinable operation in platform.concurrency.hpp
- `finalise()`: Performs finalise operation in platform.concurrency.hpp
### Przestrzenie nazw
- `detail`
- `os`
### Podsumowanie
Plik `platform.concurrency.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
