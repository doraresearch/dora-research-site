import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    // Flat output (research.html, zora.html) so the extensionless canonical URLs resolve on Cloudflare Pages without a trailing-slash redirect.
    dirStyle: 'flat',
    formatting: 'none',
    // vite-react-ssg prepends the Head output at <head>; hoist the charset back to the first bytes.
    onPageRendered: (_route: string, html: string) =>
      html.replace(/\s*<meta charset="UTF-8"\s*\/?>/i, '').replace('<head>', '<head><meta charset="UTF-8">'),
  },
})
