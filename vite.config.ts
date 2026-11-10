import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import { assertSupportedNodeVersion } from './scripts/tooling/environment.ts';

assertSupportedNodeVersion(process.versions.node);

const appRoot = fileURLToPath(new URL('./apps/web', import.meta.url));
const outputDirectory = fileURLToPath(new URL('./dist', import.meta.url));

export default defineConfig({
  root: appRoot,
  build: {
    outDir: outputDirectory,
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
});
