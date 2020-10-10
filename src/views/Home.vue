<template>
  <div class="home">
    <!-- TOP NAV BAR -->
    <TopNav />

    <!-- LEFT NAVIGATION MENU -->
    <LeftNav />

    <!-- QUOTES -->
    <QuoteBar />

    <!-- MODULES -->
    <ModulesAccordian
      mod1="IDP"
      mod2="BPAS"
      mod3="WAD2"
      mod4="Ethics"
      mod5="MC"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav";
import QuoteBar from "@/components/QuoteBar";
import LeftNav from "@/components/LeftNav";
import ModulesAccordian from "@/components/ModulesAccordian";

export default {
  name: "Home",
  components: {
    TopNav,
    QuoteBar,
    LeftNav,
    ModulesAccordian
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
