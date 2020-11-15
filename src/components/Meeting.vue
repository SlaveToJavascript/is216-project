<template>
  <div id="app">
    <section class="todo-wrapper mr-3">
      <h1 class="todo-title">
        Project Meetings
      </h1>
      <form @keydown.enter.prevent="">
        <input
          type="text"
          class="input-todo"
          v-bind:class="{ active: new_meet }"
          placeholder="Meeting Dates"
          v-model="new_meet"
          v-on:keyup.enter="addItem"
        />
        <div
          class="btnn btnn-add"
          v-bind:class="{ active: new_meet }"
          @click="addItem"
        >
          +
        </div>
      </form>

      <div v-if="pending.length > 0">
        <p class="status busy">
          You have {{ pending.length }} upcoming meeting<span
            v-if="pending.length > 1"
            >s</span
          >
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <li v-for="item in pending" v-bind:key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label v-bind:for="'item_' + item.id"></label>
            <span class="todo-text">{{ item.title }}</span>
            <span class="delete" @click="deleteItem(item)"></span>
          </li>
        </transition-group>
      </div>

      <transition name="slide-fade">
        <p class="status free" v-if="!pending.length">
          <img
            src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg"
            alt="celebration"
          />Nobody wants to meet you? 😔
        </p>
      </transition>

      <div v-if="completed.length > 0 && showComplete">
        <p class="status">Completed meetings: {{ completedPercentage }}</p>
        <transition-group name="todo-item" tag="ul" class="todo-list archived">
          <li v-for="item in completed" v-bind:key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label v-bind:for="'item_' + item.id"></label>
            <span class="todo-text">{{ item.title }}</span>
            <span class="delete" @click="deleteItem(item)"></span>
          </li>
        </transition-group>
      </div>
      <div class="control-buttons">
        <div
          class="btnn btnn-secondary"
          v-if="completed.length > 0"
          @click="toggleShowComplete"
        >
          <span v-if="!showComplete">Show</span
          ><span v-else>Hide</span> Complete
        </div>
        <div
          class="btnn btnn-secondary"
          v-if="meetList.length > 0"
          @click="clearAll"
        >
          Clear All
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Meeting",
  data() {
    return {
      meetList: [],
      new_meet: "",
      showComplete: false
    };
  },
  mounted() {
    this.getMeet();
  },
  watch: {
    meetList: {
      handler: function(updatedList) {
        localStorage.setItem("meet_list", JSON.stringify(updatedList));
      },
      deep: true
    }
  },
  computed: {
    pending: function() {
      return this.meetList.filter(function(item) {
        return !item.done;
      });
    },
    completed: function() {
      return this.meetList.filter(function(item) {
        return item.done;
      });
    },
    completedPercentage: function() {
      return (
        Math.floor((this.completed.length / this.meetList.length) * 100) + "%"
      );
    },
    today: function() {
      var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = {
        day: weekday[today.getDay()],
        date: dd + "/" + mm + "/" + yyyy
      };

      return today;
    }
  },
  methods: {
    // get all todos when loading the page
    getMeet() {
      if (localStorage.getItem("meet_list")) {
        this.meetList = JSON.parse(localStorage.getItem("meet_list"));
      }
    },
    // add a new item
    addItem() {
      // validation check
      if (this.new_meet) {
        this.meetList.unshift({
          id: this.meetList.length,
          title: this.new_meet,
          done: false
        });
      }
      // reset new_todo
      this.new_meet = "";
      // save the new item in localstorage
      return true;
    },
    deleteItem(item) {
      this.meetList.splice(this.meetList.indexOf(item), 1);
    },
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    clearAll() {
      this.meetList = [];
    }
  }
};
</script>
