import axiosClient from "./axiosClient";

const categoryApi = {
    getAll() {
        const url = "api/categories";

        return axiosClient.get(url);
    },
};
export default categoryApi;
