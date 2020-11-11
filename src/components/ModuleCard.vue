<template>
  <div class="card">
    <div class="card-body text-center">
      <img
        src="../../cards/image/4.gif"
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
          Web Application Development
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
        :width="800"
        :height="500"
        :draggable="true"
        :resizable="true"
      >
        <input
          type="text"
          class="form-control"
          placeholder="Search for Videos Here!"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" id="goButton">
            Go!
          </button>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleCard",
  methods: {
    show() {
      this.$modal.show("videos");
    },
    hide() {
      this.$modal.hide("videos");
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
</style>
