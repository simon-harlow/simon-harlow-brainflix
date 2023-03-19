import axios from 'axios';

export const deleteVideoData = (API_URL, videoId, commentId) => {
    return axios
        .delete(`${API_URL}/video/${videoId}/comments/${commentId}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};