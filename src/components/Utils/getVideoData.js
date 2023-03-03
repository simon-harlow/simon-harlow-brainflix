import axios from 'axios';

export const getVideoData = (API_URL, API_KEY, id) => {
  return axios
    .get(`${API_URL}/videos/${id}?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};