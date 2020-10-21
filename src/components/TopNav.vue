<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo.jpg" alt="STUD" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" href="#">Home</b-nav-item>
          <b-nav-item to="/timetable" href="#">Timetable</b-nav-item>
          <b-nav-item to="/jobs" href="#">Jobs</b-nav-item>
          <b-nav-item to="habit" href="#">Habit</b-nav-item>
          <b-nav-item to="/settings" href="#">Settings</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script scope>
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
      ]
    };
  }
};
</script>

<style scoped>
#navbar {
  font-family: Montserrat;
}

img {
  height: 48px;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
  font-size: 20px;
  margin-right: 20px;
}
</style>
