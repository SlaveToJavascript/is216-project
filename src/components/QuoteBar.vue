<template>
  <div class="quotes-bar">
    <h3 class="quote">
      {{ list }}
    </h3>
    <h4 class="author">— {{ author }}</h4>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "QuoteBar",
  data() {
    return {
      list: undefined,
      author: undefined
    };
  },
  mounted() {
    Vue.axios.get("https://quotes.rest/qod").then(resp => {
      this.list = resp.data.contents.quotes[0].quote;
      this.author = resp.data.contents.quotes[0].author;
    });
  }
};
</script>

<style scoped>
.quotes-bar {
  height: auto;
  width: auto;
}

.quote {
  padding: 25px 35px 0px;
  text-align: center;
}

h3,
h4 {
  font-family: Montserrat;
  font-style: italic;
}

.author {
  padding: 10px 20px 10px 10px;
  text-align: right;
}
</style>
