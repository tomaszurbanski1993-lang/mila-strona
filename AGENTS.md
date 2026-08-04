# Wskazówki dla agentów

## Projekt i weryfikacja

- To statyczna strona Astro 5. Przed przekazaniem zmian uruchom `npm run build`.
- Zachowuj istniejące, niepowiązane zmiany w katalogu roboczym.
- Nie publikuj na Netlify, nie odblokowuj automatycznych deployów i nie wysyłaj
  zmian do zdalnego repozytorium bez wyraźnej decyzji użytkownika.

## Treść i Decap CMS

- Podczas lokalnej pracy z CMS używaj `npm run dev:cms`; zwykłe `npm run dev`
  może połączyć panel z produkcyjnym Git Gateway.
- Każdy plik Markdown z front matter musi mieć poprawny YAML. Wartości z
  cudzysłowami zapisuj przez `\"` albo ujmuj w apostrofy.
- Pliki z `public/images/...` są dostępne w przeglądarce pod `/images/...`.
  Nigdy nie używaj w treści adresu `/public/images/...`.

## Obrazy i wydajność

- Nie dodawaj wielomegabajtowych oryginałów do `public/` bez świadomej decyzji
  i optymalizacji.
- Dla obrazów publikowanych na stronie preferuj responsywne warianty oraz
  WebP/AVIF; miniatury bloga nie powinny wskazywać pełnych oryginałów.
- Obrazom poza pierwszym ekranem dodawaj `loading="lazy"`, `width` i `height`.

## Netlify Identity

- Standardowe logowanie Decap CMS odbywa się pod `/admin/`.
- Na stronie głównej widget Identity może zostać doładowany wyłącznie dla
  tokenów e-mailowych: `invite_token`, `confirmation_token`,
  `recovery_token` i `email_change_token`; po zalogowaniu przekierowuje do
  `/admin/`.
- Przy zmianie domeny produkcyjnej zaktualizuj `currentDomain` w
  `src/data/url.ts`.

## Lokalne plany

- Robocze plany trzymaj w `plans/`. Katalog jest celowo ignorowany przez Git i
  nie należy go dodawać do commitów.
