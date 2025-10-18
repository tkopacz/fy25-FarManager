# platform.concurrency.hpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`critical_section`**: Implements critical section functionality
- **`thread`**: Implements thread functionality
- **`mutex`**: Implements mutex functionality
- **`shared_mutex`**: Implements shared mutex functionality
- **`event`**: Implements event functionality
- **`type`**: Enumeration defining possible values for type
- **`state`**: Enumeration defining possible values for state
- **`timer`**: Enumeration defining possible values for timer
- **`timer_closer`**: Implements timer closer functionality

### Key Functions
- **`critical_section::lock()`**: Executes lock operation
- **`critical_section::unlock()`**: Executes unlock operation
- **`shared_mutex::lock()`**: Executes lock operation
- **`shared_mutex::try_lock()`**: Executes try lock operation
- **`shared_mutex::unlock()`**: Executes unlock operation
- **`shared_mutex::lock_shared()`**: Executes lock shared operation
- **`shared_mutex::try_lock_shared()`**: Executes try lock shared operation
- **`shared_mutex::unlock_shared()`**: Executes unlock shared operation

### Namespaces
- `os`

### Summary
The `platform.concurrency.hpp` file is essential for platform-specific operations. It defines 9 class(es) and implements 8 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`critical_section`**: Implements critical section functionality
- **`thread`**: Implements thread functionality
- **`mutex`**: Implements mutex functionality
- **`shared_mutex`**: Implements shared mutex functionality
- **`event`**: Implements event functionality
- **`type`**: Enumeration defining possible values for type
- **`state`**: Enumeration defining possible values for state
- **`timer`**: Enumeration defining possible values for timer
- **`timer_closer`**: Implements timer closer functionality

### Kluczowe Funkcje
- **`critical_section::lock()`**: Executes lock operation
- **`critical_section::unlock()`**: Executes unlock operation
- **`shared_mutex::lock()`**: Executes lock operation
- **`shared_mutex::try_lock()`**: Executes try lock operation
- **`shared_mutex::unlock()`**: Executes unlock operation
- **`shared_mutex::lock_shared()`**: Executes lock shared operation
- **`shared_mutex::try_lock_shared()`**: Executes try lock shared operation
- **`shared_mutex::unlock_shared()`**: Executes unlock shared operation

### Przestrzenie nazw
- `os`

### Podsumowanie
Plik `platform.concurrency.hpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 9 klas(y) i implementuje 8 funkcji wspierających operacje menedżera plików Far Manager.
