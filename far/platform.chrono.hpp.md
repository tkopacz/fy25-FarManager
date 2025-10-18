# platform.chrono.hpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`nt_clock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`time`**: Implements time functionality
- **`utc_tag`**: Implements utc tag functionality
- **`local_tag`**: Implements local tag functionality

### Key Functions
- **`nt_clock::now()`**: Executes now operation
- **`nt_clock::to_time_t()`**: Executes to time t operation
- **`nt_clock::from_time_t()`**: Executes from time t operation
- **`nt_clock::to_filetime()`**: Executes to filetime operation
- **`nt_clock::from_filetime()`**: Executes from filetime operation
- **`nt_clock::from_hectonanoseconds()`**: Executes from hectonanoseconds operation
- **`nt_clock::to_hectonanoseconds()`**: Executes to hectonanoseconds operation
- **`time::milliseconds()`**: Executes milliseconds operation

### Namespaces
- `os`

### Summary
The `platform.chrono.hpp` file is essential for platform-specific operations. It defines 4 class(es) and implements 9 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`nt_clock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`time`**: Implements time functionality
- **`utc_tag`**: Implements utc tag functionality
- **`local_tag`**: Implements local tag functionality

### Kluczowe Funkcje
- **`nt_clock::now()`**: Executes now operation
- **`nt_clock::to_time_t()`**: Executes to time t operation
- **`nt_clock::from_time_t()`**: Executes from time t operation
- **`nt_clock::to_filetime()`**: Executes to filetime operation
- **`nt_clock::from_filetime()`**: Executes from filetime operation
- **`nt_clock::from_hectonanoseconds()`**: Executes from hectonanoseconds operation
- **`nt_clock::to_hectonanoseconds()`**: Executes to hectonanoseconds operation
- **`time::milliseconds()`**: Executes milliseconds operation

### Przestrzenie nazw
- `os`

### Podsumowanie
Plik `platform.chrono.hpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 4 klas(y) i implementuje 9 funkcji wspierających operacje menedżera plików Far Manager.
