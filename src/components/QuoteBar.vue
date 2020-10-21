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
  position: absolute;
  display: block;
  height: auto;
  width: auto;
  background: #ebf3fe;
  z-index: 1;
}

.quote {
  padding: 20px 15px 10px;
  font-size: 65%;
}

.author {
  padding: 10px 20px 10px;
  text-align: right;
}
</style>
