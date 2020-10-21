<template>
  <div class="timetable">
    <TopNav />
    <Schedule />
  </div>
</template>

<script>
import Schedule from "@/components/Schedule";
import TopNav from "@/components/TopNav";

export default {
  name: "Timetable",
  components: {
    Schedule,
    TopNav
  }
};
</script>

<style scoped>
.timetable {
  overflow-x: hidden;
}
</style>
