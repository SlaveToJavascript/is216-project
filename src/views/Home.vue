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
                    <span class="particletext bubbles"
                      >Hi {{ name }}! 🎉🎉 <br />Welcome back!</span
                    >
                  </b-col>
                  <b-col> </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="box height45">
                <b-row>
                  <b-col class="modCards"> </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <div class="box height24"><QuoteBar /></div>
            </b-col>
            <b-col cols="6">
              <div class="box height24"><Progress /></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <div class="box mt-3" id="schedule">
            <ModuleCard />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import QuoteBar from "@/components/QuoteBar";
import ModuleCard from "@/components/ModuleCard";
import Progress from "@/components/Progress";

import $ from "jquery";

require("@/assets/styles/particles.css");

export default {
  name: "Home",
  components: {
    Navbar,
    QuoteBar,
    ModuleCard,
    Progress
  },
  data() {
    return {
      name: "Sean"
    };
  },
  mounted: function() {
    function initparticles() {
      bubbles();
      hearts();
      lines();
      confetti();
      fire();
      sunbeams();
    }

    function bubbles() {
      $.each($(".particletext.bubbles"), function() {
        var bubblecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
          var size = $.rnd(40, 80) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(20, 80) +
              "%; left:" +
              $.rnd(0, 95) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function hearts() {
      $.each($(".particletext.hearts"), function() {
        var heartcount = ($(this).width() / 50) * 5;
        for (var i = 0; i <= heartcount; i++) {
          var size = $.rnd(60, 120) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(20, 80) +
              "%; left:" +
              $.rnd(0, 95) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function lines() {
      $.each($(".particletext.lines"), function() {
        var linecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(-30, 30) +
              "%; left:" +
              $.rnd(-10, 110) +
              "%;width:" +
              $.rnd(1, 3) +
              "px; height:" +
              $.rnd(20, 80) +
              "%;animation-delay: -" +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function confetti() {
      $.each($(".particletext.confetti"), function() {
        var confetticount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= confetticount; i++) {
          $(this).append(
            '<span class="particle c' +
              $.rnd(1, 2) +
              '" style="top:' +
              $.rnd(10, 50) +
              "%; left:" +
              $.rnd(0, 100) +
              "%;width:" +
              $.rnd(6, 8) +
              "px; height:" +
              $.rnd(3, 4) +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function fire() {
      $.each($(".particletext.fire"), function() {
        var firecount = ($(this).width() / 50) * 20;
        for (var i = 0; i <= firecount; i++) {
          var size = $.rnd(8, 12);
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(40, 70) +
              "%; left:" +
              $.rnd(-10, 100) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 20) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function sunbeams() {
      $.each($(".particletext.sunbeams"), function() {
        var linecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(-50, 0) +
              "%; left:" +
              $.rnd(0, 100) +
              "%;width:" +
              $.rnd(1, 3) +
              "px; height:" +
              $.rnd(80, 160) +
              "%;animation-delay: -" +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    $.rnd = function(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    };

    initparticles();
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
  overflow-y: auto;
  z-index: 999;
}

.height17 {
  height: 17vh;
}

.height45 {
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
