<template>
  <b-navbar id="navbar" :menu="menu">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/logo.jpg"
          alt="STUD"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>Home</b-navbar-item>
      <b-navbar-item>Timetable</b-navbar-item>
      <b-navbar-item>Jobs</b-navbar-item>
      <b-navbar-item>Habit</b-navbar-item>
      <b-navbar-item>Settings</b-navbar-item>
    </template>

    <!-- <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary"><strong>Sign up</strong></a>
          <a class="button is-light">Log in</a>
        </div>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Navigation"
        },
        {
          href: "/",
          title: "Home",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-home"
          }
        },
        {
          href: "/timetable",
          title: "Timetable",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-calendar"
          }
        },
        {
          href: "/jobs",
          title: "Jobs",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-briefcase"
          }
        },
        {
          href: "/habit",
          title: "Habit",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-time"
          }
        },
        {
          href: "/Settings",
          title: "Settings",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-cog"
          }
        }
      ],
    };
  }
};
</script>

<style scoped>
#navbar {
  font-family: Montserrat;
  margin: 0px;
  padding: 0px;
  height: 30px;
}

a {
  font-size: 18px !important;
  font-weight: bold;
  padding-top: 0px;
}

.navbar-item img {
  max-height: 45px !important;
  margin-top:10px;
}

.button {
  height: 35px;
  margin: 0px;
}
</style>
