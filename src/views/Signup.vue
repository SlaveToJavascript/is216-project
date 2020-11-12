<template>
  <div id="signup">
    <!-- header -->
    <div class="row" id="header">
      <div class="col ">
        <img
          src="../assets/images/smoolife.png"
          id="logo"
          style="margin-bottom: 0px;"
        />
      </div>

      <!-- to redirect to sign in page -->
      <div class="col" id="sign-in">
        <button type="button" class="btn btn-outline-primary">
          <b-link :to="{ path: 'Login' }">Sign in</b-link>
        </button>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <img
        src="../assets/images/corgi_study.gif"
        style="width: 10%; height: 10%;"
      />
    </div>

    <div class="row">
      <div class="col">
        <!-- registration details -->
        <div class="row">
          <div class="container" id="registration">
            <div class="row  d-flex justify-content-center">
              <h1>Create an account</h1>
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="text"
                class="form-control reg-form"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="text"
                class="form-control reg-form"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="password"
                class="form-control reg-form"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="row d-flex justify-content-center" id="dropdown">
              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  id="dropdownYear"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  placeholder="Year"
                  style="width: 300px;"
                >
                  Year
                </button>

                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownYears"
                  style="width: 300px;"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click="replaceYear('Year 1')"
                    >Year 1</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click="replaceYear('Year 2')"
                    >Year 2</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click="replaceYear('Year 3')"
                    >Year 3</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click="replaceYear('Year 4')"
                    >Year 4</a
                  >
                </div>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  id="dDSchool"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="width: 300px;"
                >
                  School
                </button>

                <div
                  class="dropdown-menu 2"
                  aria-labelledby="dDSchools"
                  style="width: 300px;"
                >
                  <a class="dropdown-item" href="#" onclick="replaceSchl('SIS')"
                    >SIS</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    onclick="replaceSchl('SOSS')"
                    >SOSS</a
                  >
                  <a class="dropdown-item" href="#" onclick="replaceSchl('SOE')"
                    >SOE</a
                  >
                  <a class="dropdown-item" href="#" onclick="replaceSchl('SOA')"
                    >SOA</a
                  >
                  <a class="dropdown-item" href="#" onclick="replaceSchl('SOL')"
                    >SOL</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    onclick="replaceSchl('LKSB')"
                    >LKSB</a
                  >
                </div>
              </div>
            </div>

            <div class="row d-flex justify-content-center" id="selectModHeader">
              <h4>Select your modules:</h4>
            </div>

            <!-- add modules -->
            <div id="vueMagic">
              <div class="row d-flex justify-content-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Course Number and Course Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="newItem"
                  id="modAdd"
                />

                <button
                  type="button"
                  class="btn btn-outline-primary btn-circle btn-sm text-center"
                  v-on:click="addNewItem"
                >
                  +
                </button>
              </div>

              <!-- need to fix width of the area of the list -->
              <div
                class="row d-flex justify-content-center"
                style="width: 100%;"
              >
                <ul
                  style="list-style-type: none; white-space: nowrap; max-width:auto;"
                >
                  <li v-for="(item, index) in items" :key="index">
                    {{ item }}
                    <button
                      type="button"
                      class="btn btn-outline-dark  btn-circle btn-sm"
                      @click="deleteFromList(index)"
                      style="display: inline-block;"
                    >
                      -
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <!-- register button -->
            <div class="row d-flex justify-content-center" id="reg-button">
              <button
                type="button"
                class="btn btn-outline-primary text-center"
                href="#"
              >
                Register!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      items: [],
      newItem: ""
    };
  },
  methods: {
    deleteFromList(index) {
      this.items.splice(index, 1);
    },
    addNewItem() {
      this.items.push(this.newItem);
      this.newItem = "";
    },
    replaceYear(id) {
      document.getElementById("dropdownYear").innerHTML = id;
    },
    replaceSchl(schl) {
      document.getElementById("dDSchool").innerHTML = schl;
    }
  }
};
</script>

<style scoped>
#header {
  /* margin-top: 20px; */
  /* padding: 0; */
}
#logo {
  max-width: 50%;
  max-height: 50%;
  margin-left: 20px;
  margin-top: 20px !important;
}

#sign-in {
  margin-top: 20px;
  margin-right: 20px;
  text-align: right;
}

#blank-space {
  height: 40px;
}

#dropdown {
  margin-top: 3%;
}
.reg-form {
  width: 75%;
  font-size: large;
  margin-top: 3%;
}

.dropdown-toggle {
  margin-top: 3%;
}

#dDSchool {
  margin-left: 1%;
}

#selectModHeader {
  margin-top: 3%;
}

.btn-circle.btn-sm {
  width: 30px;
  height: 30px;
  padding: 0px 0px;
  border-radius: 15px;
  font-size: large;
  text-align: center;
  margin-left: 1%;
  margin-top: 0.5%;
}

#addModule {
  margin-top: 3%;
}

.input-bar-item {
  display: table-cell;
}

#modAdd {
  width: 70%;
}

#courseText {
  width: 50%;
}

#signup {
  animation: bgcolor infinite 14s;
}

@keyframes bgcolor {
  0% {
    background: #ffdcce;
  }
  20% {
    background: #dcee9d;
  }
  60% {
    background: #ffe8ff;
  }
  80% {
    background: #cdcdf8;
  }
  100% {
    background: #dcf1c8;
  }
}

.btn-primary,
.btn-secondary {
  background-color: #6987c9;
  border: #6987c9;
}

#registration {
  margin-bottom: 100px;
}
</style>
