import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression({ algorithm: 'brotliCompress' })],
  server: {
    port: 8080,
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        plugins: [
          visualizer({
            filename: 'dist/bundle-analysis.html',
            title: 'Bundle Analysis',
            gzipSize: true,
            brotliSize: true,
          }),
        ],
      },
    },
  },
});
