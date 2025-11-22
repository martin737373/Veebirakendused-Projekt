import { createRouter, createWebHashHistory } from "vue-router";

const MainView = () => import("@views/MainView.vue");
const SignupView = () => import("@views/SignupView.vue");

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
