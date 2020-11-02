<template>
  <b-navbar :fixed-top="false">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/images/logo.jpg" alt="STUD" />
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/timetable' }">
        Timetable
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/jobs' }">
        Jobs
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/achievements' }">
        Achievement
      </b-navbar-item>
      <b-navbar-dropdown label="Settings">
        <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
          User Profile
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
          Update Timetable
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
          Notification
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
          Privacy
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  height: 7.5vh;
  padding: 0rem;
}

.navbar img {
  max-height: 3rem;
  margin-top: 10px;
}



</style>
