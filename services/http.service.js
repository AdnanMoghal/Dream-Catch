import Axios from "axios";
import ErrorService from "@/services/error.service";

const axios = Axios.create({
    baseURL: process.env.baseUrl
});

axios.interceptors.response.use(async (response) => {
    // console.log('interceptors response: ', response);
    return response;
},  async (error) => {
    await HttpService.handlingError(error.response);
    return Promise.reject(error);
});

export default class HttpService {

    static async init() {
        await HttpService.setToken();
    }

    static async get(url, params) {
        return axios.get(url, params);
    }

    static async post(url, body, params) {
        return axios.post(url, body, params);
    }

    static async put(url, body, params) {
        return axios.put(url, body, params);
    }

    static async delete(url, params) {
        return axios.delete(url, params);
    }

    static async setToken() {
        let aTokenStorage = JSON.parse(localStorage.getItem('atoken'));
        if (!aTokenStorage) return;

        let aTokenPost = `Bearer ${aTokenStorage['access_token']}`;

        axios.defaults.headers.common['Authorization'] = aTokenPost;
    }

    static removeToken() {
        axios.defaults.headers.common['Authorization'] = null;
    }

    static async handlingError(error) {
        await ErrorService.wrongLogin(error);
    }
}