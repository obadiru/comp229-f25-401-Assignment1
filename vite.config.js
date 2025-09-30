import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
      allowedHosts: [
        'comp229-f25-401-assignment1.onrender.com'
      ]
  }
})
