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
        // console.log("page", params.filter);
        return axiosClient.get(url, {
            params,
        });
    },
    getBookById(params) {
        const id = params.idBook.productId;
        const url = `/books/${id}`;
        return axiosClient.get(url);
        // console.log("page", axiosClient.get(url));
    },
};
export default booksApi;
