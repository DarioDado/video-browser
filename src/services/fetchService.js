import axios from 'axios';
import constants from '../constants/constants';


const fetchSearchedVideos = async (searchTerm) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=20&q=${searchTerm}&type=video&key=${constants.youtubeApiKey}`);
  return response.data.items;
};

const fetchRelatedVideos = async (videoId) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${videoId}&type=video&key=${constants.youtubeApiKey}`);
  return response.data.items;
};

const fetchVideoById = async (videoId) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${constants.youtubeApiKey}`);
  return response.data.items[0];
};

export default {
  fetchSearchedVideos,
  fetchRelatedVideos,
  fetchVideoById,
};
