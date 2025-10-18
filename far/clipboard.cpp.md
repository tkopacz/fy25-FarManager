# clipboard.cpp

## English

### Purpose
This file implements functionality for clipboard operations and data transfer.

### Key Classes
- **`clipboard_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Key Functions
- **`OverrideClipboard()`**: Temporarily replaces default override clipboard behavior
- **`SetClipboardText()`**: Stores text data to clipboard text
- **`SetClipboardVText()`**: Stores text data to clipboard vtext
- **`GetClipboardText()`**: Retrieves text data from clipboard text
- **`GetClipboardVText()`**: Retrieves text data from clipboard vtext
- **`ClearClipboard()`**: Clears all data from the system clipboard
- **`ClearInternalClipboard()`**: Clears the internal application clipboard buffer
- **`CopyData()`**: Copies data from source to destination clipboard
- **`clipboard_guard::Clip()`**: Executes clip operation

### Summary
The `clipboard.cpp` file is essential for clipboard operations and data transfer. It defines 1 class(es) and implements 9 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji schowka i transferu danych.

### Kluczowe Klasy
- **`clipboard_guard`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Kluczowe Funkcje
- **`OverrideClipboard()`**: Temporarily replaces default override clipboard behavior
- **`SetClipboardText()`**: Stores text data to clipboard text
- **`SetClipboardVText()`**: Stores text data to clipboard vtext
- **`GetClipboardText()`**: Retrieves text data from clipboard text
- **`GetClipboardVText()`**: Retrieves text data from clipboard vtext
- **`ClearClipboard()`**: Clears all data from the system clipboard
- **`ClearInternalClipboard()`**: Clears the internal application clipboard buffer
- **`CopyData()`**: Copies data from source to destination clipboard
- **`clipboard_guard::Clip()`**: Executes clip operation

### Podsumowanie
Plik `clipboard.cpp` jest niezbędny dla operacji schowka i transferu danych. Definiuje 1 klas(y) i implementuje 9 funkcji wspierających operacje menedżera plików Far Manager.
