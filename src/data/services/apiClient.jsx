import axios from 'axios'

export default apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    imageBaseUrl: "https://image.tmdb.org/t/p/",
    apiKey: "78f9397886c00a679081cacff09e9058",
};

export default axios.create({
    baseURL: apiConfig.baseURL,
})