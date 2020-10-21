import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import moment from 'moment'
import VCalendar from "v-calendar";
Vue.use(VueSidebarMenu);

Vue.use(VCalendar);

Vue.config.productionTip = false;

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  return moment(value.toString()).format('MM/DD/YYYY hh:mm')
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
