import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5183',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'build',
  },
});
