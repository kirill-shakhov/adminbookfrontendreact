import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@modules': fileURLToPath(new URL('src/modules', import.meta.url)),
      '@moduleAuth': fileURLToPath(new URL('src/modules/auth', import.meta.url)),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
})
