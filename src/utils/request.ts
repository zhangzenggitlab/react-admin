import axios from "axios";
import { message } from "antd";

const instance = axios.create({
    baseURL: "",
    timeout: 5000,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");

instance.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    message.error(error)
    return Promise.reject(error);
});

const request = {
    post(url: string, data: any) {
        return instance.post(url, data);
    },
    get(url: string, params: any) {
        return instance.get(url, params);
    },
}


export default request;