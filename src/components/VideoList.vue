<template>
  <ul class="list-group">
    <video-list-item 
      v-for="video in videos" 
      :key="video.etag"
      :video="video">
    </video-list-item>
  </ul>
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
  }
}
</script>

<style>

</style>


