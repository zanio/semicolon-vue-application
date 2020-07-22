import Vue from "vue";
import Router from "vue-router";
import programmaticScrolling from "vuetify/es5/services/goto";
import ResponseLayout from "../components/Layout/ResponseLayout";
import ApplicantLayout from "../components/Layout/ApplicantLayout";

Vue.use(Router);

export default new Router({
  base: "/",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return programmaticScrolling(scrollTo);
  },
  routes: [
    {
      name: "test",
      path: "/test",
      component: () => import("@/components/testing/parentInput/parentInput"),
      meta: { title: "Semicolon - Test Route" }
    },
    {
      name: "apply",
      path: "/apply",
      component: () => import("@/views/RegisterationView"),
      meta: { title: "Semicolon - Application" }
    },
    {
      name: "response",
      path: "/response",
      component: ResponseLayout,
      meta: { title: "Semicolon - Response" }
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: ApplicantLayout,
      meta: { title: "Semicolon - dashboard" }
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
