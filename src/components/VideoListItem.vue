<template>
  <div>
    <li class="list-group-item media" @click="onVideoSelect">
      <img class="mr-3" :src="videoUrl" alt="video thumbnail">
      <div class="media-body">
        {{video.snippet.title}}
      </div>
    </li>
  </div>
</template>

<script>
import fetchService from '../services/fetchService.js';
export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  computed: {
    videoUrl(){
      return this.video.snippet.thumbnails.default.url;
    },
  },
  methods: {
    async onVideoSelect(){
      const {videoId} = this.video.id;
      const video = await fetchService.fetchVideoById(videoId);
      this.$emit('videoSelect', video);
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }
  li:hover {
    background-color: #eee;
  }
</style>


