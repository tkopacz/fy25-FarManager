# sqlitedb.hpp
## English
### Purpose
This file implements functionality related to: обёртка sqlite api для c++.
Main functional areas: core functionality
### Key Classes
- `SQLiteDb`: Performs SQLiteDb operation in sqlitedb.hpp
- `SQLiteStmt`: Performs SQLiteStmt operation in sqlitedb.hpp
- `column_type`: Performs column_type operation in sqlitedb.hpp
- `db_closer`: Performs db_closer operation in sqlitedb.hpp
- `db_initialiser`: No forwarding here - ExecuteStatement is atomic so we don't have to deal with lifetimes
- `far_sqlite_exception`: Performs far_sqlite_exception operation in sqlitedb.hpp
- `implementation`: Performs implementation operation in sqlitedb.hpp
- `sqlite3`: Performs sqlite3 operation in sqlitedb.hpp
- `sqlite3_stmt`: Performs sqlite3_stmt operation in sqlitedb.hpp
- `statement_reset`: Performs statement_reset operation in sqlitedb.hpp
### Key Functions
- `is_constraint_unique()`: Checks a condition in sqlitedb.hpp and returns the result
- `library_load()`: Performs library_load operation in sqlitedb.hpp
- `library_free()`: Performs library_free operation in sqlitedb.hpp
- `GetPath()`: Retrieves Path value in sqlitedb.hpp
- `IsNew()`: Checks a condition in sqlitedb.hpp and returns the result
- `BeginTransaction()`: Performs BeginTransaction operation in sqlitedb.hpp
- `EndTransaction()`: Performs EndTransaction operation in sqlitedb.hpp
- `Reset()`: Performs Reset operation in sqlitedb.hpp
- `Step()`: Performs Step operation in sqlitedb.hpp
- `Execute()`: Performs Execute operation in sqlitedb.hpp
### Namespaces
- `sqlite`
### Summary
The `sqlitedb.hpp` file provides essential functionality for core functionality. It defines 11 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: обёртка sqlite api для c++.
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `SQLiteDb`: Performs SQLiteDb operation in sqlitedb.hpp
- `SQLiteStmt`: Performs SQLiteStmt operation in sqlitedb.hpp
- `column_type`: Performs column_type operation in sqlitedb.hpp
- `db_closer`: Performs db_closer operation in sqlitedb.hpp
- `db_initialiser`: No forwarding here - ExecuteStatement is atomic so we don't have to deal with lifetimes
- `far_sqlite_exception`: Performs far_sqlite_exception operation in sqlitedb.hpp
- `implementation`: Performs implementation operation in sqlitedb.hpp
- `sqlite3`: Performs sqlite3 operation in sqlitedb.hpp
- `sqlite3_stmt`: Performs sqlite3_stmt operation in sqlitedb.hpp
- `statement_reset`: Performs statement_reset operation in sqlitedb.hpp
### Kluczowe Funkcje
- `is_constraint_unique()`: Checks a condition in sqlitedb.hpp and returns the result
- `library_load()`: Performs library_load operation in sqlitedb.hpp
- `library_free()`: Performs library_free operation in sqlitedb.hpp
- `GetPath()`: Retrieves Path value in sqlitedb.hpp
- `IsNew()`: Checks a condition in sqlitedb.hpp and returns the result
- `BeginTransaction()`: Performs BeginTransaction operation in sqlitedb.hpp
- `EndTransaction()`: Performs EndTransaction operation in sqlitedb.hpp
- `Reset()`: Performs Reset operation in sqlitedb.hpp
- `Step()`: Performs Step operation in sqlitedb.hpp
- `Execute()`: Performs Execute operation in sqlitedb.hpp
### Przestrzenie nazw
- `sqlite`
### Podsumowanie
Plik `sqlitedb.hpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
