<template>
  <div class="video-list-wraper col-xl-4">
    <h4 v-if="relatedVideos">Related Videos</h4>
    <ul class="list-group">
      <video-list-item 
        v-for="video in videos" 
        :key="video.etag"
        :video="video"
        @videoSelect="onVideoSelect">
      </video-list-item>
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
    relatedVideos: Boolean,
  },
  methods: {
    onVideoSelect(video){
      this.$emit('videoSelect', video);
    }
  }
}
</script>

<style scoped>
  .video-list-wraper {
    padding-left: 0;
  }
</style>



