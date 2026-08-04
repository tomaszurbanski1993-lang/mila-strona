import { defineConfig } from "astro/config";
import { rehypeLazyImages } from "./src/utils/rehype-lazy-images";

/**
 * Konfiguracja budowania strony Astro.
 *
 * Plugin Rehype uzupełnia obrazy z Markdowna o lazy loading oraz ich
 * rzeczywiste proporcje jeszcze przed zapisaniem statycznego HTML-a.
 */
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});
