# flink.cpp

## English

### Purpose
This file implements functionality for file operations.

### Key Classes
- **`name_data`**: Implements name data functionality
- **`NFS_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`APPEXECLINK_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`LX_SYMLINK_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`WCI_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation

### Key Functions
- **`CreateVolumeMountPoint()`**: Constructs and returns a new volume mount point object
- **`FillREPARSE_DATA_BUFFER()`**: Executes fill reparse data buffer operation
- **`GetDesiredAccessForReparsePointChange()`**: Retrieves the current desired access for reparse point change value
- **`SetREPARSE_DATA_BUFFER()`**: Updates the reparse data buffer with a new value
- **`PrepareAndSetREPARSE_DATA_BUFFER()`**: Executes prepare and set reparse data buffer operation
- **`GetREPARSE_DATA_BUFFER()`**: Retrieves the current reparse data buffer value
- **`CreateReparsePoint()`**: Constructs and returns a new reparse point object
- **`DeleteReparsePoint()`**: Executes delete reparse point operation
- **`GetReparsePointInfo()`**: Retrieves the current reparse point info value
- **`GetNumberOfLinks()`**: Retrieves the current number of links value
- **`MkHardLink()`**: Executes mk hard link operation
- **`EnumStreams()`**: Executes enum streams operation
- **`DelSubstDrive()`**: Executes del subst drive operation
- **`GetSubstName()`**: Retrieves the current subst name value
- **`GetVHDInfo()`**: Retrieves the current vhdinfo value
- **`detach_vhd()`**: Executes detach vhd operation
- **`GetPathRoot()`**: Retrieves the current path root value
- **`ModifyReparsePoint()`**: Executes modify reparse point operation
- **`NormalizeSymlinkName()`**: Executes normalize symlink name operation
- **`MkSymLink()`**: Executes mk sym link operation

### Summary
The `flink.cpp` file is essential for file operations. It defines 5 class(es) and implements 21 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla operacji na plikach.

### Kluczowe Klasy
- **`name_data`**: Implements name data functionality
- **`NFS_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`APPEXECLINK_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`LX_SYMLINK_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation
- **`WCI_REPARSE_DATA_BUFFER`**: Manages memory buffer with automatic allocation and deallocation

### Kluczowe Funkcje
- **`CreateVolumeMountPoint()`**: Constructs and returns a new volume mount point object
- **`FillREPARSE_DATA_BUFFER()`**: Executes fill reparse data buffer operation
- **`GetDesiredAccessForReparsePointChange()`**: Retrieves the current desired access for reparse point change value
- **`SetREPARSE_DATA_BUFFER()`**: Updates the reparse data buffer with a new value
- **`PrepareAndSetREPARSE_DATA_BUFFER()`**: Executes prepare and set reparse data buffer operation
- **`GetREPARSE_DATA_BUFFER()`**: Retrieves the current reparse data buffer value
- **`CreateReparsePoint()`**: Constructs and returns a new reparse point object
- **`DeleteReparsePoint()`**: Executes delete reparse point operation
- **`GetReparsePointInfo()`**: Retrieves the current reparse point info value
- **`GetNumberOfLinks()`**: Retrieves the current number of links value
- **`MkHardLink()`**: Executes mk hard link operation
- **`EnumStreams()`**: Executes enum streams operation
- **`DelSubstDrive()`**: Executes del subst drive operation
- **`GetSubstName()`**: Retrieves the current subst name value
- **`GetVHDInfo()`**: Retrieves the current vhdinfo value
- **`detach_vhd()`**: Executes detach vhd operation
- **`GetPathRoot()`**: Retrieves the current path root value
- **`ModifyReparsePoint()`**: Executes modify reparse point operation
- **`NormalizeSymlinkName()`**: Executes normalize symlink name operation
- **`MkSymLink()`**: Executes mk sym link operation

### Podsumowanie
Plik `flink.cpp` jest niezbędny dla operacji na plikach. Definiuje 5 klas(y) i implementuje 21 funkcji wspierających operacje menedżera plików Far Manager.
