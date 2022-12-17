import { createApp } from "vue";
import I18n from "./plugins/i18n";
import App from "./day08/App.vue";
import "./tailwind.css";

createApp(App).use(I18n).mount("#app");
