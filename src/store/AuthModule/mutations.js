import JwtService from "@/common/jwt.service";

export default {
  /**
   *
   * @param { object } state
   */
  FETCH_START: (state) => {
    state.isLoading = true;
  },

  SET_ERROR: (state, error) => {
    state.isLoading = false;
    state.errors = error;
  },
  SET_AUTH: (state, user) => {
    state.isAuthenticated = true;
    state.user = user;
    state.isLoading = false;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  PURGE_AUTH: (state) => {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  CLEAR_ERROR: (state) => {
    state.errors = {};
  }
};
