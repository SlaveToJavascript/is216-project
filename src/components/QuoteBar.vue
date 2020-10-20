<template>
  <div class="quotes-bar">
    <div class="top-button-left"></div>
    <div class="top-button-middle"></div>
    <div class="top-button-right"></div>
    <div class="bar"></div>
    <h2 class="quote">
      {{list}}
    </h2>
    <h3 class="author">
      — {{author}}
    </h3>
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: "QuoteBar",
  data() {
    return {
      list: undefined,
      author: undefined
    };
  },
  mounted() {
    Vue.axios.get("https://quotes.rest/qod")
    .then((resp) => {
      this.list = resp.data.contents.quotes[0].quote
      this.author = resp.data.contents.quotes[0].author
    })
  }
};
</script>

<style scoped>
.quotes-bar {
  position: absolute;
  display: block;
  height: 200px;
  background: #ebf3fe;
  z-index: 1;
}

.top-button-left {
  position: absolute;
  top: 2%;
  left: 3%;
  border-radius: 50%;
  width: 3%;
  height: 5%;
  background: #ff605c;
}
.top-button-middle {
  position: absolute;
  top: 2%;
  left: 7%;
  border-radius: 50%;
  width: 3%;
  height: 5%;
  background: #ffbd44;
}
.top-button-right {
  position: absolute;
  top: 2%;
  left: 11%;
  border-radius: 50%;
  width: 3%;
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

.author {
  padding: 10px 20px 10px;
  font-family: adobe-garamond-pro, serif;
  text-align: right;
}
</style>
