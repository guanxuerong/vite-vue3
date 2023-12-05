import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8085,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    // ↓路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
});
