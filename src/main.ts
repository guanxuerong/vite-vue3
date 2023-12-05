import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/display.css"; // 引入基于断点的隐藏类
import "element-plus/dist/index.css";

// 安装router插件
createApp(App).use(router).use(ElementPlus).mount("#app");
