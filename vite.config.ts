import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ituturo natin ang "@" sa "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})