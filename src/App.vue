<template>
  <div class="container">
    <search-bar @termChange="onTermChange"></search-bar>
    <div class="row">
      <video-details :video="selectedVideo"></video-details>
      <video-list :relatedVideos="relatedVideos" :videos="videos" @videoSelect="onVideoSelect"></video-list>
    </div>
  </div>
</template>

<script>
//v-on:termChange isto sto i @termChange
//v-bind:videos isto sto i :videos
import fetchService from './services/fetchService.js';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetails,
  },
  data(){
    return {
      videos: [],
      selectedVideo: null,
      relatedVideos: false,
    }
  },
  methods: {
    async onTermChange(searchTerm) {
      this.videos = await fetchService.fetchSearchedVideos(searchTerm);
      this.selectedVideo = null;
      this.relatedVideos = false;
    },
    async onVideoSelect(video) {
      const videoId = video.id;
      this.videos = await fetchService.fetchRelatedVideos(videoId);
      this.selectedVideo = video;
      this.relatedVideos = true;
    }
  }
};
</script>

