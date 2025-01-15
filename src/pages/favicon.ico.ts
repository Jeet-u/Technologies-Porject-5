import type { APIRoute } from "astro";
import path from "node:path";
import fs from "fs";

const faviconSrc = path.resolve("src/images/icon.png");

export const GET: APIRoute = async () => {
  // Leemos la imagen desde el sistema de archivos
  const favicon = fs.readFileSync(faviconSrc);

  // Simplemente devolvemos la imagen como ICO
  return new Response(favicon, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
