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

Aby uruchomić stronę **wraz z panelem CMS** (Decap CMS) w trybie lokalnym — posty zapisują się na dysk, bez logowania i bez wpływu na produkcję:

```bash
npm run dev:cms
```

Uruchamia jednocześnie **Astro** (`http://localhost:4321/`) oraz **decap-server** (lokalne proxy Git na porcie 8081). Panel CMS jest pod `http://localhost:4321/admin/` (szczegóły w sekcji „Zarządzanie treścią"). Zwykły `npm run dev` odpala samo Astro — panel `/admin/` wtedy przełączy się na backend produkcyjny (`git-gateway` + Netlify Identity).

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
npm run dev:cms      # Praca na localhoście + panel CMS w trybie lokalnym (zapis na dysk, bez logowania)
npm run dev          # Tylko Astro (panel /admin/ przełączy się na backend produkcyjny — ostrożnie)
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
└── config.yml          # konfiguracja kolekcji i backendu CMS (local_backend: true)

src/pages/admin/
└── index.astro         # panel CMS (ładowany pod /admin/) + inicjalizacja Netlify Identity (tylko produkcja)

src/data/
└── url.ts              # currentDomain — domena produkcyjna używana przez Identity widget

src/layouts/
└── BaseLayout.astro    # globalny skrypt Netlify Identity (obsługa invite token + redirect po logowaniu, tylko produkcja)
```

### Kolekcje treści

| Kolekcja        | Folder              | Obrazki | Opis                                |
| --------------- | ------------------- | ------- | ----------------------------------- |
| **Blog**        | `src/content/blog/` | Tak     | Wpisy blogowe z okładką i miniaturą |
| **Aktualności** | `src/content/news/` | Nie     | Krótkie komunikaty, tylko tekst     |

Obie kolekcje mają wspólny schemat: tytuł, opis, data, tagi, flaga wersji roboczej (`draft`) i treść Markdown. Blog dodatkowo ma pole obrazka.

### Backend i autoryzacja — jak to działa

W `public/admin/config.yml` ustawione jest:

```yaml
local_backend: true

backend:
  name: git-gateway
  branch: main
```

Decap CMS **sam rozróżnia localhost od produkcji** (wynika z `detectProxyServer` w `decap-cms-core/src/actions/config.ts`):

1. **localhost** (`location.hostname` ∈ `["localhost", "127.0.0.1"]`) — Decap pyta `http://localhost:8081/api/v1` (czyli `decap-server`).
   - Jeśli `decap-server` odpowiada → backend zamienia się na **`proxy`**: zapis wyłącznie na dysk, **bez logowania**, **bez commitów do Git**, **bez dotykania produkcji**. Idealne do tworzenia i testowania postów lokalnie.
   - Jeśli `decap-server` nie działa → proxy nie wykryte → Decap zostaje przy `git-gateway` (patrz produkcja poniżej), czyli logowanie Netlify Identity i commity do `main`.
2. **produkcja** (hostname `siup.me`, nie w `allowed_hosts`) — detekcja proxy jest pomijana → Decap używa **`git-gateway`** z autoryzacją przez **Netlify Identity** (email + hasło, tylko zaproszeni użytkownicy). Zmiany commitują się do gałęzi `main` i wyzwalają deploy.

Przełącznikiem trybu jest więc **uruchomienie `decap-server`**, a nie ręczna edycja `config.yml`. `local_backend: true` jest bezpieczne na produkcji, bo detekcja proxy działa tylko na localhost.

Widget **Netlify Identity** jest inicjalizowany **tylko na produkcji** (warunek `location.hostname !== "localhost" && !== "127.0.0.1"` w `src/pages/admin/index.astro` i `src/layouts/BaseLayout.astro`), z `APIUrl` wskazującym na domenę produkcyjną:

```js
const identityApiUrl = `https://${currentDomain}/.netlify/identity`;
// currentDomain = "siup.me" (src/data/url.ts)
window.netlifyIdentity.init({ APIUrl: identityApiUrl });
```

Dzięki temu tryb lokalny jest w pełni offline (nie odpytuje produkcyjnego API Identity), a tryb produkcyjny loguje się przez usługę Identity na `siup.me`.

### Praca z panelem — dwa tryby

#### 🧪 Tryb lokalny (posty tylko u Ciebie na dysku)

```bash
npm run dev:cms
```

Odpala **Astro** (`http://localhost:4321/`) **oraz `decap-server`** (proxy na porcie 8081). Panel: `http://localhost:4321/admin/` → **Login** wchodzi od razu, bez hasła. Zmiany zapisują się do plików Markdown w `src/content/...` na dysku i **nie trafiają do Git ani na produkcję**. Możesz je później normalnie zcommitować ręcznie, gdy zechcesz.

> Jeśli wolisz pracować bez CMS, uruchom zwykły `npm run dev` — panel `/admin/` wtedy nie znajdzie proxy i przełączy się na `git-gateway` (czyli logowanie Identity + commity do `main`), co równoznaczne jest z pracą na produkcji. Używaj tego świadomie.

#### 🚀 Tryb produkcyjny (Netlify)

Na wdrożonej stronie panel jest pod `https://siup.me/admin/`. Logowanie przez **Netlify Identity** — tylko osoby zaproszone przez admina w dashboardzie Netlify (Identity → Invite users). Zmiany commitują się do gałęzi `main` przez `git-gateway` i automatycznie wyzwalają deploy (`netlify.toml`: `npm run build` → publikacja `dist/`).

### 🔒 Bezpieczeństwo panelu na produkcji

- **Netlify Identity → Registration: „Invite only”** (w dashboardzie Netlify) — nikt nie może założyć konta samodzielnie; dostęp mają tylko zaproszeni użytkownicy.
- **git-gateway** wymaga ważnego tokena Identity do wykonywania commitów — bez zalogowania nie da się zapisać żadnych zmian.
- **Widget Identity** ładuje się i inicjalizuje tylko na produkcji; na localhost panel nie kontaktuje się z usługą Identity.
- **Opcjonalne usztywnienie:** w Netlify można dodatkowo ograniczyć dostęp do ścieżki `/admin/` (np. Site access → Role-based redirects / password protection), aby nie wyświetlać nawet strony panelu niezalogowanym. Sam HTML panelu jest statyczny, ale bez zalogowania przez Identity nie pozwala na żadne akcje.
- **`currentDomain`** (`src/data/url.ts`) wskazuje `siup.me` — przy zmianie domeny produkcyjnej zaktualizuj tę wartość, aby logowanie Identity wskazywało na właściwą domenę.

### Konfiguracja plików

- **`netlify.toml`** — konfiguracja deployu na Netlify (`[build]`: komenda budowania `npm run build`, katalog publikacji `dist/`).
- **`astro.config.mjs`** — konfiguracja Astro (obecnie domyślna, bez dodatkowych integracji).
- **`public/admin/config.yml`** — konfiguracja Decap CMS: `local_backend: true` (auto-detekcja localhost), backend `git-gateway` na gałęzi `main`, ścieżki mediów (`public/images/uploads` → `/images/uploads`), definicje kolekcji i pól formularza.
- **`src/data/url.ts`** — `currentDomain` ("siup.me") używany do budowy `APIUrl` dla Netlify Identity w panelu CMS. Przy zmianie domeny produkcyjnej zaktualizuj tę wartość.
- **`src/layouts/BaseLayout.astro`** — globalny skrypt `netlify-identity-widget` (obsługa invite tokenów na każdej stronie + redirect do `/admin/` po logowaniu), aktywny **tylko na produkcji**.
- **`src/pages/admin/index.astro`** — panel Decap CMS + inicjalizacja widgetu Identity z `APIUrl = https://siup.me/.netlify/identity`, aktywna **tylko na produkcji**.
