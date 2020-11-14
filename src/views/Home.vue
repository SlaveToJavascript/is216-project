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
                    <span class="particletext"
                      >Hi {{ name }}! 🎉🎉 <br />Welcome back!</span
                    >
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="box height45">
                <b-row>
                  <b-col class="modCards">
                    <div id="todoapp" class="text-center">
                      <div class="container">
                        <div class="row header">
                          <h3 class="h1 col center-align">My To-Dos</h3>
                        </div>
                        <div class="row">
                          <form @submit.prevent="submitTodo" class="col">
                            <div class="input-field">
                              <b-form-input v-model="newTodo"></b-form-input>
                            </div>
                            <button class="btn add">Add</button>
                          </form>
                        </div>
                        <div class="row">
                          <ul class="collection col">
                            <li
                              class="collection-item"
                              v-for="todo in todos"
                              :key="todo.id"
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  :checked="todo.done"
                                  @change="todo.done = !todo.done"
                                />
                                <span class="todo-item">{{ todo.title }}</span>
                                <span>
                                  <a @click.prevent="deleteTodo(todo)">
                                    <i class="glyphicon glyphicon-remove"></i>
                                  </a>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
              <div class="box height24">
                <div class="d-flex justify-content-between align-items-center">
                  <div v-if="tasksDonePercent >= 100">
                    <h4>Your productivity at a glance ⭐️</h4>
                    <div class="particletext confetti">
                      <img
                        src="../../glassdoor/new_job_search/pusheen/4.gif"
                        style="width: 5rem;"
                      />
                      Well done! 🎉🎉 <br />
                    </div>
                  </div>
                  <div
                    v-else-if="tasksDonePercent >= 80 && tasksDonePercent <= 99"
                  >
                    <h4>Your productivity at a glance ⭐️</h4>
                    <div class="message">Almost there! 🌟</div>
                  </div>
                  <div
                    v-else-if="tasksDonePercent >= 50 && tasksDonePercent <= 79"
                  >
                    <h4>Your productivity at a glance ⭐️</h4>
                    <div class="message">Keep it going! 🤩</div>
                  </div>
                  <div
                    v-else-if="tasksDonePercent >= 1 && tasksDonePercent <= 49"
                  >
                    <h4>Your productivity at a glance ⭐️</h4>
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
                    :size="170"
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
      tasksDone: 0
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
      this.tasksDone++;
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
    let username = window.localStorage.getItem("username")
    let credentials = JSON.parse(window.localStorage.getItem(username))
    this.name = credentials["Name"]
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
  overflow: visible;
}

.modCards {
  overflow-y: auto;
  white-space: nowrap;
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
</style>
