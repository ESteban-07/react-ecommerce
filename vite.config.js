import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  base: '/react-ecommerce/',
  plugins: [react(), jsconfigPaths()],
});
