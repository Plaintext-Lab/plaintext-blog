import path from 'node:path';
import stylex from '@stylexjs/unplugin';
import react from '@vitejs/plugin-react';
import type {Plugin} from 'vite';
import {defineConfig} from 'vitest/config';
import stylexOptions from './stylex.config.js';

// Tests compile StyleX with the same options as the production build, so a
// style that fails to compile fails here first.
function stylexForTests(): Plugin {
  const plugin = stylex.vite({...stylexOptions, devMode: 'css-only'}) as Plugin;
  // The plugin's dev-server hook starts a hot-reload polling interval that
  // keeps the Vitest worker alive after the run; tests never need hot reload.
  const withoutDevServer: Plugin = {...plugin};
  delete withoutDevServer.configureServer;
  return withoutDevServer;
}

export default defineConfig({
  plugins: [stylexForTests(), react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
  },
});
