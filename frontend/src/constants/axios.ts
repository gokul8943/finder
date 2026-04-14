import axios from "axios";
import { BASE_URL } from "./base.url";

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;