import axios from "axios";

export const fetchApi = axios.create({
    baseURL: "https://api.realworld.io/api"
});

fetchApi.interceptors.request.use((config) => {
    config.headers = {
        "Content-Type": "application/json",
    };
    return config;
});

fetchApi.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return {
            error: error?.response?.data,
            data: null,
        };
    }
);
