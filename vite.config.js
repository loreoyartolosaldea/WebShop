import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const host = process.env.WEB_HOST;

  const serverConfig = host
    ? {
        host: '0.0.0.0',
        port: 9000,
        // HMR (Hot Module Replacement) desgaitzen dugu arazoak konpontzeko
        hmr: false,
      }
    : {};

  return {
    plugins: [react()],
    server: serverConfig,
  };
});
