import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // vite.config.js
  server: {
      proxy: {
        '/api': 'http://localhost:3000'
      }
  },

  plugins: [
    tailwindcss(),
    react()],
})
