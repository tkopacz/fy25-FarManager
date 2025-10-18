# plugins.hpp
## English
### Purpose
This file implements functionality related to: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Main functional areas: plugin interface
### Key Classes
- `CallPluginInfo`: Implements CallPluginInfo functionality
- `Dialog`: Implements Dialog functionality
- `Editor`: Implements Editor functionality
- `FileEditor`: Implements FileEditor functionality
- `Panel`: Implements Panel functionality
- `Plugin`: Implements Plugin functionality
- `PluginManager`: Implements PluginManager functionality
- `SaveScreen`: Implements SaveScreen functionality
- `Viewer`: Implements Viewer functionality
- `delayed_deleter`: Implements delayed_deleter functionality
### Key Functions
- `plugin()`: Implements plugin functionality
- `panel()`: Implements panel functionality
- `set_panel()`: Updates _panel with provided value and validates constraints
- `delayed_delete()`: Implements delayed_delete functionality
- `NotifyExitLuaMacro()`: Implements NotifyExitLuaMacro functionality
- `ClosePanel()`: Implements ClosePanel functionality
- `GetOpenPanelInfo()`: Retrieves OpenPanelInfo from current context or object state
- `GetFindData()`: Retrieves FindData from current context or object state
- `FreeFindData()`: Implements FreeFindData functionality
- `GetVirtualFindData()`: Retrieves VirtualFindData from current context or object state
### Summary
The `plugins.hpp` file provides essential functionality for plugin interface. It defines 14 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `CallPluginInfo`: Implements CallPluginInfo functionality
- `Dialog`: Implements Dialog functionality
- `Editor`: Implements Editor functionality
- `FileEditor`: Implements FileEditor functionality
- `Panel`: Implements Panel functionality
- `Plugin`: Implements Plugin functionality
- `PluginManager`: Implements PluginManager functionality
- `SaveScreen`: Implements SaveScreen functionality
- `Viewer`: Implements Viewer functionality
- `delayed_deleter`: Implements delayed_deleter functionality
### Kluczowe Funkcje
- `plugin()`: Implements plugin functionality
- `panel()`: Implements panel functionality
- `set_panel()`: Updates _panel with provided value and validates constraints
- `delayed_delete()`: Implements delayed_delete functionality
- `NotifyExitLuaMacro()`: Implements NotifyExitLuaMacro functionality
- `ClosePanel()`: Implements ClosePanel functionality
- `GetOpenPanelInfo()`: Retrieves OpenPanelInfo from current context or object state
- `GetFindData()`: Retrieves FindData from current context or object state
- `FreeFindData()`: Implements FreeFindData functionality
- `GetVirtualFindData()`: Retrieves VirtualFindData from current context or object state
### Podsumowanie
Plik `plugins.hpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 14 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
