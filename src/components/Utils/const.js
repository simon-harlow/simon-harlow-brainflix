import axios from "axios"

export const API_URL = "https://project-2-api.herokuapp.com"

export const API_KEY = axios
.get(`${API_URL}/register`)
.then((result) => {
    const apiKey = result.data.api_key
    return apiKey;
})
.catch((error) => {
    console.error(error);
});


