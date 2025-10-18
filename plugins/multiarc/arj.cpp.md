# arj.cpp
## English
### Purpose
This file implements functionality related to: Second-level plugin module for FAR Manager and MultiArc plugin
Main functional areas: core functionality
### Key Classes
- `ARJHd1`: Implements ARJHd1 functionality
- `ARJHd2`: Implements ARJHd2 functionality
### Key Functions
- `make_crctable()`: indicates file starting position field (for split files) indicates filename translated ("\" changed to "/") obsolete
- `crc_buf()`: Implements crc_buf functionality
- `IsArchive()`: Checks condition and returns boolean indicating state
- `OpenArchive()`: header id (main and local file) = 0x60 0xEA basic header size (from 'first_hdr_size' thru 'comment' below)
- `GetArcItem()`: header id (main and local file) = 0x60 0xEA basic header size
- `CloseArchive()`: Implements CloseArchive functionality
- `GetSFXPos()`: Correct Arj/Win32 commands Extract without paths
- `GetFormatName()`: Correct Arj/Win32 commands Extract without paths
- `GetDefaultCommands()`: Correct Arj/Win32 commands Extract without paths
### Summary
The `arj.cpp` file provides essential functionality for core functionality. It defines 2 class(es) and contains approximately 9 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Ten plik implementuje funkcjonalność związaną z: Second-level plugin module for FAR Manager and MultiArc plugin
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `ARJHd1`: Implements ARJHd1 functionality
- `ARJHd2`: Implements ARJHd2 functionality
### Kluczowe Funkcje
- `make_crctable()`: indicates file starting position field (for split files) indicates filename translated ("\" changed to "/") obsolete
- `crc_buf()`: Implements crc_buf functionality
- `IsArchive()`: Checks condition and returns boolean indicating state
- `OpenArchive()`: header id (main and local file) = 0x60 0xEA basic header size (from 'first_hdr_size' thru 'comment' below)
- `GetArcItem()`: header id (main and local file) = 0x60 0xEA basic header size
- `CloseArchive()`: Implements CloseArchive functionality
- `GetSFXPos()`: Correct Arj/Win32 commands Extract without paths
- `GetFormatName()`: Correct Arj/Win32 commands Extract without paths
- `GetDefaultCommands()`: Correct Arj/Win32 commands Extract without paths
### Podsumowanie
Plik `arj.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 2 klas(y) i zawiera około 9 funkcji wspierających operacje menedżera plików Far Manager.
