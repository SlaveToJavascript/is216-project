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
        }
      ],
      width: "200px",
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
