import axiosClient from "./axiosClient";

const booksApi = {
    getAll(params) {
        const url = "api/books";
        return axiosClient.get(url, {
            params,
        });
    },
    getBookHomePage(params) {
        const url = "api/books";
        // console.log("page", params.filter);
        return axiosClient.get(url, {
            params,
        });
    },
    getBookById(params) {
        const id = params.idBook.productId;
        const url = `api/books/${id}`;
        return axiosClient.get(url);
        // console.log("page", axiosClient.get(url));
    },
};
export default booksApi;
