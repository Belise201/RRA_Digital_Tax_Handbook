import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel uses '/' as base path, GitHub Pages uses '/tax_hanbook/'
  base: process.env.VERCEL === '1' ? '/' : (process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/tax_hanbook/' : '/'),
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})
