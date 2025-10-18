# window.hpp
## English
### Purpose
This file implements functionality related to: Немодальное окно (базовый класс для FilePanels, FileEditor, FileViewer)
Main functional areas: window management
### Key Classes
- `KeyBar`: вызывается перед уничтожением окна
- `Manager`: Performs Manager operation in window.hpp
- `window`: весь ввод отдяётся нижележащему окну
### Key Functions
- `Refresh()`: весь ввод отдяётся нижележащему окну
- `GetCanLoseFocus()`: весь ввод отдяётся нижележащему окну
- `SetExitCode()`: весь ввод отдяётся нижележащему окну
- `IsFileModified()`: весь ввод отдяётся нижележащему окну
- `OnDestroy()`: весь ввод отдяётся нижележащему окну
- `OnChangeFocus()`: Performs OnChangeFocus operation in window.hpp
- `InitKeyBar()`: вызывается перед уничтожением окна
- `RedrawKeyBar()`: вызывается перед уничтожением окна
- `GetMacroArea()`: вызывается перед уничтожением окна
- `CanFastHide()`: вызывается перед уничтожением окна
### Summary
The `window.hpp` file provides essential functionality for window management. It defines 3 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Немодальное окно (базовый класс для FilePanels, FileEditor, FileViewer)
Główne obszary funkcjonalne: zarządzanie oknami
### Kluczowe Klasy
- `KeyBar`: вызывается перед уничтожением окна
- `Manager`: Performs Manager operation in window.hpp
- `window`: весь ввод отдяётся нижележащему окну
### Kluczowe Funkcje
- `Refresh()`: весь ввод отдяётся нижележащему окну
- `GetCanLoseFocus()`: весь ввод отдяётся нижележащему окну
- `SetExitCode()`: весь ввод отдяётся нижележащему окну
- `IsFileModified()`: весь ввод отдяётся нижележащему окну
- `OnDestroy()`: весь ввод отдяётся нижележащему окну
- `OnChangeFocus()`: Performs OnChangeFocus operation in window.hpp
- `InitKeyBar()`: вызывается перед уничтожением окна
- `RedrawKeyBar()`: вызывается перед уничтожением окна
- `GetMacroArea()`: вызывается перед уничтожением окна
- `CanFastHide()`: вызывается перед уничтожением окна
### Podsumowanie
Plik `window.hpp` zapewnia podstawową funkcjonalność dla zarządzanie oknami. Definiuje 3 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
