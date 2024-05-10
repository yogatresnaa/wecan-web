import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'we-96.png'],
      manifest: {
        name: 'Wecan App',
        start_url: './index.html',
        short_name: 'WecanAPp',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/we-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/we-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/we-128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/we-142.png',
            sizes: '142x142',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/we-152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/we-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },

          {
            src: '/icons/we-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
});
