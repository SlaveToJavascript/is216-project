<template>
  <div class="home">
    <!-- TOP NAV BAR -->
    <Navbar />

    <!-- LEFT NAVIGATION MENU -->

    <div class="row">
      <div class="col col-md-4">
        <QuoteBar id="quotes" />
        <ToDo id="todo" />
      </div>
      <div class="col col-md-8">
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
import Navbar from "@/components/Navbar";
import QuoteBar from "@/components/QuoteBar";
import ModulesAccordian from "@/components/ModulesAccordian";
import ToDo from "@/components/ToDo";

export default {
  name: "Home",
  components: {
    Navbar,
    QuoteBar,
    ModulesAccordian,
    ToDo
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

#quotes {
  /* margin-left:10px; */
}

.col {
  padding: 0px;
}

.home {
  overflow-x: hidden;
}

#todo {
  /* margin-left: 10px; */
}

#modules {
  margin-right: 15px;
}
</style>
