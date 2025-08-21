// import { dirname, resolve } from "path";
// import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/Barbershop/",
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, "index.html"),
    //     nested: resolve(__dirname, "index-body.html"),
    //   },
    // },
  },
});
