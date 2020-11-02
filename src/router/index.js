import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: () => import("@/views/Timetable.vue")
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("@/views/Jobs.vue")
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: () => import("@/views/Achievements.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
