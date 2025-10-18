# console.cpp

## English

### Purpose
This file implements functionality for console I/O operations.

### Key Classes
- **`external_console`**: Implements external console functionality
- **`ModuleImports`**: Implements module imports functionality
- **`stream_buffer_overrider`**: Manages memory buffer with automatic allocation and deallocation
- **`hide_cursor`**: Implements hide cursor functionality
- **`scoped_vt_output`**: Implements scoped vt output functionality
- **`colors_mapping_type`**: Implements colors mapping type functionality
- **`expanded_state`**: Implements expanded state functionality
- **`foreign_blocks_list`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Key Functions
- **`ReplaceControlCharacter()`**: Executes replace control character operation
- **`sanitise_dbsc_pair()`**: Executes sanitise dbsc pair operation
- **`sanitise_surrogate_pair()`**: Executes sanitise surrogate pair operation
- **`sanitise_pair()`**: Executes sanitise pair operation
- **`get_console_screen_buffer_info()`**: Retrieves the current console screen buffer info value
- **`make_coord()`**: Executes make coord operation
- **`make_rect()`**: Executes make rect operation
- **`GetDelta()`**: Retrieves the current delta value
- **`expanded_state::ForegroundColor()`**: Executes foreground color operation
- **`expanded_state::0()`**: Executes 0 operation
- **`foreign_blocks_list::queue()`**: Executes queue operation

### Namespaces
- `console_detail`

### Summary
The `console.cpp` file is essential for console I/O operations. It defines 8 class(es) and implements 11 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji wejścia/wyjścia konsoli.

### Kluczowe Klasy
- **`external_console`**: Implements external console functionality
- **`ModuleImports`**: Implements module imports functionality
- **`stream_buffer_overrider`**: Manages memory buffer with automatic allocation and deallocation
- **`hide_cursor`**: Implements hide cursor functionality
- **`scoped_vt_output`**: Implements scoped vt output functionality
- **`colors_mapping_type`**: Implements colors mapping type functionality
- **`expanded_state`**: Implements expanded state functionality
- **`foreign_blocks_list`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Kluczowe Funkcje
- **`ReplaceControlCharacter()`**: Executes replace control character operation
- **`sanitise_dbsc_pair()`**: Executes sanitise dbsc pair operation
- **`sanitise_surrogate_pair()`**: Executes sanitise surrogate pair operation
- **`sanitise_pair()`**: Executes sanitise pair operation
- **`get_console_screen_buffer_info()`**: Retrieves the current console screen buffer info value
- **`make_coord()`**: Executes make coord operation
- **`make_rect()`**: Executes make rect operation
- **`GetDelta()`**: Retrieves the current delta value
- **`expanded_state::ForegroundColor()`**: Executes foreground color operation
- **`expanded_state::0()`**: Executes 0 operation
- **`foreign_blocks_list::queue()`**: Executes queue operation

### Przestrzenie nazw
- `console_detail`

### Podsumowanie
Plik `console.cpp` jest niezbędny dla operacji wejścia/wyjścia konsoli. Definiuje 8 klas(y) i implementuje 11 funkcji wspierających operacje menedżera plików Far Manager.
