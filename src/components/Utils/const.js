import axios from "axios"

const getApiKey = () => {
    axios
    .get('https://project-2-api.herokuapp.com/register')
    .then((result) => {
        const apiKey = result.data.api_key;
        console.log(apiKey);
        return apiKey;
    })
    .catch((error) => {
        console.error(error);
    });
};

export default getApiKey;