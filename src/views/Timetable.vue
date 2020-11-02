<template>
  <div class="timetable">
    <Navbar />
    <Schedule />
  </div>
</template>

<script>
import Schedule from "@/components/Schedule";
import Navbar from "@/components/Navbar";

export default {
  name: "Timetable",
  components: {
    Schedule,
    Navbar
  }
};
</script>

<style scoped>
.timetable {
  overflow-x: hidden;
}
</style>
