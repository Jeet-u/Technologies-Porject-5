import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import { loadEnv } from "vite";

// Cargar variables de entorno personalizadas
dotenv.config();
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

// Log para verificar variables cargadas
console.log("Modo de ejecución:", process.env.NODE_ENV || "development");
console.log("Variables de entorno cargadas:", env);

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

  // Cambiar a 'static' para un sitio completamente estático
  output: "static",

  adapter: vercel({
    edge: false,
    split: false,
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

  vite: {
    envPrefix: "VITE_", // Prefijo para variables de entorno en cliente
    resolve: {
      alias: {
        "emailjs-com": "emailjs-com",
      },
    },
  },

  // Añadir las variables cargadas desde loadEnv para su uso
  server: {
    // Ejemplo: Usa las variables de entorno si necesitas configurarlas en el servidor
    port: env.VITE_CUSTOM_PORT || 3000, // Personaliza el puerto si es necesario
  },
});

// Log para confirmar configuración completada
console.log("Configuración de Astro cargada correctamente.");
