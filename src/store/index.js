import Vue from "vue";
import Vuex from "vuex";

import * as layoutState from "@/store/modules/layoutState";
import * as presentationState from "@/store/modules/presentationState";
import * as communityState from "@/store/modules/communityState";
import * as contentState from "@/store/modules/contentState";
import * as detectionContentState from "@/store/modules/detectionContentState";
import * as mapState from "@/store/modules/mapState";
import * as phraseState from "@/store/modules/phraseState";
import * as quizState from "@/store/modules/quizState";
import * as settingState from "@/store/modules/settingState";
import * as tourState from "@/store/modules/tourState";
import * as userState from "@/store/modules/userState";
import Presentation from "../models/entities/Presentation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layoutState,
    presentationState,
    communityState,
    contentState,
    detectionContentState,
    mapState,
    phraseState,
    quizState,
    settingState,
    tourState,
    userState
  },
  state: {
    smartTour: {
      id: 1,
      title: "BEST SMART TOUR #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
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
  actions: {
    loadData({ dispatch }) {
      dispatch(
        "presentationState/fetchList",
        Presentation.fromObject({
          id: 1,
          title: "ciao"
        }),
        { root: true }
      );
    }
  }
});
