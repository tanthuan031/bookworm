import axiosClient from "./axiosClient";

const booksApi = {
    getAll(params) {
        const url = "/books";

        return axiosClient.get(url, {
            params,
        });
    },
    getBookHomePage(params) {
        const url = "/books";
        console.log("page", params.filter);
        return axiosClient.get(url, {
            params,
        });
    },
};
export default booksApi;
