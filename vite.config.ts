import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [
        // React Compiler preset ko yahan directly string ke form me use karo
        ["@babel/preset-react", { runtime: "automatic" }]
      ]
    })
  ],
  base: "/rohit-bhardwaj-portfolio/", // ✅ GitHub Pages ke liye base path
});
