<template>
  <div class="home">
    <!-- TOP NAV BAR -->
    <TopNav />

    <!-- LEFT NAVIGATION MENU -->
    <LeftNav />

    <div class="row">
      <div class="col col-4">
        <QuoteBar id="quotes" />
        <ToDo id="todo" />
      </div>
      <div class="col col-8">
        <ModulesAccordian
          id="modules"
          mod1="Interaction Design & Prototyping"
          mod2="Business Process Analysis & Solutioning"
          mod3="Web Application Development II"
          mod4="Ethics & Social Responsibility"
          mod5="Management Communication"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";
import QuoteBar from "@/components/QuoteBar";
import ModulesAccordian from "@/components/ModulesAccordian";
import ToDo from "@/components/ToDo";

export default {
  name: "Home",
  components: {
    TopNav,
    QuoteBar,
    ModulesAccordian,
    LeftNav,
    ToDo
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#quotes {
  margin-left:10px;
}

#todo {
  margin-top: 200px;
}

.col {
  padding: 0px;
}

.home {
  overflow-x: hidden;
}

#modules {
  margin-right: 15px;
}
</style>
