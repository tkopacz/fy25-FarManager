# customact.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `Buffer`: Implements Buffer functionality
- `ComInit`: wFillAttribute wPopupFillAttribute dwScreenBufferSize dwWindowSize dwWindowOrigin nFont nInputBufferSize dwFontSize uFo
- `Error`: Implements Error functionality
- `NonCopyable`: Implements NonCopyable functionality
### Key Functions
- `DllMain()`: DLL entry point that handles process and thread attach/detach notifications
- `FAIL()`: Throws error exception with error code when condition fails
- `FAIL_MSG()`: Throws error exception with custom message when condition fails
- `CHECK_SYS()`: Validates system call result and throws exception with Win32 error code on failure
- `CHECK_ADVSYS()`: Validates Windows advanced API call and throws exception with error code on failure
- `CHECK_COM()`: Validates COM HRESULT and throws exception on failure
- `CHECK()`: Validates boolean condition and throws exception with condition text on failure
- `resize()`: Resizes buffer by deallocating old memory and allocating new buffer with specified size
- `data()`: Returns pointer to internal buffer for direct access to stored data
- `size()`: Returns current allocated size of the buffer in elements
### Namespaces
- `std`
### Summary
The `customact.cpp` file provides essential functionality for core functionality. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `Buffer`: Implements Buffer functionality
- `ComInit`: wFillAttribute wPopupFillAttribute dwScreenBufferSize dwWindowSize dwWindowOrigin nFont nInputBufferSize dwFontSize uFo
- `Error`: Implements Error functionality
- `NonCopyable`: Implements NonCopyable functionality
### Kluczowe Funkcje
- `DllMain()`: DLL entry point that handles process and thread attach/detach notifications
- `FAIL()`: Throws error exception with error code when condition fails
- `FAIL_MSG()`: Throws error exception with custom message when condition fails
- `CHECK_SYS()`: Validates system call result and throws exception with Win32 error code on failure
- `CHECK_ADVSYS()`: Validates Windows advanced API call and throws exception with error code on failure
- `CHECK_COM()`: Validates COM HRESULT and throws exception on failure
- `CHECK()`: Validates boolean condition and throws exception with condition text on failure
- `resize()`: Resizes buffer by deallocating old memory and allocating new buffer with specified size
- `data()`: Returns pointer to internal buffer for direct access to stored data
- `size()`: Returns current allocated size of the buffer in elements
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `customact.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
