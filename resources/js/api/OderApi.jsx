import axiosClient from "./axiosClient";
import Csrf from "../api/Auth/csrf";
const orderApi = {
    async orderCart(params) {
        await Csrf.getCookie();
        const response = axiosClient
            .post("api/order", params)
            .then((repo) => {
                return repo;
            })
            .catch((error) => {
                console.log(error);
                return error.response;
            });
        return response;
    },
};
export default orderApi;
