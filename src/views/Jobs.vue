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
          <b-dropdown variant="primary" id="jobType" :text="placeholder" class="ml-3">
            <b-dropdown-item @click="searchTerm='all';placeholder='All'">All</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='internship'; placeholder='Internship'">Internship</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='ft';placeholder='Full-Time'">Full-Time</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='pt';placeholder='Part-Time'">Part-Time</b-dropdown-item>
            <b-dropdown-item @click="searchTerm='fl';placeholder='Freelance'">Freelance</b-dropdown-item>
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
      placeholder: "Type of job"
    }
  },
  methods: {
    search() {
      var q = document.getElementById('q').value.replace(/\s+/g, '+')
      q += "+" + this.searchTerm;
      let key = "AIzaSyBqW71zFVCc8ocJAhViUhZC3rTD8E5eiA4"
      let cx = "f5cccf8e1ce3fceca"
      let url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + q
      console.log(url)
      var cardWrap = document.getElementById("cardWrap")
      cardWrap.innerHTML = ""
      Vue.axios.get(url)
      .then((resp) => {
        this.result = resp.data.items
        for (var result of resp.data.items) {
          console.log(result)
          //b-card-title
          var titleNode = document.createElement("h3");
          titleNode.appendChild(document.createTextNode(result.title))
          //b-card-text
          var textNode = document.createElement("h4");
          textNode.appendChild(document.createTextNode(result.snippet))
          //apply now
          var buttonNode = document.createElement("button");
          buttonNode.className = "button button2"
          buttonNode.setAttribute("onclick", "javascript:window.open('" + result.formattedUrl + "', '_blank');")
          buttonNode.setAttribute("target", "_blank")
          buttonNode.appendChild(document.createTextNode("Apply here"))
          // container wrap
          var wrapper = document.createElement("div")
          wrapper.className = 'container'
          wrapper.appendChild(titleNode)
          wrapper.appendChild(textNode)
          wrapper.appendChild(buttonNode)
          // card wrap
          var bCard = document.createElement("div")
          bCard.className = "card"
          bCard.appendChild(wrapper)
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  padding: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 30px;
  margin-bottom: 10px !important;
  margin-top: 10px !important;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button2 {
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
}

.button2:hover {
  background-color: #008CBA;
  color: white;
}
</style>
