# handles.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `PROCLIST_SYSTEM_HANDLE_INFORMATION`: Implements PROCLIST_SYSTEM_HANDLE_INFORMATION functionality
- `SYSTEM_HANDLE_TABLE_ENTRY_INFO`: Implements SYSTEM_HANDLE_TABLE_ENTRY_INFO functionality
- `THREAD_BASIC_INFORMATION`: Implements THREAD_BASIC_INFORMATION functionality
- `test`: Implements test functionality
### Key Functions
- `GetProcessId()`: Retrieves ProcessId from current context or object state
- `GetThreadId()`: Retrieves ThreadId from current context or object state
- `to_string()`: Implements to_string functionality
- `GetFileName()`: Check if it's possible to get the file name info
- `GetFileNameThread()`: Check if it's possible to get the file name info Wait for finishing the thread
- `GetTypeToken()`: Retrieves TypeToken from current context or object state
- `GetTypeFromTypeToken()`: L"Port", L"OB_TYPE_WAITABLE_PORT", L"Adapter", L"Controller", L"Device", L"Driver", L"IoCompletion", L"WmiGuid",
- `GetUserAccountID()`: Retrieves UserAccountID from current context or object state
- `GetNameByType()`: Processes input by dispatching to different code paths based on type or value
- `l()`: Processes input by dispatching to different code paths based on type or value
### Namespaces
- `std`
### Summary
The `handles.cpp` file provides essential functionality for core functionality. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `PROCLIST_SYSTEM_HANDLE_INFORMATION`: Implements PROCLIST_SYSTEM_HANDLE_INFORMATION functionality
- `SYSTEM_HANDLE_TABLE_ENTRY_INFO`: Implements SYSTEM_HANDLE_TABLE_ENTRY_INFO functionality
- `THREAD_BASIC_INFORMATION`: Implements THREAD_BASIC_INFORMATION functionality
- `test`: Implements test functionality
### Kluczowe Funkcje
- `GetProcessId()`: Retrieves ProcessId from current context or object state
- `GetThreadId()`: Retrieves ThreadId from current context or object state
- `to_string()`: Implements to_string functionality
- `GetFileName()`: Check if it's possible to get the file name info
- `GetFileNameThread()`: Check if it's possible to get the file name info Wait for finishing the thread
- `GetTypeToken()`: Retrieves TypeToken from current context or object state
- `GetTypeFromTypeToken()`: L"Port", L"OB_TYPE_WAITABLE_PORT", L"Adapter", L"Controller", L"Device", L"Driver", L"IoCompletion", L"WmiGuid",
- `GetUserAccountID()`: Retrieves UserAccountID from current context or object state
- `GetNameByType()`: Processes input by dispatching to different code paths based on type or value
- `l()`: Processes input by dispatching to different code paths based on type or value
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `handles.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
