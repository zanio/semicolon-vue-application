import Vue from "vue";
import App from "./App_One.vue";
// import router from "./router";
// import store from "./store";

import "./registerServiceWorker";

// import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import vuetify from "./plugins/vuetify";



Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);



ApiService.init();

// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );

new Vue({
  // router,
  // store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
