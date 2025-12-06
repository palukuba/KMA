import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Minification optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Chunk size optimization
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        article: resolve(__dirname, 'pages/article.html'),
      },
      output: {
        // Manual chunks for better caching
        manualChunks: {
          alpine: ['alpinejs'],
        },
        // Asset naming for cache busting
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
