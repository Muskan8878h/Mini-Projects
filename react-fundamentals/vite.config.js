import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // Force IPv4 instead of ::1
    port: 3000,         // Change default port from 5173 to 3000
  },
})
