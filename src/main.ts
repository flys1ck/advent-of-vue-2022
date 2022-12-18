import { createApp } from "vue";
import I18n from "./plugins/i18n";
import App from "./day09/App.vue";
import "./tailwind.css";

createApp(App).use(I18n).mount("#app");
