# Far Manager

## Přehled

**Far Manager** je správce souborů a archivů pro operační systémy Windows, který pracuje v textovém režimu. Poskytuje jednoduché a intuitivní rozhraní pro operace se soubory včetně prohlížení, úprav, kopírování a přejmenování souborů a adresářů.

### Hlavní funkce

- 🗂️ **Správa souborů**: Kopírování, přesouvání, přejmenování a mazání souborů a adresářů
- 📦 **Práce s archivy**: Podpora různých archivních formátů
- 📝 **Vestavěný editor**: Úprava textových souborů přímo v aplikaci
- 👁️ **Prohlížeč souborů**: Rychlé prohlížení obsahu souborů
- 🔌 **Systém pluginů**: Rozšiřitelnost pomocí Plugin API
- 🖥️ **Textové rozhraní**: Efektivní práce v konzolovém režimu

## Podporované platformy

- Windows (x86, x64, ARM64)

## Podporované kompilátory

- Microsoft Visual C++ (MSVC)
- GCC (MinGW)
- Clang

## Struktura projektu

```
/
├── far/                   # Hlavní zdrojový kód Far Manageru
├── plugins/               # Zdrojový kód pluginů
├── misc/                  # Různé nástroje a instalátory
├── enc/                   # Dokumentace a reference API
├── extra/                 # Další soubory pro distribuci
└── _build/                # Konfigurační soubory pro sestavení
```

## Sestavení

### Požadavky

#### Pro Visual Studio (MSVC):
- Visual Studio 2019 nebo 2022 s nástrojovým řetězcem C++
- Windows SDK

#### Pro MinGW/GCC:
- MinGW-w64 toolchain

### Sestavení s Visual Studio

```bash
cd _build/vc
msbuild /property:Configuration=Release /property:Platform=x64 all.sln
```

### Sestavení s nmake

```bash
# Nastavení prostředí MSVC
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" amd64

# Sestavení Far
cd far
nmake /f makefile_vc
```

### Sestavení s GCC/MinGW

```bash
cd far
mingw32-make -j 4 -f makefile_gcc
```

## Konfigurace sestavení

| Proměnná | Popis |
|----------|-------|
| `DEBUG=1` | Sestavení ladící verze |
| `AMD64=1` | Sestavení pro x64 |
| `ARM64=1` | Sestavení pro ARM64 |
| `CLANG=1` | Použití Clang kompilátoru |
| `PYTHON=1` | Použití Pythonu pro generování jazykových souborů |

## Pluginy

Far Manager podporuje rozšíření pomocí pluginů. Některé dostupné pluginy:

- **FarColorer** - Zvýrazňování syntaxe
- **NetBox** - Síťové protokoly (FTP, SFTP, SCP, WebDAV)
- A mnoho dalších...

Pro sestavení všech pluginů:

```bash
cd plugins
nmake /f makefile_all_vc
```

## Testování

### Spuštění testů maker

```bash
Far.exe -service "macro:test"
```

## Přispívání

1. Dodržujte styl kódu (tabulátory pro odsazení, UTF-8 BOM pro C/C++ soubory)
2. Aktualizujte soubor `far/changelog` s vašimi změnami
3. Spusťte validátor před odesláním:
   ```bash
   cd far
   python tools/source_validator.py
   ```

## Licence

Far Manager je distribuován pod licencí BSD.

## Odkazy

- [Oficiální web Far Manageru](https://farmanager.com/)
- [Dokumentace API pro pluginy](enc/README.md)

---

*Tento soubor je přeložen do češtiny.*
