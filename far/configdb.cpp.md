# configdb.cpp
## English
### Purpose
This file implements functionality related to: хранение настроек в базе sqlite.
Main functional areas: configuration management
### Key Classes
- `AsyncWorkItem`: Performs AsyncWorkItem operation in configdb.cpp
- `HierarchicalConfigDb`: Performs HierarchicalConfigDb operation in configdb.cpp
- `HistoryConfigCustom`: Performs HistoryConfigCustom operation in configdb.cpp
- `async_delete_impl`: If a thread with same event name is running, we will open that event here
- `iGeneralConfigDb`: Checks a condition in configdb.cpp and returns true or false based on the result
- `representation_destination`: Performs representation_destination operation in configdb.cpp
- `representation_source`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `sqlite_boilerplate`: Performs sqlite_boilerplate operation in configdb.cpp
### Key Functions
- `representation_source()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `Root()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `SetRoot()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `GetError()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `CreateChild()`: Creates and initializes a new object or resource in configdb.cpp
- `SetAttribute()`: Sets or updates Attribute value in configdb.cpp
- `Save()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `m_AsyncDone()`: If a thread with same event name is running,
- `finish()`: If a thread with same event name is running, we will open that event here
- `serialise_integer()`: Performs serialise_integer operation in configdb.cpp
### Summary
The `configdb.cpp` file provides essential functionality for configuration management. It defines 8 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: хранение настроек в базе sqlite.
Główne obszary funkcjonalne: zarządzanie konfiguracją
### Kluczowe Klasy
- `AsyncWorkItem`: Performs AsyncWorkItem operation in configdb.cpp
- `HierarchicalConfigDb`: Performs HierarchicalConfigDb operation in configdb.cpp
- `HistoryConfigCustom`: Performs HistoryConfigCustom operation in configdb.cpp
- `async_delete_impl`: If a thread with same event name is running, we will open that event here
- `iGeneralConfigDb`: Checks a condition in configdb.cpp and returns true or false based on the result
- `representation_destination`: Performs representation_destination operation in configdb.cpp
- `representation_source`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `sqlite_boilerplate`: Performs sqlite_boilerplate operation in configdb.cpp
### Kluczowe Funkcje
- `representation_source()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `Root()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `SetRoot()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `GetError()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `CreateChild()`: Creates and initializes a new object or resource in configdb.cpp
- `SetAttribute()`: Sets or updates Attribute value in configdb.cpp
- `Save()`: Validates a condition in configdb.cpp and throws an exception if the validation fails
- `m_AsyncDone()`: If a thread with same event name is running,
- `finish()`: If a thread with same event name is running, we will open that event here
- `serialise_integer()`: Performs serialise_integer operation in configdb.cpp
### Podsumowanie
Plik `configdb.cpp` zapewnia podstawową funkcjonalność dla zarządzanie konfiguracją. Definiuje 8 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
