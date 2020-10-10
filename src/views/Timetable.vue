<template>
  <div>
    <TopNav />

    <LeftNav />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export default {
  name: "Timetable",
  components: {
    TopNav,
    LeftNav
  }
};
</script>

<style scoped></style>
