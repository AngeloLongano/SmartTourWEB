import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    smartTours: [
      {
        id: 1,
        name: "pippo",
        items: [
          {
            id: 1,
            name: "prova 1"
          },
          {
            id: 2,
            name: "prova 2"
          }
        ],
        beacons: [
          {
            id: 1,
            name: "beacon bello"
          }
        ]
      },
      {
        id: 2,
        name: "pipppo",
        items: [
          {
            id: 1,
            name: "prov 1"
          },
          {
            id: 2,
            name: "prov 2"
          }
        ],
        beacons: [
          {
            id: 1,
            name: "beacon bello bello"
          }
        ]
      },
      {
        id: 3,
        name: "pipppppo",
        items: [],
        beacons: []
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
