import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import sharp from "sharp";

/** Publiczna ścieżka URL odpowiadająca katalogowi `public/images`. */
const PUBLIC_IMAGE_URL_PREFIX = "/images/";

/** Bezwzględna ścieżka do obrazów, które mogą zostać odczytane podczas builda. */
const publicImagesDirectory = resolve(process.cwd(), "public", "images");

/**
 * Wymiary źródłowego pliku obrazu.
 *
 * Są zapisywane jako atrybuty HTML `width` i `height`, dzięki czemu
 * przeglądarka może zarezerwować miejsce przed pobraniem obrazu.
 */
export interface PublicImageMetadata {
  width: number;
  height: number;
}

/**
 * Pamięć podręczna zapytań do Sharp.
 *
 * Ten sam obraz często występuje jako okładka i w treści. Przechowujemy
 * obietnicę, aby odczytać jego metadane z dysku tylko raz w trakcie builda.
 */
const metadataCache = new Map<
  string,
  Promise<PublicImageMetadata | undefined>
>();

/**
 * Odczytuje rozmiar z adresu Picsum, który zawiera go wprost w URL-u.
 *
 * Nie pobieramy zewnętrznych plików podczas builda. Obsługujemy wyłącznie
 * bezpieczny przypadek Picsum, gdzie wymiary są częścią adresu.
 */
function getPicsumImageMetadata(source: string): PublicImageMetadata | undefined {
  const match = source.match(
    /^https:\/\/picsum\.photos\/(?:seed\/[^/]+|id\/\d+)\/(\d+)\/(\d+)(?:[/?#]|$)/
  );

  return match
    ? { width: Number(match[1]), height: Number(match[2]) }
    : undefined;
}

/**
 * Zmienia adres `/images/...` na ścieżkę na dysku.
 *
 * Sprawdzenie prefiksu chroni przed odczytem plików spoza `public/images`,
 * nawet gdyby adres w Markdownzie zawierał próbę przejścia do katalogu wyżej.
 */
function getLocalImagePath(source: string): string | undefined {
  let relativePath: string;

  try {
    relativePath = decodeURIComponent(source.slice(PUBLIC_IMAGE_URL_PREFIX.length));
  } catch {
    return undefined;
  }

  const filePath = resolve(publicImagesDirectory, relativePath);
  const isInsidePublicImages = filePath.startsWith(
    `${publicImagesDirectory}${sep}`
  );

  return isInsidePublicImages && existsSync(filePath) ? filePath : undefined;
}

/**
 * Zwraca rzeczywiste wymiary obrazu wskazanego przez źródło HTML/Markdown.
 *
 * - pliki spod `/images/` są odczytywane lokalnie przez Sharp;
 * - adresy Picsum są obsługiwane bez sieci;
 * - pozostałe zewnętrzne lub nieistniejące pliki celowo pozostają bez zmian.
 */
export async function getPublicImageMetadata(
  source: unknown
): Promise<PublicImageMetadata | undefined> {
  if (typeof source !== "string") return undefined;

  if (!source.startsWith(PUBLIC_IMAGE_URL_PREFIX)) {
    return getPicsumImageMetadata(source);
  }

  const cachedMetadata = metadataCache.get(source);
  if (cachedMetadata) return cachedMetadata;

  const filePath = getLocalImagePath(source);
  if (!filePath) return undefined;

  const metadata = sharp(filePath, { animated: true })
    .metadata()
    .then(({ width, height }) =>
      width && height ? { width, height } : undefined
    )
    // Uszkodzony obraz nie powinien przerywać całego builda strony.
    .catch(() => undefined);

  metadataCache.set(source, metadata);
  return metadata;
}
