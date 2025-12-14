import { createRouter, createWebHashHistory } from "vue-router";
import auth from "@/auth";

const MainView = () => import("@views/Main.vue");
const SignupView = () => import("@views/Signup.vue");
const LoginView = () => import("@views/Login.vue");
const CreatePostView = () => import("@views/CreatePost.vue");

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
  {
    path: "/login",
    name: "logIn",
    component: LoginView,
  },
  {
    path: "/createpost",
    name: "createpost",
    component: CreatePostView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const publicPaths = ["/signup", "/login"];
  const isPublic = publicPaths.includes(to.path);
  if (isPublic) {
    next();
    return;
  }

  const authResult = await auth.authenticated();
  if (!authResult) {
    next("/login");
    return;
  }

  next();
});

export default router;
