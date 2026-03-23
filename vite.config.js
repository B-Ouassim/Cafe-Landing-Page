import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Cafe-Landing-Page/',  // important: repo name with slashes
  plugins: [react(), tailwindcss()],
})