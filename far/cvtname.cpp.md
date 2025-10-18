# cvtname.cpp
## English
### Purpose
This file implements functionality related to: Функций для преобразования имен файлов/путей.
Main functional areas: core functionality
### Key Functions
- `MixToFullPath()`: Implements MixToFullPath functionality
- `ConvertNameToFull()`: Implements ConvertNameToFull functionality
- `ReplaceVolumeNameWithDriveLetter()`: Implements ReplaceVolumeNameWithDriveLetter functionality
- `ConvertNameToReal()`: Processes input by dispatching to different code paths based on type or value
- `string()`: Processes input by dispatching to different code paths based on type or value
- `ConvertNameToShort()`: Implements ConvertNameToShort functionality
- `ConvertName()`: local -> network local -> local \\?\X:\path -> X:\path \\?\UNC\server -> \\server should never happen
- `ConvertNameToLong()`: should never happen Посмотрим на тип файловой системы применяем WNetGetUniversalName для чего угодно, только не для Novell`а
- `ConvertNameToUNC()`: Implements ConvertNameToUNC functionality
- `PrepareDiskPath()`: Косметические преобразования строки пути
### Summary
The `cvtname.cpp` file provides essential functionality for core functionality. and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Функций для преобразования имен файлов/путей.
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `MixToFullPath()`: Implements MixToFullPath functionality
- `ConvertNameToFull()`: Implements ConvertNameToFull functionality
- `ReplaceVolumeNameWithDriveLetter()`: Implements ReplaceVolumeNameWithDriveLetter functionality
- `ConvertNameToReal()`: Processes input by dispatching to different code paths based on type or value
- `string()`: Processes input by dispatching to different code paths based on type or value
- `ConvertNameToShort()`: Implements ConvertNameToShort functionality
- `ConvertName()`: local -> network local -> local \\?\X:\path -> X:\path \\?\UNC\server -> \\server should never happen
- `ConvertNameToLong()`: should never happen Посмотрим на тип файловой системы применяем WNetGetUniversalName для чего угодно, только не для Novell`а
- `ConvertNameToUNC()`: Implements ConvertNameToUNC functionality
- `PrepareDiskPath()`: Косметические преобразования строки пути
### Podsumowanie
Plik `cvtname.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
