# customact.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `Buffer`: Template class that manages a dynamically allocated array with automatic cleanup
- `ComInit`: RAII wrapper that calls CoInitialize on construction and CoUninitialize on destruction to manage COM library initialization
- `Error`: Structure that holds error information including code, message, file, and line number for exception handling
- `NonCopyable`: Base class that prevents copying by making copy constructor and assignment operator private
### Key Functions
- `DllMain()`: Stores the module handle when the DLL is loaded by the system for later use in finding resources
- `FAIL()`: Creates and throws an Error structure with a code to abort execution on failure conditions
- `FAIL_MSG()`: Creates and throws an Error structure with a custom message to abort execution with specific error details
- `CHECK_SYS()`: Verifies a Windows system call succeeded, throwing an error with the Win32 error code if it failed
- `CHECK_ADVSYS()`: Verifies a Windows advanced API call returned ERROR_SUCCESS, throwing an HRESULT error if it failed
- `CHECK_COM()`: Verifies a COM method call succeeded by checking the HRESULT, throwing an error if it failed
- `CHECK()`: Verifies a boolean condition is true, throwing an error with the condition text if it is false
- `resize()`: Reallocates the internal buffer to a new size, deleting the old buffer first
- `data()`: Returns a pointer to the internal buffer array for direct access
- `size()`: Returns the current size of the buffer in number of elements
### Namespaces
- `std`
### Summary
The `customact.cpp` file provides essential functionality for core functionality. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `Buffer`: Template class that manages a dynamically allocated array with automatic cleanup
- `ComInit`: RAII wrapper that calls CoInitialize on construction and CoUninitialize on destruction to manage COM library initialization
- `Error`: Structure that holds error information including code, message, file, and line number for exception handling
- `NonCopyable`: Base class that prevents copying by making copy constructor and assignment operator private
### Kluczowe Funkcje
- `DllMain()`: Stores the module handle when the DLL is loaded by the system for later use in finding resources
- `FAIL()`: Creates and throws an Error structure with a code to abort execution on failure conditions
- `FAIL_MSG()`: Creates and throws an Error structure with a custom message to abort execution with specific error details
- `CHECK_SYS()`: Verifies a Windows system call succeeded, throwing an error with the Win32 error code if it failed
- `CHECK_ADVSYS()`: Verifies a Windows advanced API call returned ERROR_SUCCESS, throwing an HRESULT error if it failed
- `CHECK_COM()`: Verifies a COM method call succeeded by checking the HRESULT, throwing an error if it failed
- `CHECK()`: Verifies a boolean condition is true, throwing an error with the condition text if it is false
- `resize()`: Reallocates the internal buffer to a new size, deleting the old buffer first
- `data()`: Returns a pointer to the internal buffer array for direct access
- `size()`: Returns the current size of the buffer in number of elements
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `customact.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
