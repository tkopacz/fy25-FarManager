# platform.concurrency.hpp
## English
### Purpose
This file implements functionality related to: Threads, mutexes, events, critical sections etc.
Main functional areas: core functionality
### Key Classes
- `critical_section`: Performs critical_section operation as part of the component's functionality
- `event`: Performs event operation as part of the component's functionality
- `i_shared_mutex`: Performs i_shared_mutex operation as part of the component's functionality
- `mutex`: Performs mutex operation as part of the component's functionality
- `shared_mutex`: Performs shared_mutex operation as part of the component's functionality
- `state`: Performs state operation as part of the component's functionality
- `synced_queue`: Performs synced_queue operation as part of the component's functionality
- `thread`: Performs thread operation as part of the component's functionality
- `timer`: Performs timer operation as part of the component's functionality
- `timer_closer`: Performs timer_closer operation as part of the component's functionality
### Key Functions
- `make_name()`: Performs make_name operation as part of the component's functionality
- `lock()`: Performs lock operation as part of the component's functionality
- `unlock()`: Performs unlock operation as part of the component's functionality
- `thread()`: Performs thread operation as part of the component's functionality
- `get_id()`: Retrieves _id from internal state or data structure
- `joinable()`: Performs joinable operation as part of the component's functionality
- `detach()`: Performs detach operation as part of the component's functionality
- `join()`: Performs join operation as part of the component's functionality
- `check_joinable()`: Validates data integrity and checks correctness of input
- `finalise()`: Performs finalise operation as part of the component's functionality
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
- `critical_section`: Performs critical_section operation as part of the component's functionality
- `event`: Performs event operation as part of the component's functionality
- `i_shared_mutex`: Performs i_shared_mutex operation as part of the component's functionality
- `mutex`: Performs mutex operation as part of the component's functionality
- `shared_mutex`: Performs shared_mutex operation as part of the component's functionality
- `state`: Performs state operation as part of the component's functionality
- `synced_queue`: Performs synced_queue operation as part of the component's functionality
- `thread`: Performs thread operation as part of the component's functionality
- `timer`: Performs timer operation as part of the component's functionality
- `timer_closer`: Performs timer_closer operation as part of the component's functionality
### Kluczowe Funkcje
- `make_name()`: Performs make_name operation as part of the component's functionality
- `lock()`: Performs lock operation as part of the component's functionality
- `unlock()`: Performs unlock operation as part of the component's functionality
- `thread()`: Performs thread operation as part of the component's functionality
- `get_id()`: Pobiera _id ze stanu wewnętrznego lub struktury danych
- `joinable()`: Performs joinable operation as part of the component's functionality
- `detach()`: Performs detach operation as part of the component's functionality
- `join()`: Performs join operation as part of the component's functionality
- `check_joinable()`: Waliduje integralność danych i sprawdza poprawność
- `finalise()`: Performs finalise operation as part of the component's functionality
### Przestrzenie nazw
- `detail`
- `os`
### Podsumowanie
Plik `platform.concurrency.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
