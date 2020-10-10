<template>
  <div>
    <TopNav />

    <LeftNav />
    Settings Page
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export default {
  name: "Settings",
  components: {
    TopNav,
    LeftNav
  }
};
</script>

<style scoped></style>
