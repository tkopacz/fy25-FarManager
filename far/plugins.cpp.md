# plugins.cpp
## English
### Purpose
This file implements functionality related to: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Main functional areas: plugin interface
### Key Classes
- `PluginData`: Implements PluginData functionality
- `PluginMenuItemData`: Implements PluginMenuItemData functionality
- `layout`: Implements layout functionality
- `plugin_panel_holder`: Implements plugin_panel_holder functionality
### Key Functions
- `GetHotKeyPluginKey()`: Retrieves HotKeyPluginKey from current context or object state
- `GetPluginHotKey()`: Retrieves PluginHotKey from current context or object state
- `EnsureLuaCpuCompatibility()`: Implements EnsureLuaCpuCompatibility functionality
- `bool()`: Implements bool functionality
- `m_PluginsLoaded()`: Implements m_PluginsLoaded functionality
- `ScTree()`: Implements ScTree functionality
- `analyse()`: UI is not thread-safe
- `set_analyse()`: UI is not thread-safe у анси плагинов OpMode нет
- `File()`: Implements File functionality
- `AddHotkey()`: Implements AddHotkey functionality
### Summary
The `plugins.cpp` file provides essential functionality for plugin interface. It defines 4 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `PluginData`: Implements PluginData functionality
- `PluginMenuItemData`: Implements PluginMenuItemData functionality
- `layout`: Implements layout functionality
- `plugin_panel_holder`: Implements plugin_panel_holder functionality
### Kluczowe Funkcje
- `GetHotKeyPluginKey()`: Retrieves HotKeyPluginKey from current context or object state
- `GetPluginHotKey()`: Retrieves PluginHotKey from current context or object state
- `EnsureLuaCpuCompatibility()`: Implements EnsureLuaCpuCompatibility functionality
- `bool()`: Implements bool functionality
- `m_PluginsLoaded()`: Implements m_PluginsLoaded functionality
- `ScTree()`: Implements ScTree functionality
- `analyse()`: UI is not thread-safe
- `set_analyse()`: UI is not thread-safe у анси плагинов OpMode нет
- `File()`: Implements File functionality
- `AddHotkey()`: Implements AddHotkey functionality
### Podsumowanie
Plik `plugins.cpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 4 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
