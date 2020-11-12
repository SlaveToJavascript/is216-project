<template>
  <div id="login">
    <ul>
      <li v-for="mod in mods" :key="mod.id">
        {{ mods }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
