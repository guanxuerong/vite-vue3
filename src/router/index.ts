import { createRouter, createWebHashHistory } from "vue-router";

// 引入
import HelloWorld from "@/components/HelloWorld.vue";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

// 路由信息
let routes = [
  {
    path: "/",
    name: "hello",
    component: HelloWorld,
  },
  {
    path: "/commodity/management",
    name: "home",
    component: Home,
  },
  {
    path: "/commodity/classification",
    name: "about",
    component: About,
  },
];

// 路由器
const router = createRouter({
  history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__), 
  routes,
});

export default router;
