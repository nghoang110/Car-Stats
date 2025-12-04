import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.bin'],
  server: {
    fs: {
      // Cho phép serve file từ thư mục assets
      allow: ['..']
    }
  }
})
