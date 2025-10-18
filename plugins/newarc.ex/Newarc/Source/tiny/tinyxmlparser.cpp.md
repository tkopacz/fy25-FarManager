# tinyxmlparser.cpp
## English
### Purpose
Main functional areas: core functionality
### Key Classes
- `TiXmlDocument`: Implements TiXmlDocument functionality
- `TiXmlParsingData`: Implements TiXmlParsingData functionality
### Key Functions
- `isalpha()`: Checks condition and returns boolean indicating state
- `isalnum()`: Checks condition and returns boolean indicating state
- `Stamp()`: What else to do? The unicode set is huge
- `Cursor()`: return isalnum( anyByte ); Only used by the document!
- `ConvertUTF32ToUTF8()`: 0xe0 0xe0 to 0xef 3 byte 0xf0 0xf0 to 0xf4 4 byte, 0xf5 and higher invalid This code won't covert this correctly anyway
- `TIXML_LOG()`: Implements TIXML_LOG functionality
- `TiXmlDeclaration()`: Implements TiXmlDeclaration functionality
- `TiXmlComment()`: Implements TiXmlComment functionality
- `TiXmlText()`: Implements TiXmlText functionality
- `TiXmlUnknown()`: Set the parent, so it can report errors
### Summary
The `tinyxmlparser.cpp` file provides essential functionality for core functionality. It defines 2 class(es) and contains approximately 10 function(s) to support the Far Manager file manager operations.

---

## Polski (Polish)
### Cel
Główne obszary funkcjonalne: podstawowa funkcjonalność
### Kluczowe Klasy
- `TiXmlDocument`: Implements TiXmlDocument functionality
- `TiXmlParsingData`: Implements TiXmlParsingData functionality
### Kluczowe Funkcje
- `isalpha()`: Checks condition and returns boolean indicating state
- `isalnum()`: Checks condition and returns boolean indicating state
- `Stamp()`: What else to do? The unicode set is huge
- `Cursor()`: return isalnum( anyByte ); Only used by the document!
- `ConvertUTF32ToUTF8()`: 0xe0 0xe0 to 0xef 3 byte 0xf0 0xf0 to 0xf4 4 byte, 0xf5 and higher invalid This code won't covert this correctly anyway
- `TIXML_LOG()`: Implements TIXML_LOG functionality
- `TiXmlDeclaration()`: Implements TiXmlDeclaration functionality
- `TiXmlComment()`: Implements TiXmlComment functionality
- `TiXmlText()`: Implements TiXmlText functionality
- `TiXmlUnknown()`: Set the parent, so it can report errors
### Podsumowanie
Plik `tinyxmlparser.cpp` zapewnia podstawową funkcjonalność dla podstawowa funkcjonalność. Definiuje 2 klas(y) i zawiera około 10 funkcji wspierających operacje menedżera plików Far Manager.
