import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

export default defineConfig({
  // URL base del sitio
  site: "https://github.com/Jeet-u",
  
  // Configuración para imágenes remotas
  image: {
    domains: ["images.unsplash.com"],
  },

  // Configuración de localización (i18n)
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

  // Prefetch activado
  prefetch: true,

  // Habilitar SSR
  output: "server",

  // Configuración de build
  build: {
    client: "./dist/client",
    server: "./dist/server",
  },

  // Adaptador y configuraciones adicionales
  adapter: vercel({
    edge: false,
    split: false,
  }),

  // Integraciones
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
