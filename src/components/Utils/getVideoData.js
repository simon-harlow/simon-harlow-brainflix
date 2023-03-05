import axios from 'axios';

export const getVideoData = (API_URL, API_KEY, videoId) => {
    return axios
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
};