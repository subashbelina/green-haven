import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/green-haven/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
}))
