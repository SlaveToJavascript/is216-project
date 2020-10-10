<template>
  <div>
    <TopNav />

    <LeftNav />
    Habit Page
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export default {
  name: "Habit",
  components: {
    TopNav,
    LeftNav
  }
};
</script>

<style scoped></style>
