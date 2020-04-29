import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./quasar";
import "./quasar";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.dispatch("userState/autoLogin", userData);
    }
    axios.interceptors.response.use(
      response => response, // simply return the response
      error => {
        if (error.response.status === 401) {
          //if we catch a 401 error
          this.$store.dispatch("logout"); // forceì a log out
        }
        return Promise.reject(error); // reject thePromise, with the error as the reason
      }
    );
  },
  render: h => h(App)
}).$mount("#app");
