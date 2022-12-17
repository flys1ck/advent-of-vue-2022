import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import SvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dirs: ["src/**/components"],
    }),
    AutoImport({ imports: ["vue"], eslintrc: { enabled: true } }),
    SvgLoader(),
  ],
});
