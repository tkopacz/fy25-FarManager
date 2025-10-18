# configdb.hpp
## English
### Purpose
This file implements functionality related to: хранение настроек в базе sqlite.
Main functional areas: configuration management
### Key Classes
- `AssociationsConfig`: Performs AssociationsConfig operation as part of the component's functionality
- `ColorsConfig`: Performs ColorsConfig operation as part of the component's functionality
- `FarColor`: Performs FarColor operation as part of the component's functionality
- `GeneralConfig`: Performs GeneralConfig operation as part of the component's functionality
- `HierarchicalConfig`: Performs HierarchicalConfig operation as part of the component's functionality
- `HistoryConfig`: Performs HistoryConfig operation as part of the component's functionality
- `PluginsCacheConfig`: Performs PluginsCacheConfig operation as part of the component's functionality
- `PluginsHotkeysConfig`: Performs PluginsHotkeysConfig operation as part of the component's functionality
- `VersionInfo`: Performs VersionInfo operation as part of the component's functionality
- `async_delete`: Performs async_delete operation as part of the component's functionality
### Key Functions
- `GetValue()`: Retrieves specific configuration value by key name
- `ValuesEnumerator()`: Performs ValuesEnumerator operation as part of the component's functionality
- `get()`: Retrieves specific configuration value by key name
- `bool()`: Performs bool operation as part of the component's functionality
- `KeysEnumerator()`: Performs KeysEnumerator operation as part of the component's functionality
- `EnumKeys()`: Performs EnumKeys operation as part of the component's functionality
- `EnumValues()`: Performs EnumValues operation as part of the component's functionality
- `ToSettingsType()`: Updates configuration value for specified key
- `MasksEnumerator()`: Performs MasksEnumerator operation as part of the component's functionality
- `EnumMasks()`: Performs EnumMasks operation as part of the component's functionality
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
- `AssociationsConfig`: Implementuje zarządzanie konfiguracją
- `ColorsConfig`: Implementuje zarządzanie konfiguracją
- `FarColor`: Implementuje zarządzanie konfiguracją
- `GeneralConfig`: Implementuje zarządzanie konfiguracją
- `HierarchicalConfig`: Implementuje zarządzanie konfiguracją
- `HistoryConfig`: Implementuje zarządzanie konfiguracją
- `PluginsCacheConfig`: Implementuje zarządzanie konfiguracją
- `PluginsHotkeysConfig`: Implementuje zarządzanie konfiguracją
- `VersionInfo`: Implementuje zarządzanie konfiguracją
- `async_delete`: Implementuje zarządzanie konfiguracją
### Kluczowe Funkcje
- `GetValue()`: Pobiera specific configuration wartość by key name
- `ValuesEnumerator()`: Wykonuje ValuesEnumerator operację jako część zarządzanie konfiguracją
- `get()`: Pobiera specific configuration wartość by key name
- `bool()`: Wykonuje bool operację jako część zarządzanie konfiguracją
- `KeysEnumerator()`: Wykonuje KeysEnumerator operację jako część zarządzanie konfiguracją
- `EnumKeys()`: Wykonuje EnumKeys operację jako część zarządzanie konfiguracją
- `EnumValues()`: Wykonuje EnumValues operację jako część zarządzanie konfiguracją
- `ToSettingsType()`: Aktualizuje configuration wartość for specified key
- `MasksEnumerator()`: Wykonuje MasksEnumerator operację jako część zarządzanie konfiguracją
- `EnumMasks()`: Wykonuje EnumMasks operację jako część zarządzanie konfiguracją
### Przestrzenie nazw
- `concurrency`
- `detail`
- `os`
### Podsumowanie
Plik `configdb.hpp` zapewnia podstawową funkcjonalność dla zarządzanie konfiguracją. Definiuje 24 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
