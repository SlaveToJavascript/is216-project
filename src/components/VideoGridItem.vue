<template>
  <div>
    <iframe
      width="230"
      height="130"
      :src="'https://www.youtube.com/embed/' + video.id.videoId"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div class="card-body">
      <h5 class="card-title">{{ video.snippet.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
    </div>
    <!-- <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">
      <img class="card-img-top" :src="video.snippet.thumbnails.medium.url" alt="YouTube thumbnail">
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ video.snippet.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      <p class="card-text">{{ video.snippet.description }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  props: ['video']
};
</script>

<style scoped>
div {
  border: none;
}
</style>