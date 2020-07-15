import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: "/",
  routes: [
    {
      name: "apply",
      path: "/apply",
      component: () => import("@/views/Apply"),
      meta: { title: "Apply" }
    },
    {
      name: "welcome",
      path: "/welcome",
      component: () => import("@/views/HelloWorld")
    }
  ],
  mode: "history"
});
