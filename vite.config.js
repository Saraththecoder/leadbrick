import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit (images are large)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor libs into separate chunks for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    // Generate source maps for debugging (set to false for smaller builds)
    sourcemap: false,
    // Ensure assets are properly named
    assetsDir: 'assets',
  },
  // Ensure base path is correct for Vercel
  base: '/',
})
