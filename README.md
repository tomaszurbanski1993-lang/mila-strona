# mila-strona

# Webpage for speech therapist and pediatrician

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── admin/            # konfiguracja Decap CMS (config.yml)
│   └── images/           # statyczne obrazy (legacy + uploads z CMS)
├── src/
│   ├── content/          # kolekcje treści (blog, news) jako Markdown
│   │   ├── blog/
│   │   ├── news/
│   │   └── config.ts     # schematy kolekcji (Zod)
│   ├── data/             # dane nawigacji i usług
│   ├── layouts/
│   ├── pages/
│   │   ├── admin/        # panel CMS (index.astro)
│   │   ├── blog/
│   │   ├── aktualnosci/
│   │   └── ...
│   └── styles/
├── astro.config.mjs      # konfiguracja Astro
├── netlify.toml          # konfiguracja deployu na Netlify
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

### 💻 Uruchomienie na localhoście

```bash
npm run dev

```

Domyślnie serwer startuje pod adresem [http://localhost:4321/](https://www.google.com/search?q=http://localhost:4321/) (**Astro v5**). W trakcie pracy zmiany w plikach są odświeżane na żywo (**HMR** — _Hot Module Replacement_).

Aby uruchomić stronę **razem z panelem CMS** (Decap CMS, patrz sekcja poniżej):

```bash
npm run dev:cms
```

**Przydatne flagi:**

- **Inny port** (np. gdy port 4321 jest zajęty):

```bash
npm run dev -- --port 3000

```

- **Automatyczne otwarcie przeglądarki**:

```bash
npm run dev -- --open

```

---

### 🏗️ Build produkcyjny

```bash
npm run build

```

Wynik trafia do katalogu `dist/` jako gotowe, statyczne pliki HTML/CSS/JS. Ponieważ `astro.config.mjs` ma domyślne wyjście `output: "static"`, każda strona jest prerenderowana do osobnego pliku (zobaczysz listę generowanych tras w konsoli, np. `/blog/witamy-w-blogu/index.html`).

---

### 👁️ Podgląd zbudowanej wersji

```bash
npm run preview

```

Uruchamia lokalny serwer serwujący zawartość katalogu `dist/` — służy do sprawdzenia, czy build produkcyjny wygląda i działa poprawnie przed wdrożeniem. Domyślnie uruchamia się również pod adresem [http://localhost:4321/](https://www.google.com/search?q=http://localhost:4321/).

---

### 🔍 Sprawdzenie typów (przed buildem/pushem)

```bash
npx astro check

```

Weryfikuje typy TypeScript w plikach `.astro` i `.ts` (wymaga paczki `@astrojs/check`, która jest już zainstalowana jako `devDependency`).

- **Aktualny status:** 0 błędów / 0 ostrzeżeń.

---

### 🔄 Typowy cykl pracy

```bash
npm install          # Jednorazowo (lub po zmianie zależności)
npm run dev          # Praca developerska na localhoście
npm run dev:cms      # Praca developerska + panel CMS pod /admin/
npx astro check      # Opcjonalnie przed commitem — weryfikacja typów
npm run build        # Build produkcyjny do katalogu dist/
npm run preview      # Podgląd zbudowanej wersji przed wdrożeniem

```

---

### ⚙️ Uwagi środowiskowe

- 📦 **Zależności:** Są aktualnie zainstalowane (katalog `node_modules` jest obecny). Przy świeżym klonie repozytorium należy w pierwszej kolejności uruchomić `npm install`.
- 🟢 **Wersja Node.js:** Dla Astro v5 zalecana jest wersja **Node ≥18.14**.
- 🛡️ **Ignorowane pliki:** Katalogi `dist/`, `.astro/` oraz `.netlify/` są generowane automatycznie — nie należy ich commitować do repozytorium (znajdują się w pliku `.gitignore`).

---

## 📝 Zarządzanie treścią (Decap CMS)

Strona korzysta z **Decap CMS** (dawniej Netlify CMS) — headless CMS, który pozwala edytować treść bloga i aktualności przez panel w przeglądarce, bez pisania kodu. Zmiany są zapisywane jako pliki Markdown w repozytorium.

### Struktura plików CMS

```text
public/admin/
├── config.yml          # konfiguracja kolekcji i backendu CMS
└── (index.html usunięty — panel jest w src/pages/admin/index.astro)

src/pages/admin/
└── index.astro         # panel CMS (ładowany pod /admin/)
```

### Kolekcje treści

| Kolekcja | Folder | Obrazki | Opis |
|---|---|---|---|
| **Blog** | `src/content/blog/` | Tak | Wpisy blogowe z okładką i miniaturą |
| **Aktualności** | `src/content/news/` | Nie | Krótkie komunikaty, tylko tekst |

Obie kolekcje mają wspólny schemat: tytuł, opis, data, tagi, flaga wersji roboczej (`draft`) i treść Markdown. Blog dodatkowo ma pole obrazka.

### Tryb lokalny (programowanie)

```bash
npm run dev:cms
```

Odpala jednocześnie:
- **Astro** na `http://localhost:4321/`
- **decap-server** (lokalny proxy Git) na porcie 8081

Panel CMS: `http://localhost:4321/admin/`

W trybie lokalnym **nie ma logowania** — klikasz „Login" i od razu wchodzisz do edytora. Zmiany zapisują się bezpośrednio do plików na dysku (nie do repo Git ani na produkcję). Służy to wyłącznie do testowania panelu.

> Aktywne dzięki `local_backend: true` w `public/admin/config.yml`. Gdy CMS wykryje działanie na localhost, automatycznie łączy się z `decap-server` zamiast z Netlify.

### Tryb produkcyjny (Netlify)

Na wdrożonej stronie panel jest pod `https://<domena>/admin/`. Logowanie odbywa się przez **Netlify Identity** (email + hasło). Tylko osoby zaproszone przez admina w dashboardzie Netlify (Identity → Invite users) mogą się zalogować. Zmiany są commitowane do repo Git przez `git-gateway`.

### Konfiguracja plików

- **`netlify.toml`** — konfiguracja deployu na Netlify (`[build]`: komenda budowania `npm run build`, katalog publikacji `dist/`).
- **`astro.config.mjs`** — konfiguracja Astro (obecnie domyślna, bez dodatkowych integracji).
- **`public/admin/config.yml`** — konfiguracja Decap CMS: backend, ścieżki mediów, definicje kolekcji i pól formularza.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
