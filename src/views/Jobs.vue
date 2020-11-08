<template>
  <div class="jobs">
    <Navbar />

    <!-- searchbar -->
    <div class="container-fluid" id="searchBar">

      <div class="d-flex justify-content-center row" >
        <div id="keyword">
          <input type="text" id="q" class="form-control" placeholder="Job, Title, Keyword, Company" aria-label="keyword" aria-describedby="basic-addon1">
        </div>
    
        <div>
          <b-dropdown variant="primary" id="jobType" text="Type of job" class="ml-3">
            <b-dropdown-item @click="searchTerm='internship'">Internship</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='ft'">Full-Time</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='pt'">Part-Time</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='fl'">Freelance</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='all'">All</b-dropdown-item>
          </b-dropdown>
        </div>
        <!-- <div class="dropdown">
          <a class="btn drop-down form-control" href="#" role="button" id="dropdownMenuType" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Type of job
          </a>
        
          <div class="dropdown-menu" aria-labelledby="dropdownMenuType" style="width: 500px;">
            <p class="dropdown-item" id="0" onclick="category('0')">Internship</p>
            <p class="dropdown-item" id="1" onclick="category('1')">Full Time</p>
            <p class="dropdown-item" id="2" onclick="category('2')">Part Time</p>
            <p class="dropdown-item" id="3" onclick="category('3')">Freelance</p>
            <p class="dropdown-item" id="4" onclick="category('4')">All</p>
          </div>
        </div> -->
       
        <div id="searchJob">
          <b-button variant="success" @click="search()">Search</b-button>
        </div>

      </div>
    </div>

    <b-container>
      <div id="cardWrap" >
        <b-card :key="result.title" v-for="result in results">
          <div class="ml-4">
            <b-card-title>{{result.title}}</b-card-title>
            <b-card-text>{{result.snippet}}</b-card-text>
            <b-button :href="result.formattedUrl" variant="primary">Apply now</b-button>
          </div>
        </b-card>
      </div>
    </b-container>
      
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: "Jobs",
  components: {
    Navbar,
  },
  mounted() {
    // $('#myModal').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })
  },
  data() {
    return {
      searchTerm: "",
      results: [],
    }
  },
  methods: {
    search() {
      var q = document.getElementById('q').value + " " + this.searchTerm;
      let key = "AIzaSyBqW71zFVCc8ocJAhViUhZC3rTD8E5eiA4"
      let cx = "f5cccf8e1ce3fceca"
      let url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + q
      Vue.axios.get(url)
      .then((resp) => {
        this.result = resp.data.items
        for (var result of resp.data.items) {
          console.log(result)
          //b-card-title
          var titleNode = document.createElement("b-card-title");
          titleNode.appendChild(document.createTextNode(result.htmlTitle))
          //b-card-text
          var textNode = document.createElement("b-card-text");
          textNode.appendChild(document.createTextNode(result.snippet))
          //apply now
          var buttonNode = document.createElement("b-button");
          buttonNode.setAttribute("href", result.formattedUrl)
          buttonNode.setAttribute("variant", "primary")
          buttonNode.appendChild(document.createTextNode("Apply here"))
          // outer wrap
          var wrapper = document.createElement("div")
          wrapper.className = 'ml-4'
          wrapper.appendChild(titleNode)
          wrapper.appendChild(textNode)
          wrapper.appendChild(buttonNode)
          var bCard = document.createElement("b-card")
          bCard.appendChild(wrapper)
          var cardWrap = document.getElementById("cardWrap")
          cardWrap.appendChild(bCard)
        }
        // console.log(cardWrap)
      });
      
      // for (var result of this.results) {
      //   console.log(result)
      // }
    }
  }
};
</script>

<style scoped>
body {
    background: white;
    text-align: center;
  }

#searchBar {
    background-color: #f2cbbc;
    padding: 1%; 
}

#keyword, #category {
    width: 500px;
    margin-left: 1%;
}

#searchJob {
    margin-left: 1%;

}
.card {
    background: white;
    border-radius: 20px;
    display: inline-block;
    height: auto;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card:hover {
    box-shadow: 0 14px 28px #b8cef3, 0 10px 10px #b8cef3;
}

.card-content{
    margin-top: 10px;
    margin-bottom: 10px;
}

.modal-header{
    margin-top: 10px;
}

.container{
    margin-top: 20px;
    margin-bottom: 20px;
}

.b-card {
  width: 90%;
}
</style>
