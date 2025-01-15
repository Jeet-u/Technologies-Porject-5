import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

export default defineConfig({
  site: "https://github.com/Jeet-u",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    fallback: {
      es: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  output: "server", // Habilitamos SSR
  adapter: vercel({
    edge: false, // Cambiar a true si quieres usar funciones Edge
    split: false, // Agrupar funciones en un solo archivo
  }),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
});
