import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.index";
import store from "./store";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import AlertComponent from "./components/Alert/Alert";
import "./registerServiceWorker";

// import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
Vue.use(VueTelInputVuetify, {
  vuetify
});

Vue.component("app-alert", AlertComponent);
ApiService.init();

// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
