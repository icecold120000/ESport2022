import axios from "axios";

const apiKey = "UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k";

const baseAxios = axios.create({
    baseURL: "https://api.pandascore.co",
})

baseAxios.interceptors.request.use(function (config) {
    const token = "UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k";
    config.headers.Authorization = `Bearer ${token}`;
    return config
    }, function (error) {
    return Promise.reject(error);
});

export default baseAxios;