# customact.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `Buffer`: Allocates memory and initializes resources for Buffer
- `ComInit`: Manages COM (Component Object Model) initialization and interface operations
- `Error`: Performs Error operation as part of the component's functionality
- `NonCopyable`: Performs NonCopyable operation as part of the component's functionality
### Key Functions
- `DllMain()`: Evaluates conditions and returns a boolean indicating success or validity of DllMain
- `FAIL()`: Validates conditions and throws exceptions when errors are detected during FAIL operation
- `FAIL_MSG()`: Validates conditions and throws exceptions when errors are detected during FAIL_MSG operation
- `CHECK_SYS()`: Validates data integrity and checks correctness of input
- `CHECK_ADVSYS()`: Validates data integrity and checks correctness of input
- `CHECK_COM()`: Validates data integrity and checks correctness of input
- `CHECK()`: Validates data integrity and checks correctness of input
- `resize()`: Allocates memory and initializes resources for resize
- `data()`: Returns pointer or reference to internal data buffer
- `size()`: Performs size operation as part of the component's functionality
### Namespaces
- `std`
### Summary
The `customact.cpp` file provides essential functionality for core functionality. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `Buffer`: Allocates memory and initializes resources for Buffer
- `ComInit`: Manages COM (Component Object Model) initialization and interface operations
- `Error`: Performs Error operation as part of the component's functionality
- `NonCopyable`: Performs NonCopyable operation as part of the component's functionality
### Kluczowe Funkcje
- `DllMain()`: Evaluates conditions and returns a boolean indicating success or validity of DllMain
- `FAIL()`: Validates conditions and throws exceptions when errors are detected during FAIL operation
- `FAIL_MSG()`: Validates conditions and throws exceptions when errors are detected during FAIL_MSG operation
- `CHECK_SYS()`: Waliduje integralność danych i sprawdza poprawność
- `CHECK_ADVSYS()`: Waliduje integralność danych i sprawdza poprawność
- `CHECK_COM()`: Waliduje integralność danych i sprawdza poprawność
- `CHECK()`: Waliduje integralność danych i sprawdza poprawność
- `resize()`: Zmienia wymiary rozmiaru zachowując zawartość gdy to możliwe
- `data()`: Konstruktor inicjalizujący dane obiekt z dostarczonymi parametrami
- `size()`: Performs size operation as part of the component's functionality
### Przestrzenie nazw
- `std`
### Podsumowanie
Plik `customact.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
