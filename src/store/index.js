import Vue from "vue";
import Vuex from "vuex";

import auth from "./AuthModule/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});
