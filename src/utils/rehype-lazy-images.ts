import type { Root } from "hast";
import { visit } from "unist-util-visit";
import { getPublicImageMetadata } from "./public-image-metadata";

/**
 * Rehype plugin uruchamiany podczas kompilowania Markdowna przez Astro.
 *
 * Markdown nie pozwala wygodnie uzupełnić atrybutów każdego obrazu z galerii.
 * Plugin przechodzi więc po gotowym drzewie HTML i dodaje bezpieczne domyślne
 * atrybuty wydajności oraz proporcje lokalnych obrazów.
 */
export function rehypeLazyImages() {
  return async (tree: Root): Promise<void> => {
    const pendingMetadata: Promise<void>[] = [];

    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;

      /**
       * `??=` zachowuje wartości wpisane świadomie w źródłowym Markdownie.
       * Nowe obrazy w galerii są poza pierwszym ekranem, więc ładujemy je
       * leniwie i dekodujemy asynchronicznie.
       */
      node.properties.loading ??= "lazy";
      node.properties.decoding ??= "async";

      const source = node.properties.src;
      if (typeof source !== "string") return;

      pendingMetadata.push(
        getPublicImageMetadata(source).then((metadata) => {
          if (!metadata) return;

          // Nie nadpisujemy ręcznie ustawionych wymiarów obrazu.
          node.properties.width ??= metadata.width;
          node.properties.height ??= metadata.height;
        })
      );
    });

    // Wszystkie odczyty metadanych muszą skończyć się przed wygenerowaniem HTML.
    await Promise.all(pendingMetadata);
  };
}
