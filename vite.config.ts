import { resolve, relative } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin()
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
      ],
    },
    rollupOptions: {
      external: ['react'],
      output: [{
        format: 'es',
        chunkFileNames: '[name].js',
        manualChunks(id, { getModuleInfo }) {
          if (id.endsWith('first.ts')) return 'first';
          if (id.endsWith('second.ts')) return 'second';
        },
      }],
    },
  },
});
