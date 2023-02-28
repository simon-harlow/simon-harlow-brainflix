import axios from "axios"

export const API_URL = "https://project-2-api.herokuapp.com"

export const API_KEY = () => {
    axios
    .get('apiURL')
    .then((result) => {
        const apiKeyResult = result.data.api_key;
        return apiKeyResult;
    })
    .catch((error) => {
        console.error(error);
    });
};


