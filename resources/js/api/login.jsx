import axiosClient from "./axiosClient";

const authorApi = {
    getAll() {
        const url = "/auth/login";

        return axiosClient.get("/sanctum/csrf-cookie");
    },
};
export default authorApi;
