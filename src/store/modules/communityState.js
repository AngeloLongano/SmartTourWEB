export const namespaced = true;
export const state = {
  list: []
};
export const mutations = {
  SET_LIST(state, list) {
    state.list = list;
  }
};
export const actions = {
  fetchList({ commit }) {
    let list;
    //call to service
    if (list != null) {
      commit("SET_LIST", list);
    }
  }
};
export const getters = {
  getById: state => id => {
    return state.list.find(item => item.id === id);
  }
};
