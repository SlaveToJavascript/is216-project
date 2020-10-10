<template>
  <div>
    <TopNav />

    <LeftNav />
    Jobs Page
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export default {
  name: "Jobs",
  components: {
    TopNav,
    LeftNav
  }
};
</script>

<style scoped></style>
