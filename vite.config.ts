import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'site',
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [{ find: /^@anivire\/kata-ui$/, replacement: fileURLToPath(new URL('./src/index.ts', import.meta.url)) }],
  },
  build: {
    outDir: '../dist-site',
    emptyOutDir: true,
  },
})
