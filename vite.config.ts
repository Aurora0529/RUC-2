import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const base = process.env.VITE_BASE ?? '/RUC-SGYZ/'
  return {
    base,
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
    plugins: [react()],
  }
})
