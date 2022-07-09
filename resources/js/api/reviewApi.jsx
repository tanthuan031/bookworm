import axiosClient from "./axiosClient";

const reviewApi = {
    getAll() {
        const url = "/review";

        return axiosClient.get(url);
    },
};
export default reviewApi;
