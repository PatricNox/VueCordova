import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/auth/Login.vue";
import App from "@/views/App.vue";
import Vue from "vue";
import store from "@/store/index";

Vue.use(VueRouter);

export enum ViewName {
  Start = "start",
  UserLogin = "login",
}

const routes: Array<RouteConfig> = [
  {
    path: "/start",
    name: ViewName.Start,
    component: App,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: ViewName.UserLogin,
    component: Login,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// Redirect to login if not authenticated.
router.beforeEach((to, from, next) => {
  // this route requires auth, check if logged in. If not, redirect to login.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: `/${ViewName.UserLogin}`,
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  }

  // If we are authenticated and attempts to visit the login page.
  if (to.name === ViewName.UserLogin && store.getters.isLoggedIn) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
