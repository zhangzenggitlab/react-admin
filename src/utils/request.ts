import axios from "axios";
import { message } from "antd";
import App from "@/initApp";
import qs from "qs";
const instance = axios.create({
    baseURL: "",
    timeout: 5000,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.token = localStorage.getItem("token");

    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {

    if (response.status === 200 && response.data.code == 200) {
        return response.data;
    }

    if (response.data.code === 401) {
        App.destory();
    }

    console.log(response.data.msg)
    message.error(response.data.msg);
    return Promise.reject();
}, function (error) {
    message.error(error)
    return Promise.reject(error);
});

const request = {
    post(url: string, data: any) {
        return instance.post(url, data);
    }, put(url: string, data: any) {
        return instance.put(url, data);
    },
    delete(url: string, data: any) {
        return instance.delete(url, { data });
    },
    get(url: string, params: any) {
        return instance.get(url + "?" + qs.stringify(params));
    },
}


export default request;