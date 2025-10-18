# editor.cpp
## English
### Purpose
This file implements functionality related to: Редактор
Main functional areas: text editing
### Key Classes
- `Editor`: Iterates through elements in editor.cpp and adds them to a collection
- `EditorBlockGuard`: Iterates through elements in editor.cpp and adds them to a collection
- `FindCoord`: Performs FindCoord operation in editor.cpp
- `find_all_list`: To find the next nearest match, include the entire last found match (minus one character)
- `save_to_new_editor`: Performs save_to_new_editor operation in editor.cpp
- `undo_block`: Performs undo_block operation in editor.cpp
### Key Functions
- `SetNeedCheckUnmark()`: Sets or updates NeedCheckUnmark value in editor.cpp
- `IsAnySelection()`: Checks a condition in editor.cpp and returns true or false based on the result
- `NextSessionBookmark()`: If not first bookmark - go
- `PrevSessionBookmark()`: If we had to save current position ...
- `BackSessionBookmark()`: Performs BackSessionBookmark operation in editor.cpp
- `GetSessionBookmarks()`: Checks a condition in editor.cpp and returns true or false based on the result
- `PushSessionBookMark()`: Iterates through elements in editor.cpp and adds them to a collection
- `PopSessionBookMark()`: Iterates through elements in editor.cpp and adds them to a collection
- `индексом()`: N=BM.pop() - восстановить текущую позицию из закладки в конце стека и удалить закладку
- `type()`: Performs type operation in editor.cpp
### Summary
The `editor.cpp` file provides essential functionality for text editing. It defines 6 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Редактор
Główne obszary funkcjonalne: edycja tekstu
### Kluczowe Klasy
- `Editor`: Iterates through elements in editor.cpp and adds them to a collection
- `EditorBlockGuard`: Iterates through elements in editor.cpp and adds them to a collection
- `FindCoord`: Performs FindCoord operation in editor.cpp
- `find_all_list`: To find the next nearest match, include the entire last found match (minus one character)
- `save_to_new_editor`: Performs save_to_new_editor operation in editor.cpp
- `undo_block`: Performs undo_block operation in editor.cpp
### Kluczowe Funkcje
- `SetNeedCheckUnmark()`: Sets or updates NeedCheckUnmark value in editor.cpp
- `IsAnySelection()`: Checks a condition in editor.cpp and returns true or false based on the result
- `NextSessionBookmark()`: If not first bookmark - go
- `PrevSessionBookmark()`: If we had to save current position ...
- `BackSessionBookmark()`: Performs BackSessionBookmark operation in editor.cpp
- `GetSessionBookmarks()`: Checks a condition in editor.cpp and returns true or false based on the result
- `PushSessionBookMark()`: Iterates through elements in editor.cpp and adds them to a collection
- `PopSessionBookMark()`: Iterates through elements in editor.cpp and adds them to a collection
- `индексом()`: N=BM.pop() - восстановить текущую позицию из закладки в конце стека и удалить закладку
- `type()`: Performs type operation in editor.cpp
### Podsumowanie
Plik `editor.cpp` zapewnia podstawową funkcjonalność dla edycja tekstu. Definiuje 6 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
