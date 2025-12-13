import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages usually serves from a subdirectory (the repo name).
  // './' ensures assets are loaded relatively, preventing 404 errors.
  base: './', 
})