import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Barbershop/",
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
  },
});
