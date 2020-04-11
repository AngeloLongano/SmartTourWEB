import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";

// import DefaultLayout from "../layout/DefaultLayout.vue";
// import SmartTourLayout from "../layout/SmartTourLayout.vue";

import SmartTourListPage from "../views/mainViews/SmartTourListPage.vue";
import AgencyPage from "../views/mainViews/AgencyPage.vue";
import MapsPage from "../views/mainViews/MapsPage.vue";
import MediaPage from "../views/mainViews/MediaPage.vue";
import SmartThingsPage from "../views/mainViews/SmartThingsPage.vue";
import CommunityPage from "../views/mainViews/CommunityPage.vue";
import MainSettingsPage from "../views/mainViews/MainSettingsPage.vue";

import STHomePage from "../views/smartTourViews/STHomePage.vue";
import STListTourPage from "../views/smartTourViews/STListTourPage.vue";
import STQuizPage from "../views/smartTourViews/STQuizPage.vue";
import STAskPage from "../views/smartTourViews/STAskPage.vue";
import STMapPage from "../views/smartTourViews/STMapPage.vue";
import STPresentationPage from "../views/smartTourViews/STPresentationPage.vue";
import STSettingsPage from "../views/smartTourViews/STSettingsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    alias: "/",
    component: LoginPage
  },
  {
    path: "/aboutUs",
    name: "AboutUS",
    component: AboutUsPage
  },

  {
    path: "/smartTourList",
    name: "SmartTourList",
    component: SmartTourListPage
  },
  {
    path: "/agency",
    name: "Agency",
    component: AgencyPage
  },
  {
    path: "/maps",
    name: "Maps",
    component: MapsPage
  },
  {
    path: "/smartThings",
    name: "SmartThings",
    component: SmartThingsPage
  },
  {
    path: "/media",
    name: "Media",
    component: MediaPage
  },
  {
    path: "/community",
    name: "Community",
    component: CommunityPage
  },
  {
    path: "/settings",
    name: "MainSettings",
    component: MainSettingsPage
  },
  //smart tour section
  {
    path: "/smartTour/:id/home",
    name: "SmartTourHome",
    alias: "/smartTour/:id",
    props: true,
    component: STHomePage
  },
  {
    path: "/smartTour/:id/presentation",
    name: "SmartTourPresentation",
    props: true,
    component: STPresentationPage
  },
  {
    path: "/smartTour/:id/map",
    name: "SmartTourMap",
    props: true,
    component: STMapPage
  },
  {
    path: "/smartTour/:id/tours",
    name: "SmartTourListTour",
    props: true,
    component: STListTourPage
  },
  {
    path: "/smartTour/:id/quiz",
    name: "SmartTourQuiz",
    props: true,
    component: STQuizPage
  },
  {
    path: "/smartTour/:id/ask",
    name: "SmartTourAsk",
    props: true,
    component: STAskPage
  },
  {
    path: "/smartTour/:id/Settings",
    name: "SmartTourSettings",
    props: true,
    component: STSettingsPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
