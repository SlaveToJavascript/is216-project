<template>
  <v-calendar is-expanded :attributes="attributes" />
</template>

<script>
export default {
  data() {
    const todos = [
      {
        description: "Web Application Development 2",
        isComplete: false,
        dates: { weekdays: 6 },
        color: "blue"
      },
      {
        description: "Interactions Design & Prototyping",
        isComplete: false,
        dates: { weekdays: 3 },
        color: "red"
      },
      {
        description: "Business Process Analytics & Solutioning",
        isComplete: false,
        dates: { weekdays: 3 },
        color: "green"
      },
      {
        description: "Ethics",
        isComplete: false,
        dates: { weekdays: 5 },
        color: "indigo"
      },
      {
        description: "Management Communication",
        isComplete: false,
        dates: { weekdays: 2 },
        color: "gray"
      }
    ];
    return {
      incId: todos.length,
      todos
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? "opacity-75" : ""
          },
          popover: {
            label: todo.description
          },
          customData: todo
        }))
      ];
    }
  }
};
</script>
