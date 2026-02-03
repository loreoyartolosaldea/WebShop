import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const host = process.env.WEB_HOST;

  const serverConfig = host
    ? {
        host: '0.0.0.0',
        port: 9000,
        hmr: false,
        allowedHosts: true, // Zerbitzari moduan onartzeko
      }
    : {
        allowedHosts: true,
      };

  return {
    plugins: [react()],
    server: serverConfig,
    preview: {
      allowedHosts: true, // Render-ek erabiltzen duen 'preview' moduan onartzeko
      port: 10000,       // Render-ek askotan portu hau erabiltzen du
      host: true         // Kanpoko konexioak onartzeko
    }
  };
});
