import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        libInjectCss(),
        dts({
          tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
        }),
      ],
      build: {
        copyPublicDir: false,
        lib: {
          entry: resolve(__dirname, 'lib/main.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react/jsx-runtime'],
          input: Object.fromEntries(
            glob.sync('lib/**/*.{ts,tsx}', {
              ignore: ['lib/**/*.d.ts'],
            }).map((file) => [
              relative(
                'lib',
                file.slice(0, file.length - extname(file).length)
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
          ),
          output: {
            assetFileNames: 'assets/[name][extname]',
            entryFileNames: '[name].js',
          },
        },
      },
    };
  } else {
    // Demo build with index.html
    return {
      plugins: [react()],
      base: './',
      build: {
        outDir: 'dist-demo', // Output separate from library
      },
    };
  }
});
