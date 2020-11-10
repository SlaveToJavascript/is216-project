<template>
  <div>
    <Navbar />
    <b-container fluid>
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col>
              <div class="px-3 pt-4 height17">
                <b-row>
                  <b-col>
                    <h3>
                      Hi Sean! You have <br />
                      <b>2 lessons</b> and <b>3 meetings</b> today!
                    </h3>
                  </b-col>
                  <b-col> </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="box height29">
                <b-row>
                  <b-col class="modCards">
                    <ModuleCard /><ModuleCard /><ModuleCard /><ModuleCard /><ModuleCard />
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <div class="box height24"><QuoteBar /></div>
            </b-col>
            <b-col cols="6">
              <div class="box height24">Productivity Ring</div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <div class="box mt-3" id="schedule"><ToDo /></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ToDo from "@/components/ToDo";
import QuoteBar from "@/components/QuoteBar";
import ModuleCard from "@/components/ModuleCard";

export default {
  name: "Settings",
  components: {
    Navbar,
    ToDo,
    QuoteBar,
    ModuleCard
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #f7fafc;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

#schedule {
  height: 87vh;
  overflow: scroll;
  z-index: 999;
}

.height17 {
  height: 17vh;
}

.height29 {
  height: 45.5vh;
}

.height24 {
  height: 24vh;
}

.box {
  background: #f9f9f9;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.modCards {
  overflow-x: auto;
  white-space: nowrap;
  display: inline-block;
}
</style>
