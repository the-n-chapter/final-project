import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vite.dev/config/
export default defineConfig({
  // base: "/final-project",
  plugins: [
    react(), 
    visualizer({ open: true }),
    ViteImageOptimizer({
      // Optimize during build
      jpg: { quality: 80 }, // Reduce JPG quality
      png: { quality: 85 }, // Optimize PNG
      webp: { quality: 85, lossless: false }, // Convert to WebP
      svg: { // Add SVG optimization
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false, // Keep viewBox for responsive SVGs
              },
            },
          },
        ],
      },
      includePublic: true, // Process public/ folder
      cache: false, // Disable cache for fresh builds
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
