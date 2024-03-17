import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/deploy_react_app_github_pages_vercel',
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    port: 3001,
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});