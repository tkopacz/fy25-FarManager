# memcheck.cpp

## English

### Purpose
This file implements functionality for core functionality.

### Key Classes
- **`memory_block`**: Enumeration defining possible values for memory block
- **`blocks_list`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`checker`**: Implements checker functionality

### Key Functions
- **`format_type()`**: Executes format type operation
- **`printable_string()`**: Executes printable string operation
- **`printable_wide_string()`**: Executes printable wide string operation
- **`printable_ansi_string()`**: Executes printable ansi string operation
- **`poison_block()`**: Executes poison block operation
- **`unpoison_block()`**: Executes unpoison block operation
- **`NONCOPYABLE()`**: Executes noncopyable operation
- **`debug_allocator()`**: Executes debug allocator operation
- **`debug_deallocator()`**: Executes debug deallocator operation
- **`blocks_list::add()`**: Adds new element(s) to the collection

### Namespaces
- `memcheck`

### Summary
The `memcheck.cpp` file is essential for core functionality. It defines 3 class(es) and implements 10 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla podstawowej funkcjonalności.

### Kluczowe Klasy
- **`memory_block`**: Enumeration defining possible values for memory block
- **`blocks_list`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`checker`**: Implements checker functionality

### Kluczowe Funkcje
- **`format_type()`**: Executes format type operation
- **`printable_string()`**: Executes printable string operation
- **`printable_wide_string()`**: Executes printable wide string operation
- **`printable_ansi_string()`**: Executes printable ansi string operation
- **`poison_block()`**: Executes poison block operation
- **`unpoison_block()`**: Executes unpoison block operation
- **`NONCOPYABLE()`**: Executes noncopyable operation
- **`debug_allocator()`**: Executes debug allocator operation
- **`debug_deallocator()`**: Executes debug deallocator operation
- **`blocks_list::add()`**: Adds new element(s) to the collection

### Przestrzenie nazw
- `memcheck`

### Podsumowanie
Plik `memcheck.cpp` jest niezbędny dla podstawowej funkcjonalności. Definiuje 3 klas(y) i implementuje 10 funkcji wspierających operacje menedżera plików Far Manager.
