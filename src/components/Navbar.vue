<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item>
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
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            class="mb-1"
            type="is-primary"
            tag="router-link"
            to="/settings"
          >
            Settings
          </b-button>
          <b-button
            class="mb-1"
            type="is-primary is-light"
            tag="router-link"
            to="/settings"
          >
            Log Out
          </b-button>
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
  margin-bottom: 0px;
  display: block;
}
</style>
