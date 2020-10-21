<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-light">
      <b-navbar-brand href="#">
        <img
          src="../assets/images/logo.jpg"
          alt="STUD"
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/timetable">Timetable</b-nav-item>
          <b-nav-item href="/jobs">Jobs</b-nav-item>
          <b-nav-item href="/habit">Habit</b-nav-item>
          <b-nav-item href="/settings">Settings</b-nav-item>
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
