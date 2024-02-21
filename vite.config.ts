import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081,
    open: true,
    proxy:{
      "/api": {
        target: "http://localhost:9001/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },

  plugins: [react()],
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
