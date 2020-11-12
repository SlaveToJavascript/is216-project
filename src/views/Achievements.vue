<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="column">
        <p class="column-title">To-do</p>
        <div class="cards">
          <div class="card">
            <p>Read chapters for next class</p>
          </div>
        </div>
        <div class="add-container">
          <textarea type="text" placeholder="Type task here ..."></textarea>
          <button class="add-card ui-button ui-corner-all">Add Card</button>
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
          <textarea type="text" placeholder="Type task here ..."></textarea>
          <button class="add-card ui-button ui-corner-all">Add Card</button>
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
          <textarea type="text" placeholder="Type task here ..."></textarea>
          <button class="add-card ui-button ui-corner-all">Add Card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

import $ from "jquery";

export default {
  name: "Habit",
  components: {
    Navbar
  },
  mounted() {
    $(function() {
      addListeners();
    });

    $(".add-card").click(function() {
      var textarea = $(this).prev();
      var column = $(this)
        .closest(".column")
        .find(".cards");

      column.append("<div class='card'><p>" + textarea.val() + "</p></div>");

      textarea.val("");
      addListeners();
    });

    function addListeners() {
      $(".card").draggable({
        revert: "invalid",
        start: function() {
          $(this).addClass("selected");
        },
        stop: function() {
          $(this).removeClass("selected");
        }
      });

      $(".column").droppable({
        accept: ".card",
        drop: function(event, ui) {
          ui.draggable
            .css("left", "0")
            .css("top", "0")
            .appendTo($(this).find(".cards"));
        }
      });
    }
  }
};
</script>

<style scoped>
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
</style>
