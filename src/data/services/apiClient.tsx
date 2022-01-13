import axios from 'axios'

export const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    imageBaseUrl: "https://image.tmdb.org/t/p/",
    apiKey: "78f9397886c00a679081cacff09e9058",
};

export const apiClient = axios.create({
    baseURL: apiConfig.baseURL,
})