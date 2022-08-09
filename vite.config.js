// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "pages",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pages/index.html"),
      },
    },
  },
});
