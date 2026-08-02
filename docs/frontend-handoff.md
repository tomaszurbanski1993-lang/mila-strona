# Frontend — przekazanie prac

Data przekazania: 2 sierpnia 2026 r.

Repozytorium: `tomaszurbanski1993-lang/mila-strona`

Branch: `codex/frontend-layout-v1`

Commit implementacyjny: `aefde06` (`feat: build frontend information architecture`)

## Co zostało zrobione

Branch zawiera pierwszą kompletną warstwę frontendu serwisu „Dzieciaki na Miłej”:

- wspólny system wizualny i responsywny layout;
- nagłówek, nawigację mobilną, stopkę i CTA;
- stronę główną;
- profil i ofertę logopedy;
- profil pediatry;
- strony O nas oraz Kontakt;
- listy i widoki artykułów dla Bloga oraz Aktualności;
- wspólny szablon rozbudowanych usług logopedycznych;
- strony Neuroflow ATS®, karmienia i żywienia oraz elektrostymulacji;
- nowe, zoptymalizowane zdjęcia w `public/images/site/`;
- przekierowania z części starych tras;
- podstawowe tytuły, opisy i metadane stron;
- obsługę klawiatury, focusu i ograniczenia animacji.

Szczegółowe decyzje znajdują się w [frontend-architecture.md](./frontend-architecture.md).

## Granica odpowiedzialności

Na branchu nie zmieniano:

- plików `src/content/blog/*.md`;
- plików `src/content/news/*.md`;
- konfiguracji Decap CMS;
- schematu kolekcji treści;
- danych migracyjnych w `src/data/pages/`;
- zależności i wersji Astro.

Zmiany dotyczą widoków, komponentów, routingu, danych interfejsu, stylów i obrazów użytych przez frontend.

## Najważniejsze decyzje

- Kanoniczna trasa logopedy: `/logopeda/`.
- Kanoniczna trasa pediatry: `/pediatra/`.
- `/pediatria/` jest trasą przejściową i przekierowuje do `/pediatra/`.
- Stare adresy `/logopedia/...` przekierowują do nowych usług albo sekcji `/logopeda/#oferta`.
- Kontakt do gabinetów jest rozdzielony; nie ma wspólnego formularza.
- Nie ma rezerwacji online.
- Tylko trzy rozbudowane usługi mają osobne podstrony.
- Blog i Aktualności pozostają oddzielnymi działami, ale używają wspólnego kodu widoków.
- Frontend nie poprawia treści migracji. Normalizuje jedynie stare ścieżki obrazów `/public/...` podczas renderowania.

## Walidacja

Frontend został sprawdzony w kopii roboczej z jednorazową korektą znanego błędu YAML:

```text
npm run build
64 strony wygenerowane poprawnie

npx astro check
0 błędów, 0 ostrzeżeń, 0 podpowiedzi

git diff --check
bez błędów
```

Nie należy traktować tymczasowej korekty jako zmiany w repozytorium — oryginalny wpis pozostał nietknięty.

## Znany bloker

Bezpośredni build repozytorium blokuje niepoprawny YAML w pliku:

```text
src/content/blog/pluszowy-lekarz-czyli-jak-oswoic-dziecko-z-widokiem-kosmity.md
```

Po naprawie należy uruchomić ponownie:

```bash
npm ci
npm run build
npx astro check
```

## Treści wymagające oczyszczenia

- W Aktualnościach są wpisy testowe i treści demonstracyjne.
- Część opisów archiwalnych jest bardzo długa albo zawiera pozostałości starego WordPressa.
- Część obrazów wewnątrz treści Markdown nadal używa ścieżek `/public/images/...`.
- Stara polityka prywatności opisuje komentarze, sklep, logowanie i integracje, których nowy frontend nie posiada.
- Klauzule RODO wymagają weryfikacji przez właścicieli lub osobę odpowiedzialną za treść prawną.
- Dane o godzinach, sposobie zapisu, cenniku i bieżących rolach zawodowych powinny zostać zatwierdzone.

## Brakujące widoki

Do wykonania po otrzymaniu zatwierdzonych treści:

```text
/polityka-prywatnosci/
/rodo/logopeda/
/rodo/pediatra/
```

Nie należy przepisywać obecnych dokumentów prawnych „na oko”. Można przygotować ich layout, ale finalna treść musi zostać zatwierdzona.

## Proponowana kolejność dalszej pracy

1. Naprawić błędny YAML i potwierdzić pełny build na właściwym repozytorium.
2. Oczyścić oraz oznaczyć wpisy testowe w Blogu i Aktualnościach.
3. Zweryfikować dane obu gabinetów oraz treści medyczne.
4. Dostarczyć aktualne dokumenty prawne i podłączyć brakujące trasy.
5. Sporządzić pełną tabelę stary URL → nowy URL.
6. Wykonać testy przeglądarkowe na desktopie i telefonie.
7. Sprawdzić dostępność klawiaturą, kontrast, obrazy, linki, CTA i mapę.
8. Uzgodnić merge brancha frontowego ze zmianami backendowymi.

## Miejsca najczęstszych zmian

| Potrzeba | Plik lub katalog |
| --- | --- |
| telefony, e-maile, adres | `src/data/contact.ts`, `src/data/site.ts` |
| nawigacja | `src/data/navigation.ts` |
| strona główna | `src/pages/index.astro`, `src/data/home.ts` |
| oferta logopedy | `src/data/logopeda.ts` |
| rozbudowane usługi | `src/data/logopeda-services.ts` |
| strona pediatry | `src/data/pediatra.ts`, `src/pages/pediatra/index.astro` |
| blog i aktualności | `src/components/knowledge/`, odpowiednie pliki `src/pages/` |
| kolory i wymiary | `src/styles/tokens.css` |
| globalny layout | `src/layouts/BaseLayout.astro`, `src/styles/global.css` |
| zdjęcia frontendu | `public/images/site/` |

## Uwaga przy merge

Branch powstał na bazie `ms-logopeda-site-scraping`. Największe ryzyko konfliktów dotyczy:

- `src/layouts/BaseLayout.astro`;
- `src/pages/blog/` i `src/pages/aktualnosci/`;
- `src/pages/index.astro`;
- `src/styles/global.css` i `src/styles/blog.css`;
- `src/data/navigation.ts` i `src/data/services.ts`.

Jeśli backend zmieni model kolekcji, najpierw należy dopasować typy i mapowanie danych w komponentach `KnowledgeList.astro` oraz `KnowledgePost.astro`, a dopiero potem rozwiązywać konflikty wizualne.
