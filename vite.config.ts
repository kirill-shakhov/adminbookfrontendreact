import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Устанавливаем псевдоним '@' для пути к каталогу 'src'
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  }
})
