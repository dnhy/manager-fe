import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./style.css";
import globalComp from "@/components";
import { importAllSvgIcons } from "@/components";
importAllSvgIcons();

createApp(App).use(store).use(router).use(globalComp).mount("#app");
