import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f5313634ea861afddfbd07ba162882d9",
        language: "pt-BR",
        include_adult: false,
    }
});