import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
    baseURL: "http://bookworm-app.local:8000/api",
    headers:{
        'Content-Type': 'application/json',

    }
});
// Dung de handle data truoc khi gui cho server
// Add a request interceptor
axiosClient.interceptors.request.use(function (config ) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
// Dung de handle data truoc khi client nhan
// Add a response interceptor
axiosClient.interceptors.response.use(function (response ) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;