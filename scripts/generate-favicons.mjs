import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Ponowne generowanie z katalogu projektu: node scripts/generate-favicons.mjs
// Wycinamy istniejącą kostkę, zachowując oryginalny rysunek i przezroczystość.
const publicFile = (path) => fileURLToPath(new URL(`../public/${path}`, import.meta.url));
const cube = await sharp(publicFile("images/site/logo-dnm.png"))
  .extract({ left: 488, top: 0, width: 311, height: 320 })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(publicFile("images/site/logo-kostka.png"), cube);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 336"><image x="12.5" y="8" width="311" height="320" href="data:image/png;base64,${cube.toString("base64")}"/></svg>\n`;
await writeFile(publicFile("favicon.svg"), svg);

const iconAtSize = (size) => sharp(Buffer.from(svg))
  .resize(size, size)
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(publicFile("favicon-32x32.png"), await iconAtSize(32));
await writeFile(publicFile("apple-touch-icon.png"), await iconAtSize(180));

// ICO zawiera osobne obrazy PNG dla trzech standardowych rozmiarów.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(iconAtSize));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let imageOffset = directory.length;
images.forEach((image, index) => {
  const entryOffset = 6 + index * 16;
  directory[entryOffset] = sizes[index];
  directory[entryOffset + 1] = sizes[index];
  directory.writeUInt16LE(1, entryOffset + 4);
  directory.writeUInt16LE(32, entryOffset + 6);
  directory.writeUInt32LE(image.length, entryOffset + 8);
  directory.writeUInt32LE(imageOffset, entryOffset + 12);
  imageOffset += image.length;
});
await writeFile(publicFile("favicon.ico"), Buffer.concat([directory, ...images]));
console.log("Wygenerowano kostkę logo oraz favicony SVG, PNG, ICO i ikonę Apple.");
