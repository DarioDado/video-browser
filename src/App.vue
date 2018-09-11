<template>
  <div class="container">
    <search-bar @termChange="onTermChange"></search-bar>
    <video-list :videos="videos"></video-list>
  </div>
</template>

<script>
//v-on:termChange isto sto i @termChange
//v-bind:videos isto sto i :videos
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyD7X-cH4C28kecETzElTe_feQHA0v9nJJ0';
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data(){
    return {
      videos: [],
    }
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${searchTerm}&type=video&key=${API_KEY}`)
        .then(response => {
          console.log(response.data.items);
          this.videos = response.data.items;
        });
    },
  }
};
</script>

