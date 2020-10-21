<template>
  <div class="quotes-bar">
    <p class="quote">
      {{list}}
    </p>
    <p class="author">
      — {{author}}
    </p>
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
  height: 230x;
  width: auto;
  background-image: url("../assets/images/quotes-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  z-index: 1;
}

.quote {
  padding: 25px 20px 0px;
  font-size: 120%;
  text-align: center;
}

p {
  font-family: Montserrat;
  font-style: italic;
}

.author {
  padding: 15px 20px 10px 10px;
  text-align: right;
}
</style>
