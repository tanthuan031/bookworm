import axiosClient from "./axiosClient";

const reviewApi = {
    getAll() {
        const url = "api/review";

        return axiosClient.get(url);
    },
};
export default reviewApi;
