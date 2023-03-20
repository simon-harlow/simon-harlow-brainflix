import axios from 'axios';

export const likeVideoComment = (API_URL, videoId, commentId) => {
    return axios
        .put(`${API_URL}/videos/${videoId}/comments/${commentId}/likes`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};