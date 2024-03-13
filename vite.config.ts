import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081,
    open: true
  },

  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },

  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";` // 对应的scss文件路径
      }
    }
  }
})
