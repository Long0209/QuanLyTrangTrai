import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path  from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@private': path.resolve(__dirname, 'src/pages/private'),
      '@chart': path.resolve(__dirname, 'src/chart')
      // Add more aliases as needed
    },
  },
})
