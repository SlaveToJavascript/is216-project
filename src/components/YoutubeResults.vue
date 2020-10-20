<template>
  <div class="container mb-3">
    <div class="card-columns">
      <div class="card" v-bind:key="video.id.videoId" v-for="video in videos">
        <VideoGridItem v-bind:video="video"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoGridItem from './VideoGridItem';

export default {
  name: 'YoutubeResults',
  components: {
    VideoGridItem
  },
  data() {
    return {
      title: 'Search Results',
    };
  },
  methods: {
    
  },
  props: ['videos', 'reformattedSearchString']
};
</script>

<style scoped>
button:focus {
  /* box-shadow: none !important; */
}
</style>