import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import moment from "moment";
import VCalendar from "v-calendar";
import { Navbar } from "buefy";
import "buefy/dist/buefy.css";

import { CollapsePlugin, CardPlugin, ButtonPlugin } from "bootstrap-vue";
Vue.use(CollapsePlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin)

Vue.use(Navbar);
Vue.use(VueSidebarMenu);
Vue.use(VCalendar);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (!value) return "";
  return moment(value.toString()).format("MM/DD/YYYY hh:mm");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
