<template>
  <div class="quotes-bar">
    <div class="top-button-left"></div>
    <div class="top-button-middle"></div>
    <div class="top-button-right"></div>
    <div class="bar"></div>
    <h2 class="quote">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolorem
      quos labore tempora nostrum error, sunt ex eius sapiente quia est neque
      quis quae mollitia dolor unde quod, ipsum inventore?
    </h2>
  </div>
</template>

<script>
export default {
  name: "QuoteBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.quotes-bar {
  position: absolute;
  margin-left: 200px;
  display: block;
  width: 300px;
  height: 200px;
  background: #ebf3fe;
  z-index: 1;
}

.top-button-left {
  position: absolute;
  top: 2%;
  left: 3%;
  border-radius: 50%;
  width: 3.5%;
  height: 5%;
  background: #ff605c;
}
.top-button-middle {
  position: absolute;
  top: 2%;
  left: 7%;
  border-radius: 50%;
  width: 3.5%;
  height: 5%;
  background: #ffbd44;
}
.top-button-right {
  position: absolute;
  top: 2%;
  left: 11%;
  border-radius: 50%;
  width: 3.5%;
  height: 5%;
  background: #00ca4e;
}
.bar {
  position: absolute;
  width: 100%;
  height: 3%;
  top: 10%;
  background: #818d98;
}

.quote {
  padding: 40px 15px 10px;
  font-family: adobe-garamond-pro, serif;
}
</style>
