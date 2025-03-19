import * as path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
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
        }
      }
    },
    commonjsOptions: {
      esmExternals: ['react']
    }
  },
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })]
});
