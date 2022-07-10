import axiosClient from "./axiosClient";

const authorApi = {
    getAll() {
        const url = "/api/author";

        return axiosClient.get(url);
    },
};
export default authorApi;
