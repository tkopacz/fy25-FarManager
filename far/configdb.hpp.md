# configdb.hpp
## English
### Purpose
This file implements functionality related to: хранение настроек в базе sqlite.
Main functional areas: configuration management
### Key Classes
- `AssociationsConfig`: Implements AssociationsConfig functionality
- `ColorsConfig`: Implements ColorsConfig functionality
- `FarColor`: Implements FarColor functionality
- `GeneralConfig`: Implements GeneralConfig functionality
- `HierarchicalConfig`: Implements HierarchicalConfig functionality
- `HistoryConfig`: command,view,edit,folder,dialog history
- `PluginsCacheConfig`: Implements PluginsCacheConfig functionality
- `PluginsHotkeysConfig`: command,view,edit,folder,dialog history
- `VersionInfo`: Implements VersionInfo functionality
- `async_delete`: Implements async_delete functionality
### Key Functions
- `GetValue()`: Retrieves Value from current context or object state
- `ValuesEnumerator()`: Implements ValuesEnumerator functionality
- `get()`: Implements get functionality
- `bool()`: Implements bool functionality
- `KeysEnumerator()`: Implements KeysEnumerator functionality
- `EnumKeys()`: Implements EnumKeys functionality
- `EnumValues()`: Implements EnumValues functionality
- `ToSettingsType()`: Implements ToSettingsType functionality
- `MasksEnumerator()`: Implements MasksEnumerator functionality
- `EnumMasks()`: Implements EnumMasks functionality
### Namespaces
- `concurrency`
- `detail`
- `os`
### Summary
The `configdb.hpp` file provides essential functionality for configuration management. It defines 24 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: хранение настроек в базе sqlite.
Główne obszary funkcjonalne: zarządzanie konfiguracją
### Kluczowe Klasy
- `AssociationsConfig`: Implements AssociationsConfig functionality
- `ColorsConfig`: Implements ColorsConfig functionality
- `FarColor`: Implements FarColor functionality
- `GeneralConfig`: Implements GeneralConfig functionality
- `HierarchicalConfig`: Implements HierarchicalConfig functionality
- `HistoryConfig`: command,view,edit,folder,dialog history
- `PluginsCacheConfig`: Implements PluginsCacheConfig functionality
- `PluginsHotkeysConfig`: command,view,edit,folder,dialog history
- `VersionInfo`: Implements VersionInfo functionality
- `async_delete`: Implements async_delete functionality
### Kluczowe Funkcje
- `GetValue()`: Retrieves Value from current context or object state
- `ValuesEnumerator()`: Implements ValuesEnumerator functionality
- `get()`: Implements get functionality
- `bool()`: Implements bool functionality
- `KeysEnumerator()`: Implements KeysEnumerator functionality
- `EnumKeys()`: Implements EnumKeys functionality
- `EnumValues()`: Implements EnumValues functionality
- `ToSettingsType()`: Implements ToSettingsType functionality
- `MasksEnumerator()`: Implements MasksEnumerator functionality
- `EnumMasks()`: Implements EnumMasks functionality
### Przestrzenie nazw
- `concurrency`
- `detail`
- `os`
### Podsumowanie
Plik `configdb.hpp` zapewnia podstawową funkcjonalność dla zarządzanie konfiguracją. Definiuje 24 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
