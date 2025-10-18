# plugin.cpp
## English
### Purpose
Main functional areas: plugin interface
### Key Classes
- `Plugin`: Allocates memory and initializes resources for Plugin
- `PluginPanelItemAccessor`: Performs PluginPanelItemAccessor operation as part of the component's functionality
- `PluginPanelItems`: Performs PluginPanelItems operation as part of the component's functionality
### Key Functions
- `open()`: Opens resource and prepares it for access operations
- `guess_fs_ext()`: Constructor that initializes guess_fs_ext object with provided parameters
- `correct_part_root_name()`: Performs correct_part_root_name operation as part of the component's functionality
- `part_index_to_item()`: Evaluates conditions and returns a boolean indicating success or validity of part_index_to_item
- `set_partition()`: Updates _partition in internal state or configuration
- `info()`: Iterates through items and collects results into a container
- `set_dir()`: Updates _dir in internal state or configuration
- `list()`: Opens and manages file access for reading or writing operations
- `get_separate_dir_path()`: Retrieves _separate_dir_path from internal state or data structure
- `extract()`: Iterates through items and collects results into a container
### Summary
The `plugin.cpp` file provides essential functionality for plugin interface. It defines 3 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `Plugin`: Implementuje interfejs wtyczek
- `PluginPanelItemAccessor`: Implementuje interfejs wtyczek
- `PluginPanelItems`: Implementuje interfejs wtyczek
### Kluczowe Funkcje
- `open()`: Otwiera zasób i przygotowuje go do operacji dostępu
- `guess_fs_ext()`: Konstruktor inicjalizujący guess_fs_ext obiekt z dostarczonymi parametrami
- `correct_part_root_name()`: Wykonuje correct_part_root_name operację jako część interfejs wtyczek
- `part_index_to_item()`: Wykonuje part_index_to_element operację jako część interfejs wtyczek
- `set_partition()`: Aktualizuje _partition w stanie wewnętrznym lub konfiguracji
- `info()`: Wykonuje info operację jako część interfejs wtyczek
- `set_dir()`: Aktualizuje _dir w stanie wewnętrznym lub konfiguracji
- `list()`: Wykonuje list operację jako część interfejs wtyczek
- `get_separate_dir_path()`: Pobiera _separate_dir_path ze stanu wewnętrznego lub struktury danych
- `extract()`: Wykonuje extract operację jako część interfejs wtyczek
### Podsumowanie
Plik `plugin.cpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 3 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
