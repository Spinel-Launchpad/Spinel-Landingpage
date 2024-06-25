import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  AutoImport({
    imports: [
      {
        "react-hot-toast": ["toast"],
      },

    ],
    dts: "./src/auto-imports.d.ts",
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  }
})
