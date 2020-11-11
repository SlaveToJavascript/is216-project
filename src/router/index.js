import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/home",
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
