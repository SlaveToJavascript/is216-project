<template>
  <div>
    <Navbar />
    <b-container fluid>
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-row class="mt-3">
              <b-col cols="6">
                <div class="box height24">
                  <h5 class="particletext hearts" style="font-size: 1.5em">
                    Welcome {{ name }} 🙂
                  </h5>
                  <QuoteBar />
                </div>
              </b-col>
              <b-col cols="6">
                <div class="box height24">
                  <div class="scroll d-xl-flex justify-content-xl-between">
                    <div v-if="tasksDonePercent >= 100">
                      <h4 class="mb-4">Your productivity at a glance ⭐️</h4>
                      <div class="particletext confetti">
                        <img
                          src="../../glassdoor/new_job_search/pusheen/4.gif"
                          style="width: 5rem;"
                        />
                        <span class="ml-4" style="font-size: 0.8em"
                          >Well done! 🎉🎉
                        </span>
                      </div>
                    </div>
                    <div
                      v-else-if="
                        tasksDonePercent >= 80 && tasksDonePercent <= 99
                      "
                    >
                      <h4 class="mb-4">Your productivity at a glance ⭐️</h4>
                      <div class="message">Almost there! 🌟</div>
                    </div>
                    <div
                      v-else-if="
                        tasksDonePercent >= 50 && tasksDonePercent <= 79
                      "
                    >
                      <h4 class="mb-4">Your productivity at a glance ⭐️</h4>
                      <div class="message">Keep it going! 🤩</div>
                    </div>
                    <div
                      v-else-if="
                        tasksDonePercent >= 1 && tasksDonePercent <= 49
                      "
                    >
                      <h4 class="mb-4">Your productivity at a glance ⭐️</h4>
                      <div class="message">Getting Started! 💪🏻 💪🏻</div>
                    </div>
                    <div v-else-if="tasksDonePercent == 0">
                      <h4>Your productivity at a glance ⭐️</h4>
                      <div class="message">You okay? 🤡 🤡</div>
                    </div>
                    <vue-ellipse-progress
                      :is="component"
                      :progress="tasksDonePercent"
                      color="#7579ff"
                      empty-color="#324c7e"
                      :size="150"
                      :thickness="5"
                      :empty-thickness="3"
                      lineMode="in 4"
                      :legend-value="tasksDone"
                      animation="bounce 700 1000"
                      fontSize="1.5rem"
                      font-color="black"
                      dot="7 black"
                    >
                      <span slot="legend-value"> / 10</span>
                      <span slot="legend-caption">TASKS DONE</span>
                    </vue-ellipse-progress>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-col>
              <div class="box height45">
                <b-col class="modCards">
                  <!-- Start todo -->
                  <div class="column">
                    <p class="column-title">To-do</p>
                    <div class="cards">
                      <div class="card">
                        <p>Read chapters for next class</p>
                      </div>
                    </div>
                    <div class="add-container">
                      <textarea
                        type="text"
                        placeholder="Type task here ..."
                      ></textarea>
                      <button class="add-card ui-button ui-corner-all">
                        Add Card
                      </button>
                    </div>
                  </div>

                  <div class="column">
                    <p class="column-title">Project Meetings</p>
                    <div class="cards">
                      <div class="card">
                        <p>WAD2 Meeting 11/11 1500 hrs</p>
                      </div>
                    </div>
                    <div class="add-container">
                      <textarea
                        type="text"
                        placeholder="Type task here ..."
                      ></textarea>
                      <button class="add-card ui-button ui-corner-all">
                        Add Card
                      </button>
                    </div>
                  </div>

                  <div class="column">
                    <p class="column-title">Important Dates</p>
                    <div class="cards">
                      <div class="card">
                        <p>WAD2 Finals 29th November</p>
                      </div>
                    </div>
                    <div class="add-container">
                      <textarea
                        type="text"
                        placeholder="Type task here ..."
                      ></textarea>
                      <button class="add-card ui-button ui-corner-all">
                        Add Card
                      </button>
                    </div>
                  </div>
                  <!-- End todo -->
                </b-col>
              </div>
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

import $ from "jquery";

require("@/assets/styles/particles.css");

export default {
  name: "Home",
  components: {
    Navbar,
    QuoteBar,
    ModuleCard
  },
  data() {
    return {
      name: "Sean",
      newTodo: "",
      todos: [],
      tasksDone: 10
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true
    }
  },
  methods: {
    submitTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  },
  computed: {
    tasksDonePercent() {
      return (this.tasksDone * 100) / 10;
    },
    component() {
      return "vue-ellipse-progress";
    }
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }

    $(".add-card").click(function() {
      var textarea = $(this).prev();
      var column = $(this)
        .closest(".column")
        .find(".cards");

      column.append("<div class='card'><p>" + textarea.val() + "</p></div>");

      textarea.val("");
    });

    function initparticles() {
      bubbles();
      hearts();
      confetti();
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
        var heartcount = ($(this).width() / 200) * 5;
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

    $.rnd = function(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    };

    initparticles();
  },
  created() {
    let username = window.localStorage.getItem("username");
    let credentials = JSON.parse(window.localStorage.getItem(username));
    this.name = credentials["Name"];
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #f7fafc;
  overflow-y: auto;
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
  height: 60.5vh;
}

.height24 {
  height: 24vh;
}

.box {
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  overflow: visible;
}

.modCards {
  overflow-y: visible;
  display: inline-block;
}

.message {
  font-size: 2vw;
  text-align: left;
  background: transparent;
}

.add {
  background-color: #007bff;
  color: white;
  margin-top: 10px;
  width: 30%;
  font-size: 15px;
}

ul {
  margin-top: 10px;
  padding: 0px;
}

.glyphicon {
  margin-left: 10px;
}

.todo-item {
  margin-left: 10px;
  font-size: 18px;
}

.input-field {
  margin-left: 10px;
  margin-right: 10px;
}

.container {
  padding: 1%;
}

p {
  padding-left: 10px;
  padding-top: 10px;
}

.column {
  background: #f5f5f5;
  margin-right: 2%;
  padding: 1%;
  border-radius: 3px;
  width: 32%;
  float: left;
  height: auto;
  border-radius: 10px;
}
.column:last-of-type {
  margin-right: 0;
}
.column .column-title {
  font-weight: bold;
  margin: 5px 0 20px;
}
.column .card {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 250ms;
  transition: -webkit-transform 250ms;
  transition: transform 250ms;
  transition: transform 250ms, -webkit-transform 250ms;
}
.column .card.selected {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  z-index: 1;
}
.column textarea {
  border: none;
  resize: vertical;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
}
.column textarea:focus {
  outline: none;
}

.scroll {
  overflow: auto;
  height: 18vh;
}
</style>
