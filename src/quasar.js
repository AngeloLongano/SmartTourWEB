import Vue from "vue";

import "./styles/quasar.scss";
// import lang from "quasar/lang/(it).js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import {
  Quasar,
  QAvatar,
  QScrollArea,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QForm,
  Ripple,
  Notify,
  QLayout,
  QTabPanel,
  QTabPanels,
  QTabs,
  QTab,
  QSeparator,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel
} from "quasar";

Vue.use(Quasar, {
  config: {
    ripple: {}
  },
  components: {
    QAvatar,
    QScrollArea,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QForm,
    QLayout,
    QTabPanel,
    QTabPanels,
    QTabs,
    QTab,
    QSeparator,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel
  },
  directives: {
    Ripple
  },
  plugins: {
    Notify,
    Ripple
  }
});
