<template>
  <div class="video-details-wraper col-xl-8">
    <div v-if="video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="videoUrl"></iframe>
      </div>
      <div class="details">
        <p><strong>Channel: </strong><a :href="channelUrl" target="_blank">{{ video.snippet.channelTitle }}</a></p>
        <p><strong>Published on: </strong>{{ formatedPublishedDate }}</p>
        <h4>{{ video.snippet.title }}</h4>
        <p>{{ video.snippet.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Moment from 'moment';
export default {
  name:'VideoDetails',
  props: ['video'],
  computed: {
    videoUrl(){
      const videoId = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    },
    channelUrl() {
      const { channelId } = this.video.snippet;
      return `https://www.youtube.com/channel/${channelId}`;
    },
    formatedPublishedDate() {
      return Moment(this.video.snippet.publishedAt).format("MMM D, YYYY");
    }
  }
}
</script>

<style scoped>
  .details {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #eee;
  }
  .details p:first-of-type {
    margin-bottom: 0;
  }
  .video-details-wraper {
    padding-left: 0;
  }
</style>


