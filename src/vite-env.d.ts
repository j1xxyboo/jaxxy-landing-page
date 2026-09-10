interface ImportMetaEnv {
  readonly VITE_PICSART_API_KEY?: string;
  readonly VITE_ADMIN_PASSCODE?: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
