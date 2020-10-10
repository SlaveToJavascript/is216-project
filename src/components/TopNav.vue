<template>
  <div class="top-navbar">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <h1 class="navbar-header">Good morning, Sean</h1>
      <b-collapse id="nav-text-collapse" is-nav> </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        // brandImage: require("../assets/images/logo.jpg"),
        // brandImageAltText: "brand-image",
        // showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsRight: [
          {
            type: "button",
            text: "Signup",
            path: { name: "signup" },
            class: "button-red"
          },
          {
            type: "button",
            text: "Login",
            path: { name: "login" },
            iconRight:
              '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.navbar-header {
  margin-left: 220px;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
}

.navbar {
  margin-bottom: 0px;
}
</style>
