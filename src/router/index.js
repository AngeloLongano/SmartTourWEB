import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";

import DefaultLayout from "../layout/DefaultLayout.vue";
import SmartTourLayout from "../layout/SmartTourLayout.vue";

import SmartTourListPage from "../views/mainViews/SmartTourListPage.vue";
import MyAgencyPage from "../views/mainViews/MyAgencyPage.vue";
import MainSettingsPage from "../views/mainViews/MainSettingsPage.vue";

import SmartTourBeaconListPage from "../views/smartTourViews/SmartTourBeaconListPage.vue";
import SmartTourContentListPage from "../views/smartTourViews/SmartTourContentListPage.vue";
import SmartTourMapsPage from "../views/smartTourViews/SmartTourMapsPage.vue";
import SmartTourPresentationPage from "../views/smartTourViews/SmartTourPresentationPage.vue";
import SmartTourSettingsPage from "../views/smartTourViews/SmartTourSettingsPage.vue";

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
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/smartTourList",
        name: "SmartTourList",

        component: SmartTourListPage
      },
      {
        path: "/myAgency",
        name: "MyAgency",
        component: MyAgencyPage
      },
      {
        path: "/settings",
        name: "MainSettings",
        component: MainSettingsPage
      }
    ]
  },
  {
    path: "/smartTour/:id",
    component: SmartTourLayout,
    props: true,
    children: [
      {
        path: "/smartTour/:id/presentation",
        name: "SmartTourPresentation",
        alias: "/smartTour/:id",
        props: true,
        component: SmartTourPresentationPage
      },
      {
        path: "/smartTour/:id/maps",
        name: "SmartTourMaps",
        props: true,
        component: SmartTourMapsPage
      },
      {
        path: "/smartTour/:id/contents",
        name: "SmartTourContentList",
        props: true,
        component: SmartTourContentListPage
      },
      {
        path: "/smartTour/:id/beacons",
        name: "SmartTourBeaconList",
        props: true,
        component: SmartTourBeaconListPage
      },
      {
        path: "/smartTour/:id/Settings",
        name: "SmartTourSettings",
        props: true,
        component: SmartTourSettingsPage
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
