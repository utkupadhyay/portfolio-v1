import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    port: 3001, // set the port number here
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: './src/index.jsx',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    outDir: "./build"
  },
});