import axiosClient from "../axiosClient";

export default {
    getCookie() {
        const url = "sanctum/csrf-cookie";
        return axiosClient.get(url);
    },
};
