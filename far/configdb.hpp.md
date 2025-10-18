# configdb.hpp

## English

### Purpose
This file implements functionality for configuration management.

### Key Classes
- **`GeneralConfig`**: Stores and manages configuration parameters and settings
- **`async_delete`**: Implements async delete functionality
- **`HierarchicalConfig`**: Stores and manages configuration parameters and settings
- **`key`**: Simple data holder with getter/setter accessors
- **`async_deleter`**: Implements async deleter functionality
- **`ColorsConfig`**: Stores and manages configuration parameters and settings
- **`AssociationsConfig`**: Stores and manages configuration parameters and settings
- **`PluginsCacheConfig`**: Stores and manages configuration parameters and settings
- **`PluginsHotkeysConfig`**: Enumeration defining possible values for plugins hotkeys config
- **`HistoryConfig`**: Stores and manages configuration parameters and settings
- **`enum_data`**: Implements enum data functionality
- **`mode`**: Enumeration defining possible values for mode
- **`clear_cache`**: Enumeration defining possible values for clear cache
- **`async_key`**: Enumeration defining possible values for async key
- **`implementation`**: Implements implementation functionality

### Key Functions
- **`GeneralConfig()`**: Executes general config operation
- **`HierarchicalConfig()`**: Executes hierarchical config operation
- **`AssociationsConfig()`**: Executes associations config operation
- **`HistoryConfig()`**: Executes history config operation
- **`ConfigProvider()`**: Executes config provider operation
- **`deserialize_color()`**: Executes deserialize color operation
- **`GeneralConfig::SetValue()`**: Updates the value with a new value
- **`GeneralConfig::GetValue()`**: Retrieves the current value value
- **`async_delete::finish()`**: Executes finish operation
- **`HierarchicalConfig::key()`**: Executes key operation
- **`ColorsConfig::SetValue()`**: Updates the value with a new value
- **`ColorsConfig::GetValue()`**: Retrieves the current value value
- **`AssociationsConfig::GetMask()`**: Retrieves the current mask value
- **`AssociationsConfig::GetDescription()`**: Retrieves the current description value
- **`AssociationsConfig::GetCommand()`**: Retrieves the current command value
- **`AssociationsConfig::SetCommand()`**: Updates the command with a new value
- **`AssociationsConfig::SwapPositions()`**: Executes swap positions operation
- **`AssociationsConfig::AddType()`**: Executes add type operation
- **`AssociationsConfig::UpdateType()`**: Executes update type operation
- **`AssociationsConfig::DelType()`**: Executes del type operation

### Namespaces
- `os`
- `detail`

### Summary
The `configdb.hpp` file is essential for configuration management. It defines 15 class(es) and implements 84 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla zarządzania konfiguracją.

### Kluczowe Klasy
- **`GeneralConfig`**: Stores and manages configuration parameters and settings
- **`async_delete`**: Implements async delete functionality
- **`HierarchicalConfig`**: Stores and manages configuration parameters and settings
- **`key`**: Simple data holder with getter/setter accessors
- **`async_deleter`**: Implements async deleter functionality
- **`ColorsConfig`**: Stores and manages configuration parameters and settings
- **`AssociationsConfig`**: Stores and manages configuration parameters and settings
- **`PluginsCacheConfig`**: Stores and manages configuration parameters and settings
- **`PluginsHotkeysConfig`**: Enumeration defining possible values for plugins hotkeys config
- **`HistoryConfig`**: Stores and manages configuration parameters and settings
- **`enum_data`**: Implements enum data functionality
- **`mode`**: Enumeration defining possible values for mode
- **`clear_cache`**: Enumeration defining possible values for clear cache
- **`async_key`**: Enumeration defining possible values for async key
- **`implementation`**: Implements implementation functionality

### Kluczowe Funkcje
- **`GeneralConfig()`**: Executes general config operation
- **`HierarchicalConfig()`**: Executes hierarchical config operation
- **`AssociationsConfig()`**: Executes associations config operation
- **`HistoryConfig()`**: Executes history config operation
- **`ConfigProvider()`**: Executes config provider operation
- **`deserialize_color()`**: Executes deserialize color operation
- **`GeneralConfig::SetValue()`**: Updates the value with a new value
- **`GeneralConfig::GetValue()`**: Retrieves the current value value
- **`async_delete::finish()`**: Executes finish operation
- **`HierarchicalConfig::key()`**: Executes key operation
- **`ColorsConfig::SetValue()`**: Updates the value with a new value
- **`ColorsConfig::GetValue()`**: Retrieves the current value value
- **`AssociationsConfig::GetMask()`**: Retrieves the current mask value
- **`AssociationsConfig::GetDescription()`**: Retrieves the current description value
- **`AssociationsConfig::GetCommand()`**: Retrieves the current command value
- **`AssociationsConfig::SetCommand()`**: Updates the command with a new value
- **`AssociationsConfig::SwapPositions()`**: Executes swap positions operation
- **`AssociationsConfig::AddType()`**: Executes add type operation
- **`AssociationsConfig::UpdateType()`**: Executes update type operation
- **`AssociationsConfig::DelType()`**: Executes del type operation

### Przestrzenie nazw
- `os`
- `detail`

### Podsumowanie
Plik `configdb.hpp` jest niezbędny dla zarządzania konfiguracją. Definiuje 15 klas(y) i implementuje 84 funkcji wspierających operacje menedżera plików Far Manager.
