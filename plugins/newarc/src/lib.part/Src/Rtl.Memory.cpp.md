# Rtl.Memory.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Functions
- `HeapAlloc()`: Implements HeapAlloc functionality
- `HeapReAlloc()`: Implements HeapReAlloc functionality
- `free()`: Implements free functionality
- `new()`: Implements new functionality
- `malloc()`: Implements malloc functionality
- `delete()`: Removes or deletes specified item and releases associated resources
- `__cxa_pure_virtual()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
- `RtlFreeMemory()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
- `realloc()`: Implements realloc functionality
- `RtlAllocateMemory()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
### Summary
The `Rtl.Memory.cpp` file provides essential functionality for core functionality. and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `HeapAlloc()`: Implements HeapAlloc functionality
- `HeapReAlloc()`: Implements HeapReAlloc functionality
- `free()`: Implements free functionality
- `new()`: Implements new functionality
- `malloc()`: Implements malloc functionality
- `delete()`: Removes or deletes specified item and releases associated resources
- `__cxa_pure_virtual()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
- `RtlFreeMemory()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
- `realloc()`: Implements realloc functionality
- `RtlAllocateMemory()`: void * operator new(size_t size) { return RtlAllocateMemory (size); } void operator delete(void *block) { RtlFreeMemory (block); }
### Podsumowanie
Plik `Rtl.Memory.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
