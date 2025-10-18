# usermenu.cpp
## English
### Purpose
This file implements functionality related to: User menu и есть
Main functional areas: menu management
### Key Classes
- `UserMenu`: Implements UserMenu functionality
- `UserMenuItem`: Implements UserMenuItem functionality
- `menu_mode`: Implements menu_mode functionality
### Key Functions
- `UserMenu()`: Implements UserMenu functionality
- `ProcessUserMenu()`: Processes input data through core business logic pipeline
- `DeleteMenuRecord()`: Removes or deletes specified item and releases associated resources
- `EditMenu()`: Implements EditMenu functionality
- `ProcessSingleMenu()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх
- `SaveMenu()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх
- `EditMenuDlgProc()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх Выйти из меню по SHIFT+F10 Показать меню родительского каталога
- `PrepareHotKey()`: Показать меню родительского каталога Показать главное меню Выбрана команда - закрыть меню и обновить папку при наличии "&" продублируем
- `SerializeMenu()`: Implements SerializeMenu functionality
- `ParseMenu()`: '}' can be a hotkey as well
### Summary
The `usermenu.cpp` file provides essential functionality for menu management. It defines 3 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: User menu и есть
Główne obszary funkcjonalne: zarządzanie menu
### Kluczowe Klasy
- `UserMenu`: Implements UserMenu functionality
- `UserMenuItem`: Implements UserMenuItem functionality
- `menu_mode`: Implements menu_mode functionality
### Kluczowe Funkcje
- `UserMenu()`: Implements UserMenu functionality
- `ProcessUserMenu()`: Processes input data through core business logic pipeline
- `DeleteMenuRecord()`: Removes or deletes specified item and releases associated resources
- `EditMenu()`: Implements EditMenu functionality
- `ProcessSingleMenu()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх
- `SaveMenu()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх
- `EditMenuDlgProc()`: Коды выхода из меню (Exit codes) Выйти из меню на один уровень вверх Выйти из меню по SHIFT+F10 Показать меню родительского каталога
- `PrepareHotKey()`: Показать меню родительского каталога Показать главное меню Выбрана команда - закрыть меню и обновить папку при наличии "&" продублируем
- `SerializeMenu()`: Implements SerializeMenu functionality
- `ParseMenu()`: '}' can be a hotkey as well
### Podsumowanie
Plik `usermenu.cpp` zapewnia podstawową funkcjonalność dla zarządzanie menu. Definiuje 3 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
