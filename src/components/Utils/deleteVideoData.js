import axios from 'axios';

export const deleteVideoData = (API_URL, API_KEY, videoId, commentId) => {
    return axios
        .delete(`${API_URL}/videos/${videoId}/comments/${commentId}/?api_key=${API_KEY}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};