import ApiService from "@/services/ApiService.js";
export const namespaced = true;
export const state = {
  user: null
};
export const mutations = {
  SET_USER(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    ApiService.setToken(userData.token);
  },
  CLEAR_USER() {
    localStorage.removeItem("user");
    location.reload();
  }
};
export const actions = {
  autoLogin({ commit }, user) {
    commit("SET_USER", user);
  },
  login({ commit }, credentials) {
    return ApiService.login(credentials).then(({ data }) => {
      commit("SET_USER", data);
    });
  },
  logout({ commit }) {
    commit("CLEAR_USER");
  }
};
export const getters = {
  loggedIn(state) {
    return !!state.user;
  }
};
