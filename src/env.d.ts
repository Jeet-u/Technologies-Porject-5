interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  // Otras variables si es necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
