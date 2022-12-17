import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
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
    VueI18n({ include: "src/day08/locales/**" }),
  ],
});
