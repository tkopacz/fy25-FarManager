# copy.cpp
## English
### Purpose
This file implements functionality related to: Копирование файлов
Main functional areas: core functionality
### Key Classes
- `ShellCopy`: Implements ShellCopy functionality
- `created_folders`: Creates and initializes new object or resource instance
- `file_names_for_overwrite_dialog`: Implements file_names_for_overwrite_dialog functionality
- `overwrite`: Implements overwrite functionality
- `security`: Processes input by dispatching to different code paths based on type or value
- `total_info`: Implements total_info functionality
### Key Functions
- `copy_selected_items()`: called by ShellCopy called by copy_selected_items 4 times called by ShellCopyOneFile called by ShellCopyFile
- `ShellCopyOneFile()`: called by ShellCopy called by copy_selected_items 4 times called by ShellCopyOneFile called by ShellCopyFile called by ShellCopyOneFile
- `CheckStreams()`: Implements CheckStreams functionality
- `ShellCopyFile()`: Implements ShellCopyFile functionality
- `ShellSystemCopy()`: Implements ShellSystemCopy functionality
- `DeleteAfterMove()`: Removes or deletes specified item and releases associated resources
- `AskOverwrite()`: Implements AskOverwrite functionality
- `GetSecurity()`: Retrieves Security from current context or object state
- `SetSecurity()`: Updates Security with provided value and validates constraints
- `ResetSecurity()`: Implements ResetSecurity functionality
### Summary
The `copy.cpp` file provides essential functionality for core functionality. It defines 6 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Копирование файлов
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `ShellCopy`: Implements ShellCopy functionality
- `created_folders`: Creates and initializes new object or resource instance
- `file_names_for_overwrite_dialog`: Implements file_names_for_overwrite_dialog functionality
- `overwrite`: Implements overwrite functionality
- `security`: Processes input by dispatching to different code paths based on type or value
- `total_info`: Implements total_info functionality
### Kluczowe Funkcje
- `copy_selected_items()`: called by ShellCopy called by copy_selected_items 4 times called by ShellCopyOneFile called by ShellCopyFile
- `ShellCopyOneFile()`: called by ShellCopy called by copy_selected_items 4 times called by ShellCopyOneFile called by ShellCopyFile called by ShellCopyOneFile
- `CheckStreams()`: Implements CheckStreams functionality
- `ShellCopyFile()`: Implements ShellCopyFile functionality
- `ShellSystemCopy()`: Implements ShellSystemCopy functionality
- `DeleteAfterMove()`: Removes or deletes specified item and releases associated resources
- `AskOverwrite()`: Implements AskOverwrite functionality
- `GetSecurity()`: Retrieves Security from current context or object state
- `SetSecurity()`: Updates Security with provided value and validates constraints
- `ResetSecurity()`: Implements ResetSecurity functionality
### Podsumowanie
Plik `copy.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 6 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
