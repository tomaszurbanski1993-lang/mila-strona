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
├── src/
│   └── pages/
│       └── index.astro
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
npx astro check      # Opcjonalnie przed commitem — weryfikacja typów
npm run build        # Build produkcyjny do katalogu dist/
npm run preview      # Podgląd zbudowanej wersji przed wdrożeniem

```

---

### ⚙️ Uwagi środowiskowe

- 📦 **Zależności:** Są aktualnie zainstalowane (katalog `node_modules` jest obecny). Przy świeżym klonie repozytorium należy w pierwszej kolejności uruchomić `npm install`.
- 🟢 **Wersja Node.js:** Dla Astro v5 zalecana jest wersja **Node ≥18.14**.
- 🛡️ **Ignorowane pliki:** Katalogi `dist/` oraz `.astro/` są generowane automatycznie — nie należy ich commitować do repozytorium (upewnij się, że znajdują się w pliku `.gitignore`).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
