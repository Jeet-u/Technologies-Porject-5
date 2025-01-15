import type { APIRoute } from "astro";
import { createCanvas, loadImage } from "canvas"; // Usamos canvas para redimensionar
import pngToIco from "png-to-ico"; // Usamos png-to-ico para generar el archivo .ico
import path from "node:path";

const faviconSrc = path.resolve("src/images/icon.png");

export const GET: APIRoute = async () => {
  const sizes = [16, 32];

  // Redimensionamos las imC!genes
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      const image = await loadImage(faviconSrc);
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, size, size);
      return canvas.toBuffer("image/png");
    }),
  );

  // Convertimos las imC!genes PNG a ICO
  const icoBuffer = await pngToIco(buffers);

  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
