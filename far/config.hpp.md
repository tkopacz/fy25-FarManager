# config.hpp

## English

### Purpose
This file implements functionality for configuration management.

### Key Classes
- **`Option`**: Implements option functionality
- **`validator_tag`**: Implements validator tag functionality
- **`notifier_tag`**: Implements notifier tag functionality
- **`OptionImpl`**: Implements option impl functionality
- **`config_type`**: Enumeration defining possible values for config type
- **`SortingOptions`**: Implements sorting options functionality
- **`collation`**: Implements collation functionality
- **`PanelOptions`**: Enumeration defining possible values for panel options
- **`AutoCompleteOptions`**: Enumeration defining possible values for auto complete options
- **`PluginConfirmation`**: Implements plugin confirmation functionality
- **`Confirmation`**: Implements confirmation functionality
- **`DizOptions`**: Implements diz options functionality
- **`CodeXLAT`**: Implements code xlat functionality
- **`EditorOptions`**: Implements editor options functionality
- **`ViewerOptions`**: Implements viewer options functionality

### Key Functions
- **`GetFarIniString()`**: Retrieves the current far ini string value
- **`GetFarIniInt()`**: Retrieves the current far ini int value
- **`GetRedrawTimeout()`**: Retrieves the current redraw timeout value
- **`Option::toString()`**: Executes to string operation
- **`Option::TryParse()`**: Executes try parse operation
- **`Option::ExInfo()`**: Executes ex info operation
- **`Option::GetType()`**: Retrieves the current type value
- **`Option::IsDefault()`**: Checks whether default condition is true
- **`Option::SetDefault()`**: Updates the default with a new value
- **`Option::Edit()`**: Executes edit operation
- **`Option::Export()`**: Executes export operation
- **`Option::Changed()`**: Executes changed operation
- **`OptionImpl::SetCallback()`**: Updates the callback with a new value
- **`EditorOptions::ViewerConfig()`**: Executes viewer config operation
- **`ViewerOptions::ViewerConfig()`**: Executes viewer config operation
- **`DialogsOptions::списка()`**: Executes списка operation
- **`TreeOptions::defined()`**: Executes defined operation

### Namespaces
- `option`
- `detail`

### Summary
The `config.hpp` file is essential for configuration management. It defines 31 class(es) and implements 17 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla zarządzania konfiguracją.

### Kluczowe Klasy
- **`Option`**: Implements option functionality
- **`validator_tag`**: Implements validator tag functionality
- **`notifier_tag`**: Implements notifier tag functionality
- **`OptionImpl`**: Implements option impl functionality
- **`config_type`**: Enumeration defining possible values for config type
- **`SortingOptions`**: Implements sorting options functionality
- **`collation`**: Implements collation functionality
- **`PanelOptions`**: Enumeration defining possible values for panel options
- **`AutoCompleteOptions`**: Enumeration defining possible values for auto complete options
- **`PluginConfirmation`**: Implements plugin confirmation functionality
- **`Confirmation`**: Implements confirmation functionality
- **`DizOptions`**: Implements diz options functionality
- **`CodeXLAT`**: Implements code xlat functionality
- **`EditorOptions`**: Implements editor options functionality
- **`ViewerOptions`**: Implements viewer options functionality

### Kluczowe Funkcje
- **`GetFarIniString()`**: Retrieves the current far ini string value
- **`GetFarIniInt()`**: Retrieves the current far ini int value
- **`GetRedrawTimeout()`**: Retrieves the current redraw timeout value
- **`Option::toString()`**: Executes to string operation
- **`Option::TryParse()`**: Executes try parse operation
- **`Option::ExInfo()`**: Executes ex info operation
- **`Option::GetType()`**: Retrieves the current type value
- **`Option::IsDefault()`**: Checks whether default condition is true
- **`Option::SetDefault()`**: Updates the default with a new value
- **`Option::Edit()`**: Executes edit operation
- **`Option::Export()`**: Executes export operation
- **`Option::Changed()`**: Executes changed operation
- **`OptionImpl::SetCallback()`**: Updates the callback with a new value
- **`EditorOptions::ViewerConfig()`**: Executes viewer config operation
- **`ViewerOptions::ViewerConfig()`**: Executes viewer config operation
- **`DialogsOptions::списка()`**: Executes списка operation
- **`TreeOptions::defined()`**: Executes defined operation

### Przestrzenie nazw
- `option`
- `detail`

### Podsumowanie
Plik `config.hpp` jest niezbędny dla zarządzania konfiguracją. Definiuje 31 klas(y) i implementuje 17 funkcji wspierających operacje menedżera plików Far Manager.
