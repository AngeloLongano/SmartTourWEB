export const namespaced = true;
export const state = {
  type: "public"
};
export const mutations = {
  SET_TYPE(state, type) {
    state.type = type;
  }
};
export const actions = {
  updateType({ commit }, type) {
    if (state.type != type) {
      commit("SET_TYPE", type);
    }
  }
};
export const getters = {};
