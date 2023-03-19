import axios from 'axios';

export const getVideoData = (API_URL, videoId) => {
    return axios
      .get(`${API_URL}/video/${videoId}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
};