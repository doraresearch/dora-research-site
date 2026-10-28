import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Rivet Ridge Rally is the active production site. The DORA sources and
// holding build remain available through build:dora, but are not published.
export default defineConfig({
  root: fileURLToPath(new URL('./gaming', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
  },
})
