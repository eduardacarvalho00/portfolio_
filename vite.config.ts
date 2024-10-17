import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@componentsHome": path.resolve(
        __dirname,
        "./src/components/SectionsHome"
      ),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@env": path.resolve(__dirname, "./src/env"),
      "@errors": path.resolve(__dirname, "./src/errors"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@locale": path.resolve(__dirname, "./src/locale"),
      "@mutations": path.resolve(__dirname, "./src/mutations"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@queries": path.resolve(__dirname, "./src/queries"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@validations": path.resolve(__dirname, "./src/validations"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
