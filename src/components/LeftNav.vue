<template>
  <sidebar-menu
    @toggle-collapse.stop
    :menu="menu"
    :width="width"
    :hideToggle="hideToggle"
  >
    <span slot="toggle-icon">Menu</span>
  </sidebar-menu>
</template>

<script>
export default {
  name: "LeftNav",
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
      width: "150px",
      hideToggle: true
    };
  }
};
</script>

<style scoped>
.v-sidebar-menu .vsm--toggle-btn {
  display: none;
}
</style>
