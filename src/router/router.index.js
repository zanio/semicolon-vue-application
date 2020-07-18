import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: "/",
  routes: [
    {
      name: "welcome",
      path: "/welcome",
      component: () => import("@/views/HelloWorld"),
      meta: { title: "Semicolon - Welcome" }
    },
    {
      name: "apply",
      path: "/apply",
      component: () => import("@/views/RegisterationView"),
      meta: { title: "Semicolon - Application" }
    },
    {
      name: "Create Password",
      path: "/create-password",
      component: () => import("@/views/CreatePasswordView"),
      meta: { title: "Semicolon - Create A Password" }
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("@/views/LoginView"),
      meta: { title: "Semicolon - Login" }
    },

    {
      name: "reset-password",
      path: "/reset-password",
      component: () => import("@/views/ResetPasswordView"),
      meta: { title: "Semicolon - Reset Password" }
    }
  ],
  mode: "history"
});
