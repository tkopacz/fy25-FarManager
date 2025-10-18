# zip.cpp

## English

### Purpose
This file implements functionality for core functionality.

### Key Classes
- **`ZipHeader`**: Implements zip header functionality
- **`ZipHdr1`**: Implements zip hdr1 functionality
- **`ZipHdr2`**: Implements zip hdr2 functionality
- **`ExtraBlockHeader`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`NTFSAttributeHeader`**: Implements ntfsattribute header functionality
- **`TimesAttribute`**: Implements times attribute functionality
- **`ZIP64Descriptor`**: Implements zip64descriptor functionality

### Key Functions
- **`IsValidHeader()`**: Checks whether valid header condition is true
- **`GetFilePosition()`**: Retrieves the current file position value
- **`IsZIPFileMagic()`**: Checks whether zipfile magic condition is true

### Summary
The `zip.cpp` file is essential for core functionality. It defines 7 class(es) and implements 3 function(s) that support Far Manager file manager operations.

---

## Polski (Polish)

### Cel
Ten plik implementuje funkcjonalność dla podstawowej funkcjonalności.

### Kluczowe Klasy
- **`ZipHeader`**: Implements zip header functionality
- **`ZipHdr1`**: Implements zip hdr1 functionality
- **`ZipHdr2`**: Implements zip hdr2 functionality
- **`ExtraBlockHeader`**: RAII guard ensuring proper resource locking and automatic unlocking on scope exit
- **`NTFSAttributeHeader`**: Implements ntfsattribute header functionality
- **`TimesAttribute`**: Implements times attribute functionality
- **`ZIP64Descriptor`**: Implements zip64descriptor functionality

### Kluczowe Funkcje
- **`IsValidHeader()`**: Checks whether valid header condition is true
- **`GetFilePosition()`**: Retrieves the current file position value
- **`IsZIPFileMagic()`**: Checks whether zipfile magic condition is true

### Podsumowanie
Plik `zip.cpp` jest niezbędny dla podstawowej funkcjonalności. Definiuje 7 klas(y) i implementuje 3 funkcji wspierających operacje menedżera plików Far Manager.
