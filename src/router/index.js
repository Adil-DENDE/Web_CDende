import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cars",
      name: "cars",
      component: () => import("../views/CarPage.vue"),
    },
    {
      path: "/",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Auth/RegisterView.vue")
    },
    {
      path: "/recover",
      name: "pwd-recover",
      component: ()=> import("../views/Auth/RecoverPwdView.vue")
    },
    {
      path: "/message",
      name: "message",
      component: ()=> import("../views/MessagesPage.vue")
    }
  ],
});

export default router;
