# FExcept.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Functions
- `LOpen()`: Attempts to open the log file for writing, clearing read-only attributes if necessary
- `idOutProc()`: Callback function that formats and writes Unicode text to the log file for dump output
- `idOutProcA()`: Callback function that formats and writes ANSI text to the log file
- `SError()`: Displays an error message to the user through the FAR message box if FAR interface is available
- `ExceptionProcINT()`: Internal exception handler that generates a detailed crash log including registers, stack trace, and system information
- `_tcscpy()`: Copies text from source to destination (standard string copy function)
- `fclose()`: Closes an open file stream and flushes any buffered data
- `ExceptionProc()`: Main exception handler entry point called by FAR, handles nested exceptions and calls the internal handler
- `DllEntryPoint()`: DLL initialization function that stores the module handle when the DLL is attached to the process
- `DllMain()`: DLL initialization function that stores the module handle when the DLL is attached to the process
### Summary
The `FExcept.cpp` file provides essential functionality for core functionality. and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Funkcje
- `LOpen()`: Attempts to open the log file for writing, clearing read-only attributes if necessary
- `idOutProc()`: Callback function that formats and writes Unicode text to the log file for dump output
- `idOutProcA()`: Callback function that formats and writes ANSI text to the log file
- `SError()`: Displays an error message to the user through the FAR message box if FAR interface is available
- `ExceptionProcINT()`: Internal exception handler that generates a detailed crash log including registers, stack trace, and system information
- `_tcscpy()`: Copies text from source to destination (standard string copy function)
- `fclose()`: Closes an open file stream and flushes any buffered data
- `ExceptionProc()`: Main exception handler entry point called by FAR, handles nested exceptions and calls the internal handler
- `DllEntryPoint()`: DLL initialization function that stores the module handle when the DLL is attached to the process
- `DllMain()`: DLL initialization function that stores the module handle when the DLL is attached to the process
### Podsumowanie
Plik `FExcept.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
