import axiosClient from "./axiosClient";

const authorApi = {
    getAll() {
        const url = "/author";

        return axiosClient.get(url);
    },
};
export default authorApi;
