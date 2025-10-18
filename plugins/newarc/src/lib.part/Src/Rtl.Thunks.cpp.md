# Rtl.Thunks.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Functions
- `ReleaseThunkEx()`: pop edx - pop ret addr mov ecx instance
- `CreateThunk()`: push ecx - push instance push edx - push ret address back
- `ReleaseThunk()`: all ecx!! pop ebx mov [???], ebx mov ebx, ??? push ebx mov ebx, ???? call ebx add esp, 4 mov ebx, [???] push ebx
- `ReleaseThunkCdecl()`: Iterates through collection and processes each element, storing results
### Summary
The `Rtl.Thunks.cpp` file provides essential functionality for core functionality. and contains approximately 4 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `ReleaseThunkEx()`: pop edx - pop ret addr mov ecx instance
- `CreateThunk()`: push ecx - push instance push edx - push ret address back
- `ReleaseThunk()`: all ecx!! pop ebx mov [???], ebx mov ebx, ??? push ebx mov ebx, ???? call ebx add esp, 4 mov ebx, [???] push ebx
- `ReleaseThunkCdecl()`: Iterates through collection and processes each element, storing results
### Podsumowanie
Plik `Rtl.Thunks.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 4 funkcji wspierających operacje menedżera plików Far Manager.
