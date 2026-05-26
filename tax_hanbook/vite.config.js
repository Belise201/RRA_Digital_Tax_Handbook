import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel uses '/' as base path, GitHub Pages uses '/tax_hanbook/'
  base: process.env.VERCEL === '1' ? '/' : (process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/tax_hanbook/' : '/'),
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('jspdf')) return 'export-tools';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-dom') || id.includes('react/') || id.includes('react\\')) {
              return 'react-vendor';
            }
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
