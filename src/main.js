import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* Import Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faChartBar, faCheckCircle, faCogs, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Font awesome Library */
library.add(faUserSecret);
library.add(faChartBar);
library.add(faCheckCircle);
library.add(faCogs);
library.add(faSearch);

/* Instância do FontAwesome */
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");