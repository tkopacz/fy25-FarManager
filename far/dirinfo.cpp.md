# dirinfo.cpp
## English
### Purpose
This file implements functionality related to: GetDirInfo & GetPluginDirInfo
Main functional areas: core functionality
### Key Functions
- `GetDirInfo()`: Platform: Common: External: ---------------------------------------------------------------------------- $ 20
- `PushPluginDirItem()`: Iterates through collection and processes each element, storing results
- `ScanPluginDir()`: Implements ScanPluginDir functionality
- `GetPluginDirListImpl()`: Retrieves PluginDirListImpl from current context or object state
- `GetPluginDirList()`: Retrieves PluginDirList from current context or object state
- `FreePluginDirList()`: Must be cleared unconditionally: GetPluginDirList can fill it partially and return false
- `GetPluginDirInfo()`: Must be cleared unconditionally: GetPluginDirList can fill it partially and return false intptr_t - BUGBUG
### Summary
The `dirinfo.cpp` file provides essential functionality for core functionality. and contains approximately 7 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: GetDirInfo & GetPluginDirInfo
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `GetDirInfo()`: Platform: Common: External: ---------------------------------------------------------------------------- $ 20
- `PushPluginDirItem()`: Iterates through collection and processes each element, storing results
- `ScanPluginDir()`: Implements ScanPluginDir functionality
- `GetPluginDirListImpl()`: Retrieves PluginDirListImpl from current context or object state
- `GetPluginDirList()`: Retrieves PluginDirList from current context or object state
- `FreePluginDirList()`: Must be cleared unconditionally: GetPluginDirList can fill it partially and return false
- `GetPluginDirInfo()`: Must be cleared unconditionally: GetPluginDirList can fill it partially and return false intptr_t - BUGBUG
### Podsumowanie
Plik `dirinfo.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 7 funkcji wspierających operacje menedżera plików Far Manager.
