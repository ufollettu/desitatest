import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: process.env.NODE_ENV === "production" ? "" : "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "public/index.html"),
      },
    },
  },
});
