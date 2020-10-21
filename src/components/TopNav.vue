<template>
  <b-navbar id="navbar">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/logo.jpg"
          alt="STUD"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">Home</b-navbar-item>
      <b-navbar-item href="/timetable">Timetable</b-navbar-item>
      <b-navbar-item href="/jobs">Jobs</b-navbar-item>
      <b-navbar-item href="/habit">Habit</b-navbar-item>
      <b-navbar-item href="/settings">Settings</b-navbar-item>
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
