# filelist.hpp

## English

### Purpose
This file implements functionality for file operations.

### Key Classes
- **`FileListItem`**: Container class managing collection of file item
- **`values`**: Implements values functionality
- **`private_tag`**: Enumeration defining possible values for private tag
- **`list_data`**: Container class managing collection of data
- **`list_data_lock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`data_lock_ptr`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Key Functions
- **`NONCOPYABLE()`**: Executes noncopyable operation
- **`FileListItem::AllocationSize()`**: Executes allocation size operation
- **`FileListItem::IsNumberOfLinksRead()`**: Checks whether number of links read condition is true
- **`FileListItem::NumberOfLinks()`**: Executes number of links operation
- **`FileListItem::IsNumberOfStreamsRead()`**: Checks whether number of streams read condition is true
- **`FileListItem::NumberOfStreams()`**: Executes number of streams operation
- **`FileListItem::IsStreamsSizeRead()`**: Checks whether streams size read condition is true
- **`FileListItem::StreamsSize()`**: Executes streams size operation
- **`FileListItem::IsOwnerRead()`**: Checks whether owner read condition is true
- **`FileListItem::Owner()`**: Executes owner operation
- **`FileListItem::IsContentDataRead()`**: Checks whether content data read condition is true
- **`FileListItem::ContentData()`**: Executes content data operation
- **`FileListItem::AlternateOrNormal()`**: Executes alternate or normal operation
- **`values::uninitialised()`**: Executes uninitialised operation
- **`list_data_lock::get()`**: Retrieves the current  value

### Namespaces
- `highlight`

### Summary
The `filelist.hpp` file is essential for file operations. It defines 6 class(es) and implements 15 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji na plikach.

### Kluczowe Klasy
- **`FileListItem`**: Container class managing collection of file item
- **`values`**: Implements values functionality
- **`private_tag`**: Enumeration defining possible values for private tag
- **`list_data`**: Container class managing collection of data
- **`list_data_lock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`data_lock_ptr`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit

### Kluczowe Funkcje
- **`NONCOPYABLE()`**: Executes noncopyable operation
- **`FileListItem::AllocationSize()`**: Executes allocation size operation
- **`FileListItem::IsNumberOfLinksRead()`**: Checks whether number of links read condition is true
- **`FileListItem::NumberOfLinks()`**: Executes number of links operation
- **`FileListItem::IsNumberOfStreamsRead()`**: Checks whether number of streams read condition is true
- **`FileListItem::NumberOfStreams()`**: Executes number of streams operation
- **`FileListItem::IsStreamsSizeRead()`**: Checks whether streams size read condition is true
- **`FileListItem::StreamsSize()`**: Executes streams size operation
- **`FileListItem::IsOwnerRead()`**: Checks whether owner read condition is true
- **`FileListItem::Owner()`**: Executes owner operation
- **`FileListItem::IsContentDataRead()`**: Checks whether content data read condition is true
- **`FileListItem::ContentData()`**: Executes content data operation
- **`FileListItem::AlternateOrNormal()`**: Executes alternate or normal operation
- **`values::uninitialised()`**: Executes uninitialised operation
- **`list_data_lock::get()`**: Retrieves the current  value

### Przestrzenie nazw
- `highlight`

### Podsumowanie
Plik `filelist.hpp` jest niezbędny dla operacji na plikach. Definiuje 6 klas(y) i implementuje 15 funkcji wspierających operacje menedżera plików Far Manager.
