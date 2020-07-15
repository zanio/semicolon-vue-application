import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "./actions.type";
import {
  SET_AUTH,
  PURGE_AUTH,
  FETCH_START,
  SET_ERROR,
  CLEAR_ERROR
} from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  isLoading: false
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isLoadingUser(state) {
    return state.isLoading;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      context.commit(FETCH_START);
      ApiService.post("savers/new", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
          context.commit(SET_ERROR, error.response.data.errors);
          setTimeout(() => {
            context.commit(CLEAR_ERROR);
          }, 5000);
          reject(error.response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },

  [SET_ERROR](state, error) {
    state.errors = error;
    state.isLoading = false;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.isLoading = false;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  [CLEAR_ERROR](state) {
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
