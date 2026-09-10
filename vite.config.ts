import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // The admin dashboard calls the Picsart gateway from the browser, which
    // blocks cross-origin requests. In dev we proxy through Vite instead.
    proxy: {
      '/picsart': {
        target: 'https://api.picsart.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/picsart/, ''),
      },
    },
  },
});
