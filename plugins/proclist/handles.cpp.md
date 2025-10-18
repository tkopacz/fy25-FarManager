# handles.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `PROCLIST_SYSTEM_HANDLE_INFORMATION`: Performs PROCLIST_SYSTEM_HANDLE_INFORMATION operation in handles.cpp
- `SYSTEM_HANDLE_TABLE_ENTRY_INFO`: Performs SYSTEM_HANDLE_TABLE_ENTRY_INFO operation in handles.cpp
- `THREAD_BASIC_INFORMATION`: Performs THREAD_BASIC_INFORMATION operation in handles.cpp
- `test`: Performs test operation in handles.cpp
### Key Functions
- `GetProcessId()`: NOT constexpr: such casts are technically UB and not available in constexpr context
- `GetThreadId()`: NOT constexpr: such casts are technically UB and not available in constexpr context
- `to_string()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetFileName()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetFileNameThread()`: Check if it's possible to get the file name info
- `GetTypeToken()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetTypeFromTypeToken()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetUserAccountID()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetNameByType()`: Checks a condition in handles.cpp and returns true or false based on the result
- `l()`: Checks a condition in handles.cpp and returns true or false based on the result
### Namespaces
- `std`
### Summary
The `handles.cpp` file provides essential functionality for core functionality. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `PROCLIST_SYSTEM_HANDLE_INFORMATION`: Performs PROCLIST_SYSTEM_HANDLE_INFORMATION operation in handles.cpp
- `SYSTEM_HANDLE_TABLE_ENTRY_INFO`: Performs SYSTEM_HANDLE_TABLE_ENTRY_INFO operation in handles.cpp
- `THREAD_BASIC_INFORMATION`: Performs THREAD_BASIC_INFORMATION operation in handles.cpp
- `test`: Performs test operation in handles.cpp
### Kluczowe Funkcje
- `GetProcessId()`: NOT constexpr: such casts are technically UB and not available in constexpr context
- `GetThreadId()`: NOT constexpr: such casts are technically UB and not available in constexpr context
- `to_string()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetFileName()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetFileNameThread()`: Check if it's possible to get the file name info
- `GetTypeToken()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetTypeFromTypeToken()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetUserAccountID()`: Checks a condition in handles.cpp and returns true or false based on the result
- `GetNameByType()`: Checks a condition in handles.cpp and returns true or false based on the result
- `l()`: Checks a condition in handles.cpp and returns true or false based on the result
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `handles.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
