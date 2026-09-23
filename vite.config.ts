import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: [
        '**/food items photos acc to name of food item/**',
        '**/zauk photos/**',
        '**/scratch/**',
        '**/.vercel/**',
      ],
    },
  },
});
