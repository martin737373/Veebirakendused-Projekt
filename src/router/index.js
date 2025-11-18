import { createRouter, createWebHashHistory } from "vue-router";

const MainView = () => import("@views/MainView.vue");
const LoginView = () => import("@views/LoginView.vue");

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
