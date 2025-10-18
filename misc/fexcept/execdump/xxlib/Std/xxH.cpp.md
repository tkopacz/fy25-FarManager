# xxH.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `JMPOpCode`: Implements JMPOpCode functionality
### Key Functions
- `PushProcHookInfo()`: Implements PushProcHookInfo functionality
- `PopProcHookInfo()`: --------------------------------------------------------------------------- Return Param `si` Restore patched bytes
- `doBPUnwindJMP()`: --------------------------------------------------------------------------- Return Param `si` Restore patched bytes Caller
- `doBPUnwind()`: Caller EBP frame Save IN eax Save ecx,edx Correct info Get current INFO Restore patched Get caller EIP (shifted by two PUSH) Restore patched bytes
- `Subst_Function()`: Implements Subst_Function functionality
- `MakeAddrWritable()`: Patch first 6 byte to call new handler ---------------------------------------------------------------------------
- `InitHook_Proc()`: jmp [dword ptr] call [dword ptr]
### Summary
The `xxH.cpp` file provides essential functionality for core functionality. It defines 1 class(es) and contains approximately 7 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `JMPOpCode`: Implements JMPOpCode functionality
### Kluczowe Funkcje
- `PushProcHookInfo()`: Implements PushProcHookInfo functionality
- `PopProcHookInfo()`: --------------------------------------------------------------------------- Return Param `si` Restore patched bytes
- `doBPUnwindJMP()`: --------------------------------------------------------------------------- Return Param `si` Restore patched bytes Caller
- `doBPUnwind()`: Caller EBP frame Save IN eax Save ecx,edx Correct info Get current INFO Restore patched Get caller EIP (shifted by two PUSH) Restore patched bytes
- `Subst_Function()`: Implements Subst_Function functionality
- `MakeAddrWritable()`: Patch first 6 byte to call new handler ---------------------------------------------------------------------------
- `InitHook_Proc()`: jmp [dword ptr] call [dword ptr]
### Podsumowanie
Plik `xxH.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 1 klas(y) i zawiera około 7 funkcji wspierających operacje menedżera plików Far Manager.
