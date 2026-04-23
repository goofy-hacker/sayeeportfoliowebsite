import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sayeeportfoliowebsite/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});