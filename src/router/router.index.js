import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: "/",
  routes: [
    {
      name: "welcome",
      path: "/welcome",
      component: () => import("@/views/HelloWorld")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/components/layout/Layout"),
      meta: { title: "Semicolon - Login" }
    },
    {
      name: "apply",
      path: "/apply",
      component: () => import("@/components/layout/Layout"),
      meta: { title: "Semicolon - Application" }
    }
  ],
  mode: "history"
});
