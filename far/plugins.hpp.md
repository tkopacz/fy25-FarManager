# plugins.hpp
## English
### Purpose
This file implements functionality related to: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Main functional areas: plugin interface
### Key Classes
- `CallPluginInfo`: Performs CallPluginInfo operation in plugins.hpp
- `Dialog`: Performs Dialog operation in plugins.hpp
- `Editor`: Performs Editor operation in plugins.hpp
- `FileEditor`: Performs FileEditor operation in plugins.hpp
- `Panel`: Performs Panel operation in plugins.hpp
- `Plugin`: Performs Plugin operation in plugins.hpp
- `PluginManager`: Performs PluginManager operation in plugins.hpp
- `SaveScreen`: Performs SaveScreen operation in plugins.hpp
- `Viewer`: Performs Viewer operation in plugins.hpp
- `delayed_deleter`: Performs delayed_deleter operation in plugins.hpp
### Key Functions
- `plugin()`: параметры вызова макрофункций plugin.call и т.п.
- `panel()`: параметры вызова макрофункций plugin.call и т.п.
- `set_panel()`: Sets or updates _panel value in plugins.hpp
- `delayed_delete()`: Performs delayed_delete operation in plugins.hpp
- `NotifyExitLuaMacro()`: Performs NotifyExitLuaMacro operation in plugins.hpp
- `ClosePanel()`: Performs ClosePanel operation in plugins.hpp
- `GetOpenPanelInfo()`: Retrieves OpenPanelInfo value in plugins.hpp
- `GetFindData()`: Retrieves FindData value in plugins.hpp
- `FreeFindData()`: Performs FreeFindData operation in plugins.hpp
- `GetVirtualFindData()`: Retrieves VirtualFindData value in plugins.hpp
### Summary
The `plugins.hpp` file provides essential functionality for plugin interface. It defines 14 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `CallPluginInfo`: Performs CallPluginInfo operation in plugins.hpp
- `Dialog`: Performs Dialog operation in plugins.hpp
- `Editor`: Performs Editor operation in plugins.hpp
- `FileEditor`: Performs FileEditor operation in plugins.hpp
- `Panel`: Performs Panel operation in plugins.hpp
- `Plugin`: Performs Plugin operation in plugins.hpp
- `PluginManager`: Performs PluginManager operation in plugins.hpp
- `SaveScreen`: Performs SaveScreen operation in plugins.hpp
- `Viewer`: Performs Viewer operation in plugins.hpp
- `delayed_deleter`: Performs delayed_deleter operation in plugins.hpp
### Kluczowe Funkcje
- `plugin()`: параметры вызова макрофункций plugin.call и т.п.
- `panel()`: параметры вызова макрофункций plugin.call и т.п.
- `set_panel()`: Sets or updates _panel value in plugins.hpp
- `delayed_delete()`: Performs delayed_delete operation in plugins.hpp
- `NotifyExitLuaMacro()`: Performs NotifyExitLuaMacro operation in plugins.hpp
- `ClosePanel()`: Performs ClosePanel operation in plugins.hpp
- `GetOpenPanelInfo()`: Retrieves OpenPanelInfo value in plugins.hpp
- `GetFindData()`: Retrieves FindData value in plugins.hpp
- `FreeFindData()`: Performs FreeFindData operation in plugins.hpp
- `GetVirtualFindData()`: Retrieves VirtualFindData value in plugins.hpp
### Podsumowanie
Plik `plugins.hpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 14 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
