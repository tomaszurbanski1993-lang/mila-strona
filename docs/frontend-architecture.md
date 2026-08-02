# Dzieciaki na Miłej — architektura frontendu

Status: wersja 1.0 po pierwszej implementacji

Aktualizacja: 2 sierpnia 2026 r.

Branch referencyjny: `codex/frontend-layout-v1`

Dokument opisuje trwałe decyzje architektoniczne frontendu. Bieżący stan przekazania, znane blokery i proponowaną kolejność dalszych prac zawiera [frontend-handoff.md](./frontend-handoff.md).

## 1. Zakres i podział odpowiedzialności

Frontend odpowiada za:

- architekturę informacji i mapę tras;
- layout, responsywność i dostępność interfejsu;
- wspólne komponenty Astro;
- widoki stron statycznych, list treści i artykułów;
- prezentację danych kontaktowych i CTA;
- podstawowe przekierowania ze starych adresów;
- dobór, optymalizację i opis zdjęć użytych w layoutach.

Backend i migracja odpowiadają za:

- treści w `src/content/blog/` i `src/content/news/`;
- oczyszczanie archiwalnych wpisów oraz YAML;
- konfigurację Decap CMS i proces publikacji;
- decyzje dotyczące komentarzy ze starego WordPressa;
- weryfikację danych prawnych i medycznych po stronie właścicieli;
- finalne łączenie zmian migracyjnych z frontendem.

Frontend nie powinien poprawiać danych migracyjnych doraźnie w widokach, z wyjątkiem bezpiecznej normalizacji ich prezentacji.

## 2. Model produktu

- Dwa równorzędne gabinety pod jedną marką: logopedyczny Anny Strus i pediatryczny Pawła Strusa.
- Działalność lokalna, prowadzona stacjonarnie w Warce.
- Bez formularza i rezerwacji online; zapis przez telefon lub SMS.
- Dane obu gabinetów zawsze prezentowane oddzielnie.
- Blog i Aktualności pozostają osobnymi działami.
- Decap CMS służy wyłącznie do publikowania bloga i aktualności.
- Strony usługowe i dane globalne pozostają w kodzie.
- Cennik nie jest publikowany; widok informuje o dostępności szczegółów w gabinecie.
- Brak opinii pacjentów i niepotwierdzonych danych liczbowych.

## 3. Trasy

### Kanoniczne

```text
/
/o-nas/
/logopeda/
/logopeda/neuroflow-ats/
/logopeda/karmienie-i-zywienie/
/logopeda/elektrostymulacja/
/pediatra/
/blog/
/blog/[slug]/
/aktualnosci/
/aktualnosci/[slug]/
/kontakt/
/polityka-prywatnosci/       # do wykonania
/rodo/logopeda/              # do wykonania
/rodo/pediatra/              # do wykonania
/admin/
```

### Zgodność ze starymi adresami

- `/pediatria/` → `/pediatra/`;
- `/logopedia/` → `/logopeda/`;
- `/logopedia/elektrostymulacja/` → `/logopeda/elektrostymulacja/`;
- `/logopedia/karmienie/` → `/logopeda/karmienie-i-zywienie/`;
- `/logopedia/neuroflow-ats/` → `/logopeda/neuroflow-ats/`;
- stare strony konsultacji, diagnozy, terapii i kinesiotapingu → `/logopeda/#oferta`.

Pełny inwentarz historycznych URL-i nadal powinien zostać wykonany przed produkcyjnym wdrożeniem.

## 4. Stack i zasady wykonania

- Astro 5 bez dodatkowego frameworka klienckiego.
- HTML generowany statycznie.
- Mała interakcja menu realizowana lokalnym skryptem komponentu Astro.
- Tokeny wizualne w `src/styles/tokens.css`.
- Globalne podstawy i layout w `src/styles/global.css`.
- Style widoków rozdzielone według obszaru produktu.
- Dane globalne i treści stron usługowych w modułach `src/data/*.ts`.
- Treści redakcyjne pobierane przez kolekcje Astro.

Hydrację lub framework kliencki dodajemy dopiero wtedy, gdy pojawi się funkcja, której nie można sensownie zrealizować w HTML, CSS i małym skrypcie lokalnym.

## 5. Struktura komponentów

```text
src/
  components/
    layout/
      Header.astro
      Footer.astro
    ui/
      Container.astro
      Button.astro
    sections/
      Hero.astro
      PracticeCards.astro
      ValuesGrid.astro
      LatestContent.astro
      ContactSection.astro
      LocationSection.astro
    knowledge/
      KnowledgeList.astro
      KnowledgePost.astro
    services/
      SpeechServicePage.astro
  data/
    site.ts
    navigation.ts
    home.ts
    logopeda.ts
    logopeda-services.ts
    pediatra.ts
  layouts/
    BaseLayout.astro
  styles/
    tokens.css
    global.css
    start.css
    profile.css
    service.css
    blog.css
    about.css
    contact.css
```

Najważniejsza zasada: wspólny komponent powstaje dla powtarzającej się struktury, a nie tylko dla podobnego wyglądu. Dlatego blog i aktualności współdzielą szablony wiedzy, a trzy rozbudowane usługi logopedyczne korzystają z jednego szablonu usługi.

## 6. Model danych

### Dane globalne

`src/data/site.ts` jest źródłem danych używanych w wielu miejscach:

- nazwa i opis marki;
- adres i link do mapy;
- dane obu gabinetów;
- numery telefonów i adresy e-mail;
- funkcje budujące linki `tel:` i `sms:`.

Zmiana danych kontaktowych powinna zaczynać się od weryfikacji `src/data/contact.ts` i `src/data/site.ts`, aby header, CTA, kontakt i footer pozostały spójne.

### Blog i Aktualności

Kolekcje Astro pozostają w:

```text
src/content/blog/
src/content/news/
```

Widoki zakładają pola: `title`, `description`, `date`, opcjonalne `image`, `tags` oraz `draft`.

Ścieżki obrazów odziedziczone ze starej witryny, które zaczynają się od `/public/`, są normalizowane podczas renderowania. To rozwiązanie przejściowe; docelowo dane powinny zostać oczyszczone przez migrację.

## 7. System wizualny

Interfejs jest oparty na istniejącym logo i jasnej sesji zdjęciowej właścicieli.

Główne role kolorystyczne:

| Rola | Wartość |
| --- | --- |
| tekst | `#29272d` |
| fiolet główny | `#59388e` |
| fiolet ciemny | `#42266f` |
| turkus | `#008f98` |
| róż | `#d91d59` |
| żółty | `#f9bc39` |
| tło strony | `#fffdfb` |
| tło miękkie | `#f7f3f8` |

Zasady:

- dużo jasnej przestrzeni i czytelna hierarchia;
- profesjonalnie i ciepło, bez infantylizacji;
- zdjęcia specjalistów ważniejsze niż ozdobne grafiki;
- karty używane tylko wtedy, gdy wspierają skanowanie treści;
- wyraźny focus klawiatury i obsługa `prefers-reduced-motion`;
- responsywność bez osobnej mobilnej wersji treści.

## 8. Usługi logopedyczne

Podstawowym miejscem oferty jest `/logopeda/#oferta`.

Osobne strony otrzymały trzy usługi z rozbudowaną treścią:

- Neuroflow ATS®;
- karmienie i żywienie;
- elektrostymulacja.

Pozostałe usługi pozostają zwięzłymi pozycjami na stronie profilu. Nowa podstrona powinna powstać dopiero wtedy, gdy istnieje zatwierdzona, wystarczająco długa treść i realna potrzeba użytkownika.

Treści medyczne powinny:

- opisywać przebieg i możliwe zastosowanie, nie gwarantowany efekt;
- wyraźnie wskazywać potrzebę kwalifikacji;
- odróżniać ocenę logopedyczną od diagnostyki lekarskiej lub audiologicznej;
- wskazywać potrzebę współpracy interdyscyplinarnej, gdy jest istotna;
- zostać zatwierdzone przez właściciela gabinetu przed publikacją.

## 9. Dostępność i zachowanie

- Jeden `main` z identyfikatorem `main-content` na każdej stronie.
- Skip link jako pierwszy element interaktywny dokumentu.
- Poprawna hierarchia nagłówków.
- Nawigacja mobilna sterowana przyciskiem z `aria-expanded`.
- FAQ oparte na natywnych elementach `details` i `summary`.
- Widoczne stany focusu.
- Linki telefoniczne, SMS i e-mail zamiast atrap przycisków.
- Obrazy dekoracyjne mają pusty tekst alternatywny, a funkcjonalne — opis celu kadru.

## 10. Warunki przed produkcją

- Naprawić błędny YAML w archiwalnym wpisie `pluszowy-lekarz-czyli-jak-oswoic-dziecko-z-widokiem-kosmity.md`.
- Usunąć albo oznaczyć szkicem wpisy testowe.
- Zweryfikować dane kontaktowe, zakresy usług i informacje organizacyjne.
- Przygotować aktualne dokumenty prawne.
- Wykonać pełny build bez modyfikowania danych w kopii tymczasowej.
- Przetestować klawiaturę, mobile, linki, obrazy, mapę i CTA w przeglądarce.
- Uzgodnić strategię merge z branchem backendowym.
