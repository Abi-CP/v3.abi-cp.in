import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Ensure that rollup outputs separate chunks for dynamic imports
      output: {
        manualChunks: undefined, // Allow Rollup to manage chunks automatically
      },
    },
  },
});
