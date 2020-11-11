<template>
  <div class="card">
    <div class="card-body text-center">
      <img
        src="../../cards/image/8.gif"
        width="40%"
        style="margin-top: 10px;"
      />
      <div class="card-content">
        <div
          class="card-title text-center"
          style="font-size:medium; font-weight: bold;"
        >
          IS216
          <br />
          Web Application Development 2
        </div>
        <div class="card-text text-center" style="font-size: small;">
          Professor: KYONG Jin Shim
          <br />
          Class: FRI 0815-1130
        </div>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-outline-primary" @click="show()">
        Search for Videos
      </button>
      <modal
        name="videos"
        :width="1400"
        :height="800"
        :draggable="true"
        :resizable="true"
      >
        <div class="mt-2">
          <YoutubeSearch @load="initVideos(1)" v-on:search="search" />

          <!-- Videos -->
          <YoutubeResults
            v-if="videos.length > 0"
            v-bind:videos="videos"
            v-bind:reformattedSearchString="reformattedSearchString"
          />
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import YoutubeSearch from "@/components/YoutubeSearch";
import YoutubeResults from "@/components/YoutubeResults";
Vue.use(VueAxios, axios);

export default {
  name: "ModuleCard",
  props: {
    mod1: String,
    mod2: String,
    mod3: String,
    mod4: String,
    mod5: String
  },
  components: {
    YoutubeResults,
    YoutubeSearch
  },
  data() {
    return {
      text: "",
      videos: [],
      reformattedSearchString: "",
      api: {
        baseUrl:
          "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&maxResults=3&q=",
        q: "",
        key: "AIzaSyCTTMCziOgGOq4V44X4tK2ntQ51HsbZiV4"
      },
      searchString: "",
      accordionRef: ""
    };
  },
  created() {
    this.initVideos(1);
  },
  methods: {
    show() {
      this.$modal.show("videos");
    },
    hide() {
      this.$modal.hide("videos");
    },
    initVideos: function(id) {
      let q;
      if (id == 1) {
        q = this.$props.mod1;
      } else if (id == 2) {
        q = this.$props.mod2;
      } else if (id == 3) {
        q = this.$props.mod3;
      } else if (id == 4) {
        q = this.$props.mod4;
      } else {
        q = this.$props.mod5;
      }
      console.log(q);
      let key = "AIzaSyCTTMCziOgGOq4V44X4tK2ntQ51HsbZiV4";
      let url =
        "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&maxResults=3&q=" +
        q +
        "&key=" +
        key;
      Vue.axios.get(url).then(resp => {
        this.videos = resp.data.items;
      });
    },
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");
      this.api.q = searchParams.join("+");
      const { baseUrl, q, key } = this.api;
      const apiUrl = `${baseUrl}q=${q}&key=${key}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
        })
        .catch(error => console.log(error));
    },
    parseSearchString() {
      // Trim search string
      const trimmedSearchString = this.searchString.trim();

      if (trimmedSearchString !== "") {
        // Split search string
        const searchParams = trimmedSearchString.split(/\s+/);
        // Emit event
        this.$emit("search", searchParams);
        // Reset input field
        this.searchString = "";
      }
    }
  }
};
</script>

<style scoped>
.card {
  background: white;
  border-radius: 20px;
  display: inline-block;
  height: auto;
  margin: 0.5rem;
  position: relative;
  height: 20rem;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 14px 28px #b8cef3, 0 10px 10px #b8cef3;
}

.card-content {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
}

.modal-header {
  margin-top: 10px;
}

.search {
  width: 65%;
  display: inline;
}
</style>
