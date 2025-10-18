# stddlg.hpp
## English
### Purpose
This file implements functionality related to: Куча разных стандартных диалогов
Main functional areas: dialog handling
### Key Classes
- `SearchReplaceDlgParams`: Implements SearchReplaceDlgParams functionality
- `SearchReplaceDlgResult`: Implements SearchReplaceDlgResult functionality
- `SharedGroup`: Implements SharedGroup functionality
- `dirinfo_progress`: Implements dirinfo_progress functionality
- `error_state_ex`: Implements error_state_ex functionality
- `goto_coord`: Implements goto_coord functionality
- `lng`: Implements lng functionality
- `operation`: true: success false: skip
- `progress_impl`: Implements progress_impl functionality
- `single_progress`: Implements single_progress functionality
### Key Functions
- `GetShared()`: Retrieves Shared from current context or object state
- `SaveToShared()`: Implements SaveToShared functionality
- `SetSearchPattern()`: Updates SearchPattern with provided value and validates constraints
- `IsSearchPatternEmpty()`: Checks condition and returns boolean indicating state
- `GetString()`: для диалога GetNameAndPassword() использовать последние введенные данные
- `GetNameAndPassword()`: для диалога GetNameAndPassword() использовать последние введенные данные
- `OperationFailed()`: true: success false: skip
- `cancel_operation()`: Validates conditions and throws exceptions when errors are detected during cancel_operation operation
- `ReCompileErrorMessage()`: true: success false: skip
- `GoToRowCol()`: Implements GoToRowCol functionality
### Summary
The `stddlg.hpp` file provides essential functionality for dialog handling. It defines 10 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Куча разных стандартных диалогов
Główne obszary funkcjonalne: obsługa dialogów
### Kluczowe Klasy
- `SearchReplaceDlgParams`: Implements SearchReplaceDlgParams functionality
- `SearchReplaceDlgResult`: Implements SearchReplaceDlgResult functionality
- `SharedGroup`: Implements SharedGroup functionality
- `dirinfo_progress`: Implements dirinfo_progress functionality
- `error_state_ex`: Implements error_state_ex functionality
- `goto_coord`: Implements goto_coord functionality
- `lng`: Implements lng functionality
- `operation`: true: success false: skip
- `progress_impl`: Implements progress_impl functionality
- `single_progress`: Implements single_progress functionality
### Kluczowe Funkcje
- `GetShared()`: Retrieves Shared from current context or object state
- `SaveToShared()`: Implements SaveToShared functionality
- `SetSearchPattern()`: Updates SearchPattern with provided value and validates constraints
- `IsSearchPatternEmpty()`: Checks condition and returns boolean indicating state
- `GetString()`: для диалога GetNameAndPassword() использовать последние введенные данные
- `GetNameAndPassword()`: для диалога GetNameAndPassword() использовать последние введенные данные
- `OperationFailed()`: true: success false: skip
- `cancel_operation()`: true: success false: skip
- `ReCompileErrorMessage()`: true: success false: skip
- `GoToRowCol()`: Implements GoToRowCol functionality
### Podsumowanie
Plik `stddlg.hpp` zapewnia podstawową funkcjonalność dla obsługa dialogów. Definiuje 10 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
