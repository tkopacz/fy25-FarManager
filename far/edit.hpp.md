# edit.hpp
## English
### Purpose
This file implements functionality related to: Строка редактора
Main functional areas: text editing
### Key Classes
- `ColorItem`: Performs ColorItem operation in edit.hpp
- `DlgEdit`: Performs DlgEdit operation in edit.hpp
- `Edit`: Постоянные блоки (Global->Opt->EditorPersistentBlocks)
- `Editor`: Performs Editor operation in edit.hpp
- `FarColor`: Performs FarColor operation in edit.hpp
- `FileEditor`: Performs FileEditor operation in edit.hpp
- `RegExp`: Performs RegExp operation in edit.hpp
- `RegExpMatch`: Performs RegExpMatch operation in edit.hpp
- `ShowInfo`: Performs ShowInfo operation in edit.hpp
- `edit_string`: Performs edit_string operation in edit.hpp
### Key Functions
- `GetOwner()`: so UUIDs are stored in a separate set and here is only a pointer.
- `SetOwner()`: Usually we have only 5-10 unique colors.
- `GetColor()`: Usually we have only 5-10 unique colors.
- `SetColor()`: Keeping a copy of FarColor in each of thousands of color items is a giant waste of memory,
- `Edit()`: Постоянные блоки (Global->Opt->EditorPersistentBlocks)
- `ProcessKey()`: Processes input data in edit.hpp
- `ProcessMouse()`: Processes input data in edit.hpp
- `VMProcess()`: Performs VMProcess operation in edit.hpp
- `Changed()`: Performs Changed operation in edit.hpp
- `GetMaxLength()`: Retrieves MaxLength value in edit.hpp
### Summary
The `edit.hpp` file provides essential functionality for text editing. It defines 11 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Строка редактора
Główne obszary funkcjonalne: edycja tekstu
### Kluczowe Klasy
- `ColorItem`: Performs ColorItem operation in edit.hpp
- `DlgEdit`: Performs DlgEdit operation in edit.hpp
- `Edit`: Постоянные блоки (Global->Opt->EditorPersistentBlocks)
- `Editor`: Performs Editor operation in edit.hpp
- `FarColor`: Performs FarColor operation in edit.hpp
- `FileEditor`: Performs FileEditor operation in edit.hpp
- `RegExp`: Performs RegExp operation in edit.hpp
- `RegExpMatch`: Performs RegExpMatch operation in edit.hpp
- `ShowInfo`: Performs ShowInfo operation in edit.hpp
- `edit_string`: Performs edit_string operation in edit.hpp
### Kluczowe Funkcje
- `GetOwner()`: so UUIDs are stored in a separate set and here is only a pointer.
- `SetOwner()`: Usually we have only 5-10 unique colors.
- `GetColor()`: Usually we have only 5-10 unique colors.
- `SetColor()`: Keeping a copy of FarColor in each of thousands of color items is a giant waste of memory,
- `Edit()`: Постоянные блоки (Global->Opt->EditorPersistentBlocks)
- `ProcessKey()`: Processes input data in edit.hpp
- `ProcessMouse()`: Processes input data in edit.hpp
- `VMProcess()`: Performs VMProcess operation in edit.hpp
- `Changed()`: Performs Changed operation in edit.hpp
- `GetMaxLength()`: Retrieves MaxLength value in edit.hpp
### Podsumowanie
Plik `edit.hpp` zapewnia podstawową funkcjonalność dla edycja tekstu. Definiuje 11 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
