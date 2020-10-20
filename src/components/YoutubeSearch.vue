<template>
  <div class="container">
    <form class="mb-3">
        <div class="mr-auto">
            <h3>{{ reformattedSearchString }}</h3>
        </div>
        <div class="input-group">
            <input
            v-model="searchString"
            @keydown.13.prevent="parseSearchString"
            type="text"
            class="form-control"
            v-bind:placeholder="placeholder"
            >
            <div class="input-group-append">
            <b-button @click="parseSearchString" variant="primary">
                Confirm
            </b-button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'YoutubeSearch',
  data() {
    return {
      searchString: '',
      placeholder: "What is this week's lesson topic?"
    };
  },
  methods: {
    parseSearchString() {
        this.placeholder = this.searchString;
        // Trim search string
        const trimmedSearchString = this.searchString.trim();

        if (trimmedSearchString !== '') {
            // Split search string
            const searchParams = trimmedSearchString.split(/\s+/);
            // Emit event
            this.$emit('search', searchParams);
            // Reset input field
            this.searchString = '';
      }
    }
  }
};
</script>

<style scoped>
.form-control {
  border-color: #6c757d;
}
</style>