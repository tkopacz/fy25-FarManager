# plugin.cpp
## English
### Purpose
Main functional areas: plugin interface
### Key Classes
- `Plugin`: Implements Plugin functionality
- `PluginPanelItemAccessor`: Implements PluginPanelItemAccessor functionality
- `PluginPanelItems`: Implements PluginPanelItems functionality
### Key Functions
- `open()`: Implements open functionality
- `guess_fs_ext()`: Implements guess_fs_ext functionality
- `correct_part_root_name()`: Implements correct_part_root_name functionality
- `part_index_to_item()`: bool part_index_to_item(const UInt32 index, Far::PanelItem& i) i
- `set_partition()`: Updates _partition with provided value and validates constraints
- `info()`: Implements info functionality
- `set_dir()`: Updates _dir with provided value and validates constraints
- `list()`: Implements list functionality
- `get_separate_dir_path()`: Retrieves _separate_dir_path from current context or object state
- `extract()`: Implements extract functionality
### Summary
The `plugin.cpp` file provides essential functionality for plugin interface. It defines 3 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: interfejs wtyczek
### Kluczowe Klasy
- `Plugin`: Implements Plugin functionality
- `PluginPanelItemAccessor`: Implements PluginPanelItemAccessor functionality
- `PluginPanelItems`: Implements PluginPanelItems functionality
### Kluczowe Funkcje
- `open()`: Implements open functionality
- `guess_fs_ext()`: Implements guess_fs_ext functionality
- `correct_part_root_name()`: Implements correct_part_root_name functionality
- `part_index_to_item()`: bool part_index_to_item(const UInt32 index, Far::PanelItem& i) i
- `set_partition()`: Updates _partition with provided value and validates constraints
- `info()`: Implements info functionality
- `set_dir()`: Updates _dir with provided value and validates constraints
- `list()`: Implements list functionality
- `get_separate_dir_path()`: Retrieves _separate_dir_path from current context or object state
- `extract()`: Implements extract functionality
### Podsumowanie
Plik `plugin.cpp` zapewnia podstawową funkcjonalność dla interfejs wtyczek. Definiuje 3 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
