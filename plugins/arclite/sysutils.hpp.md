# sysutils.hpp

## English

### Purpose
This file implements functionality for core functionality.

### Key Classes
- **`CriticalSection`**: Implements critical section functionality
- **`CriticalSectionLock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`FindData`**: Implements find data functionality
- **`File`**: Resource manager with explicit lifecycle control for file/stream operations
- **`Key`**: Resource manager providing controlled initialization and cleanup through open/close operations
- **`FileEnum`**: Implements file enum functionality
- **`DirList`**: Container class managing collection of dir
- **`TempFile`**: Implements temp file functionality
- **`DisableSleepMode`**: Defines operational mode settings and behavior configuration
- **`Patch7zCP`**: Implements patch7z cp functionality

### Key Functions
- **`get_system_message()`**: Retrieves the current system message value
- **`get_console_title()`**: Retrieves the current console title value
- **`wait_for_single_object()`**: Executes wait for single object operation
- **`ansi_to_unicode()`**: Executes ansi to unicode operation
- **`unicode_to_ansi()`**: Executes unicode to ansi operation
- **`expand_env_vars()`**: Executes expand env vars operation
- **`get_full_path_name()`**: Retrieves the current full path name value
- **`get_current_directory()`**: Retrieves the current current directory value
- **`GetSync()`**: Retrieves the current sync value
- **`GetExportSync()`**: Retrieves the current export sync value
- **`get_temp_path()`**: Retrieves the current temp path value
- **`format_file_time()`**: Executes format file time operation
- **`upcase()`**: Executes upcase operation
- **`create_guid()`**: Constructs and returns a new guid object
- **`enable_lfh()`**: Executes enable lfh operation
- **`search_path()`**: Executes search path operation
- **`DisableSleepMode()`**: Executes disable sleep mode operation
- **`get_posix_and_nt_attributes()`**: Retrieves the current posix and nt attributes value
- **`FindData::is_dir()`**: Checks whether dir condition is true
- **`File::open()`**: Opens and initializes the resource for subsequent operations

### Summary
The `sysutils.hpp` file is essential for core functionality. It defines 10 class(es) and implements 28 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla podstawowej funkcjonalności.

### Kluczowe Klasy
- **`CriticalSection`**: Implements critical section functionality
- **`CriticalSectionLock`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`FindData`**: Implements find data functionality
- **`File`**: Resource manager with explicit lifecycle control for file/stream operations
- **`Key`**: Resource manager providing controlled initialization and cleanup through open/close operations
- **`FileEnum`**: Implements file enum functionality
- **`DirList`**: Container class managing collection of dir
- **`TempFile`**: Implements temp file functionality
- **`DisableSleepMode`**: Defines operational mode settings and behavior configuration
- **`Patch7zCP`**: Implements patch7z cp functionality

### Kluczowe Funkcje
- **`get_system_message()`**: Retrieves the current system message value
- **`get_console_title()`**: Retrieves the current console title value
- **`wait_for_single_object()`**: Executes wait for single object operation
- **`ansi_to_unicode()`**: Executes ansi to unicode operation
- **`unicode_to_ansi()`**: Executes unicode to ansi operation
- **`expand_env_vars()`**: Executes expand env vars operation
- **`get_full_path_name()`**: Retrieves the current full path name value
- **`get_current_directory()`**: Retrieves the current current directory value
- **`GetSync()`**: Retrieves the current sync value
- **`GetExportSync()`**: Retrieves the current export sync value
- **`get_temp_path()`**: Retrieves the current temp path value
- **`format_file_time()`**: Executes format file time operation
- **`upcase()`**: Executes upcase operation
- **`create_guid()`**: Constructs and returns a new guid object
- **`enable_lfh()`**: Executes enable lfh operation
- **`search_path()`**: Executes search path operation
- **`DisableSleepMode()`**: Executes disable sleep mode operation
- **`get_posix_and_nt_attributes()`**: Retrieves the current posix and nt attributes value
- **`FindData::is_dir()`**: Checks whether dir condition is true
- **`File::open()`**: Opens and initializes the resource for subsequent operations

### Podsumowanie
Plik `sysutils.hpp` jest niezbędny dla podstawowej funkcjonalności. Definiuje 10 klas(y) i implementuje 28 funkcji wspierających operacje menedżera plików Far Manager.
