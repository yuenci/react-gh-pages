import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // change build file name to build ,default is dist
  build: {
    outDir: 'build'
  }
})
