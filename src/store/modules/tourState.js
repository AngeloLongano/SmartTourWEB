export const namespaced = true;
export const state = {
  baseList: [
    {
      id: 1,
      title: "BASE TOUR #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contents: [],
      detectionContents: []
    },
    {
      id: 2,
      title: "BASE TOUR #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contents: [],
      detectionContents: []
    }
  ],
  liveList: [
    {
      id: 1,
      title: "LIVE TOUR #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contents: [],
      detectionContents: []
    },
    {
      id: 2,
      title: "LIVE TOUR #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contents: [],
      detectionContents: []
    }
  ]
};
export const mutations = {
  SET_BASE_LIST(state, baseList) {
    state.baseList = baseList;
  },
  SET_LIVE_LIST(state, liveList) {
    state.liveList = liveList;
  }
};
export const actions = {
  fetchList({ commit }) {
    let baseList;
    let liveList;
    //call to service
    if (baseList != null) {
      commit("SET_BASE_LIST", baseList);
    }
    if (liveList != null) {
      commit("SET_LIVE_LIST", liveList);
    }
  }
};
export const getters = {
  getBaseById: state => id => {
    return state.Baselist.find(item => item.id === id);
  },
  getLiveById: state => id => {
    return state.Livelist.find(item => item.id === id);
  }
};
