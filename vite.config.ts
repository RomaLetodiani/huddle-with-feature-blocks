import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/huddle-landing-page-with-alternating-feature-blocks',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
