import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/loginrl",
    name: "loginrl",
    component: () => import("../layout/loginRL.vue"),
    redirect: "login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/login/index.vue"),
      },
      {
        path: "forgotpwd",
        name: "forgotpwd",
        component: () => import("../views/forgotpwd/index.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
  { redirect: "/home", path: "/" },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
