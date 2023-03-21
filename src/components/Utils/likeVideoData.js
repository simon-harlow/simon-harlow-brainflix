import axios from 'axios';

export const likeVideoData = (API_URL, videoId) => {
    return axios
        .put(`${API_URL}/videos/${videoId}/likes`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};