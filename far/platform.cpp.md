# platform.cpp

## English

### Purpose
This file implements functionality for platform-specific operations.

### Key Classes
- **`format_message_error_context`**: Error information container for format message error context failures
- **`language_item`**: Implements language item functionality
- **`layout_item`**: Implements layout item functionality

### Key Functions
- **`get_last_nt_status()`**: Retrieves the current last nt status value
- **`get_last_error()`**: Retrieves the current last error value
- **`set_last_nt_status()`**: Updates the last nt status with a new value
- **`set_last_error_from_ntstatus()`**: Updates the last error from ntstatus with a new value
- **`postprocess_error_string()`**: Executes postprocess error string operation
- **`errors_to_string_impl()`**: Executes errors to string impl operation
- **`format_error_impl()`**: Executes format error impl operation
- **`format_errno()`**: Executes format errno operation
- **`format_error()`**: Executes format error operation
- **`format_ntstatus()`**: Executes format ntstatus operation
- **`last_error()`**: Executes last error operation
- **`WNetGetConnection()`**: Executes wnet get connection operation
- **`get_locale_value()`**: Retrieves the current locale value value
- **`GetPrivateProfileString()`**: Retrieves the current private profile string value
- **`GetWindowText()`**: Retrieves text data from window text
- **`IsWow64Process()`**: Checks whether wow64process condition is true
- **`GetAppPathsRedirectionFlag()`**: Retrieves the current app paths redirection flag value
- **`GetDefaultPrinter()`**: Retrieves the current default printer value
- **`GetComputerName()`**: Retrieves the current computer name value
- **`GetComputerNameEx()`**: Retrieves the current computer name ex value

### Namespaces
- `os`
- `rtdl`

### Summary
The `platform.cpp` file is essential for platform-specific operations. It defines 3 class(es) and implements 36 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji specyficznych dla platformy.

### Kluczowe Klasy
- **`format_message_error_context`**: Error information container for format message error context failures
- **`language_item`**: Implements language item functionality
- **`layout_item`**: Implements layout item functionality

### Kluczowe Funkcje
- **`get_last_nt_status()`**: Retrieves the current last nt status value
- **`get_last_error()`**: Retrieves the current last error value
- **`set_last_nt_status()`**: Updates the last nt status with a new value
- **`set_last_error_from_ntstatus()`**: Updates the last error from ntstatus with a new value
- **`postprocess_error_string()`**: Executes postprocess error string operation
- **`errors_to_string_impl()`**: Executes errors to string impl operation
- **`format_error_impl()`**: Executes format error impl operation
- **`format_errno()`**: Executes format errno operation
- **`format_error()`**: Executes format error operation
- **`format_ntstatus()`**: Executes format ntstatus operation
- **`last_error()`**: Executes last error operation
- **`WNetGetConnection()`**: Executes wnet get connection operation
- **`get_locale_value()`**: Retrieves the current locale value value
- **`GetPrivateProfileString()`**: Retrieves the current private profile string value
- **`GetWindowText()`**: Retrieves text data from window text
- **`IsWow64Process()`**: Checks whether wow64process condition is true
- **`GetAppPathsRedirectionFlag()`**: Retrieves the current app paths redirection flag value
- **`GetDefaultPrinter()`**: Retrieves the current default printer value
- **`GetComputerName()`**: Retrieves the current computer name value
- **`GetComputerNameEx()`**: Retrieves the current computer name ex value

### Przestrzenie nazw
- `os`
- `rtdl`

### Podsumowanie
Plik `platform.cpp` jest niezbędny dla operacji specyficznych dla platformy. Definiuje 3 klas(y) i implementuje 36 funkcji wspierających operacje menedżera plików Far Manager.
