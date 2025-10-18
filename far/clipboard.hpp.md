# clipboard.hpp

## English

### Purpose
This file implements functionality for clipboard operations and data transfer.

### Key Classes
- **`clipboard_mode`**: Defines operational mode settings and behavior configuration
- **`default_clipboard_mode`**: Enumeration defining possible values for default clipboard mode
- **`clipboard`**: Enumeration defining possible values for clipboard
- **`clipboard_accessor`**: RAII accessor providing automatic resource management and scoped access to clipboard operations
- **`clipboard_restorer`**: Functor implementing custom deletion/restoration logic for automatic resource cleanup

### Key Functions
- **`SetClipboardText()`**: Stores text data to clipboard text
- **`SetClipboardVText()`**: Stores text data to clipboard vtext
- **`GetClipboardText()`**: Retrieves text data from clipboard text
- **`GetClipboardVText()`**: Retrieves text data from clipboard vtext
- **`ClearClipboard()`**: Clears all data from the system clipboard
- **`ClearInternalClipboard()`**: Clears the internal application clipboard buffer
- **`CopyData()`**: Copies data from source to destination clipboard
- **`OverrideClipboard()`**: Temporarily replaces default override clipboard behavior
- **`default_clipboard_mode::set()`**: Updates the  with a new value
- **`default_clipboard_mode::get()`**: Retrieves the current  value

### Summary
The `clipboard.hpp` file is essential for clipboard operations and data transfer. It defines 5 class(es) and implements 10 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji schowka i transferu danych.

### Kluczowe Klasy
- **`clipboard_mode`**: Defines operational mode settings and behavior configuration
- **`default_clipboard_mode`**: Enumeration defining possible values for default clipboard mode
- **`clipboard`**: Enumeration defining possible values for clipboard
- **`clipboard_accessor`**: RAII accessor providing automatic resource management and scoped access to clipboard operations
- **`clipboard_restorer`**: Functor implementing custom deletion/restoration logic for automatic resource cleanup

### Kluczowe Funkcje
- **`SetClipboardText()`**: Stores text data to clipboard text
- **`SetClipboardVText()`**: Stores text data to clipboard vtext
- **`GetClipboardText()`**: Retrieves text data from clipboard text
- **`GetClipboardVText()`**: Retrieves text data from clipboard vtext
- **`ClearClipboard()`**: Clears all data from the system clipboard
- **`ClearInternalClipboard()`**: Clears the internal application clipboard buffer
- **`CopyData()`**: Copies data from source to destination clipboard
- **`OverrideClipboard()`**: Temporarily replaces default override clipboard behavior
- **`default_clipboard_mode::set()`**: Updates the  with a new value
- **`default_clipboard_mode::get()`**: Retrieves the current  value

### Podsumowanie
Plik `clipboard.hpp` jest niezbędny dla operacji schowka i transferu danych. Definiuje 5 klas(y) i implementuje 10 funkcji wspierających operacje menedżera plików Far Manager.
