import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@constants': path.resolve(__dirname, './src/consts/'),
      '@contexts': path.resolve(__dirname, './src/contexts/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@types': path.resolve(__dirname, './src/types/'),
      '@scss': path.resolve(__dirname, './src/scss/'),
    },
  },
})
