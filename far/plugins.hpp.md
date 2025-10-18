# plugins.hpp
## English
### Purpose
This file implements functionality related to: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Main functional areas: plugin interface
### Key Classes
- `CallPluginInfo`: Performs CallPluginInfo operation as part of the component's functionality
- `Dialog`: Performs Dialog operation as part of the component's functionality
- `Editor`: Performs Editor operation as part of the component's functionality
- `FileEditor`: Performs FileEditor operation as part of the component's functionality
- `Panel`: Performs Panel operation as part of the component's functionality
- `Plugin`: Performs Plugin operation as part of the component's functionality
- `PluginManager`: Performs PluginManager operation as part of the component's functionality
- `SaveScreen`: Writes or saves data to a destination
- `Viewer`: Performs Viewer operation as part of the component's functionality
- `delayed_deleter`: Performs delayed_deleter operation as part of the component's functionality
### Key Functions
- `plugin()`: Performs plugin operation as part of the component's functionality
- `panel()`: Performs panel operation as part of the component's functionality
- `set_panel()`: Updates _panel in internal state or configuration
- `delayed_delete()`: Performs delayed_delete operation as part of the component's functionality
- `NotifyExitLuaMacro()`: Performs NotifyExitLuaMacro operation as part of the component's functionality
- `ClosePanel()`: Closes resource and performs cleanup operations
- `GetOpenPanelInfo()`: Retrieves OpenPanelInfo from internal state or data structure
- `GetFindData()`: Retrieves FindData from internal state or data structure
- `FreeFindData()`: Performs FreeFindData operation as part of the component's functionality
- `GetVirtualFindData()`: Retrieves VirtualFindData from internal state or data structure
### Summary
The `plugins.hpp` file provides essential functionality for plugin interface. It defines 14 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Работа с плагинами (низкий уровень, кое-что повыше в filelist.cpp)
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `CallPluginInfo`: Implementuje interfejs wtyczek
- `Dialog`: Implementuje interfejs wtyczek
- `Editor`: Implementuje interfejs wtyczek
- `FileEditor`: Implementuje interfejs wtyczek
- `Panel`: Implementuje interfejs wtyczek
- `Plugin`: Implementuje interfejs wtyczek
- `PluginManager`: Implementuje interfejs wtyczek
- `SaveScreen`: Implementuje interfejs wtyczek
- `Viewer`: Implementuje interfejs wtyczek
- `delayed_deleter`: Implementuje interfejs wtyczek
### Kluczowe Funkcje
- `plugin()`: Wykonuje plugin operację jako część interfejs wtyczek
- `panel()`: Wykonuje panel operację jako część interfejs wtyczek
- `set_panel()`: Aktualizuje _panel w stanie wewnętrznym lub konfiguracji
- `delayed_delete()`: Wykonuje delayed_delete operację jako część interfejs wtyczek
- `NotifyExitLuaMacro()`: Wykonuje NotifyExitLuaMacro operację jako część interfejs wtyczek
- `ClosePanel()`: Zamyka zasób i wykonuje operacje czyszczące
- `GetOpenPanelInfo()`: Pobiera OpenPanelInfo ze stanu wewnętrznego lub struktury danych
- `GetFindData()`: Pobiera FindData ze stanu wewnętrznego lub struktury danych
- `FreeFindData()`: Wykonuje FreeFindData operację jako część interfejs wtyczek
- `GetVirtualFindData()`: Pobiera VirtualFindData ze stanu wewnętrznego lub struktury danych
### Podsumowanie
Plik `plugins.hpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 14 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
