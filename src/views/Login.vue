<template>
  <div class="area">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

      <div class="human">
        <img class="person" src="../assets/images/working_person.png" />
      </div>

      <div class="container-fluid" id="outer-box">
        <div class="logo">
          <img
            class="smoolife"
            src="../assets/images/smoolife_final.png"
            style="width:100%; height:80%;"
          />
        </div>

        <h2>Sign In</h2>
        <form name="signin" onSubmit="return formValidation();">
          <div class="email">
            <div class="input-group-prepend">
              <label class="sr-only" for="inlineFormInputGroupUsername"
                >Email</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="material-icons">perm_identity</i>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Email Address"
                    autocomplete="username"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="password">
            <div class="input-group-prepend">
              <label class="sr-only" for="inlineFormInputGroupPassword"
                >Password</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="material-icons">lock</i>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    id="inlineFormInputGroupPassword"
                    placeholder="Password"
                    autocomplete="current-password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="ssw" class="button">Login</button><br />
        </form>
      </div>
    </ul>
  </div>
</template>

<script>
require("@/assets/styles/login.css");

export default {
  name: "Login"
};
</script>
