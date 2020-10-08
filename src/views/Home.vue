<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <!-- TOP NAV BAR -->
    <div class="top-navbar">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand class="navbar-header">Welcome to STUD</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Navbar text</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- LEFT NAVIGATION MENU -->
    <sidebar-menu :menu="menu" :width="width">
      <span slot="toggle-icon">Menu</span>
    </sidebar-menu>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/",
          title: "Home",
          icon: {
            element: "span",
            class: "glyphicon glyphicon-home"
          }
        }
      ],
      width: "200px",
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

<style>
  .navbar-header {
    margin-left: 200px;
  }
</style>
