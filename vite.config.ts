import * as path from 'path';
import react from '@vitejs/plugin-react';

import { type PluginOption, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ] as PluginOption[],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react'], // react 가 없다면 안써도 됨
      output: {
        globals: {
          react: 'React'
        },
        entryFileNames: 'index.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'index.[ext]'
      }
    },
    commonjsOptions: {
      esmExternals: ['react']
    }
  }
});
