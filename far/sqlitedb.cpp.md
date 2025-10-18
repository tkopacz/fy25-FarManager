# sqlitedb.cpp
## English
### Purpose
This file implements functionality related to: обёртка sqlite api для c++.
Main functional areas: core functionality
### Key Classes
- `SQLiteDb`: Implements SQLiteDb functionality
- `backup_closer`: Implements backup_closer functionality
- `cache`: Implements cache functionality
- `collation_context`: Implements collation_context functionality
- `lock`: Implements lock functionality
### Key Functions
- `GetLastErrorCode()`: Retrieves LastErrorCode from current context or object state
- `GetLastSystemErrorCode()`: Retrieves LastSystemErrorCode from current context or object state
- `GetErrorString()`: Retrieves ErrorString from current context or object state
- `GetDatabaseName()`: Retrieves DatabaseName from current context or object state
- `string()`: Implements string functionality
- `GetLastErrorString()`: Processes input by dispatching to different code paths based on type or value
- `is_user_problem()`: Processes input by dispatching to different code paths based on type or value
- `far_known_sqlite_exception()`: Implements far_known_sqlite_exception functionality
- `far_sqlite_exception()`: Implements far_sqlite_exception functionality
- `throw_exception()`: Implements throw_exception functionality
### Summary
The `sqlitedb.cpp` file provides essential functionality for core functionality. It defines 5 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: обёртка sqlite api для c++.
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `SQLiteDb`: Implements SQLiteDb functionality
- `backup_closer`: Implements backup_closer functionality
- `cache`: Implements cache functionality
- `collation_context`: Implements collation_context functionality
- `lock`: Implements lock functionality
### Kluczowe Funkcje
- `GetLastErrorCode()`: Retrieves LastErrorCode from current context or object state
- `GetLastSystemErrorCode()`: Retrieves LastSystemErrorCode from current context or object state
- `GetErrorString()`: Retrieves ErrorString from current context or object state
- `GetDatabaseName()`: Retrieves DatabaseName from current context or object state
- `string()`: Implements string functionality
- `GetLastErrorString()`: Processes input by dispatching to different code paths based on type or value
- `is_user_problem()`: Processes input by dispatching to different code paths based on type or value
- `far_known_sqlite_exception()`: Implements far_known_sqlite_exception functionality
- `far_sqlite_exception()`: Implements far_sqlite_exception functionality
- `throw_exception()`: Implements throw_exception functionality
### Podsumowanie
Plik `sqlitedb.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 5 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
