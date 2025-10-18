# Rtl.Thunks.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Functions
- `CreateThunkEx()`: Iterates through collection and processes each element, storing results
- `CreateThunkFastEx()`: pop edx - pop ret addr
- `ReleaseThunkEx()`: pop edx - pop ret addr mov ecx instance
- `CreateThunk()`: push ecx - push instance push edx - push ret address back
- `ReleaseThunk()`: mov eax, instance mov eax, calladdr
- `CreateThunkRegister()`: push eax mov eax, instance push eax push ecx mov eax, calladdr jmp eax all ecx!! pop ebx mov [???], ebx mov ebx, ??? push ebx mov ebx, ????
- `CreateThunkCdecl()`: mov ebx, ???? mov ebx, [???]
- `ReleaseThunkCdecl()`: Iterates through collection and processes each element, storing results
### Summary
The `Rtl.Thunks.cpp` file provides essential functionality for core functionality. and contains approximately 8 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `CreateThunkEx()`: Iterates through collection and processes each element, storing results
- `CreateThunkFastEx()`: pop edx - pop ret addr
- `ReleaseThunkEx()`: pop edx - pop ret addr mov ecx instance
- `CreateThunk()`: push ecx - push instance push edx - push ret address back
- `ReleaseThunk()`: mov eax, instance mov eax, calladdr
- `CreateThunkRegister()`: push eax mov eax, instance push eax push ecx mov eax, calladdr jmp eax all ecx!! pop ebx mov [???], ebx mov ebx, ??? push ebx mov ebx, ????
- `CreateThunkCdecl()`: mov ebx, ???? mov ebx, [???]
- `ReleaseThunkCdecl()`: Iterates through collection and processes each element, storing results
### Podsumowanie
Plik `Rtl.Thunks.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 8 funkcji wspierających operacje menedżera plików Far Manager.
