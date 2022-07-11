import axiosClient from "../axiosClient";
import Csrf from "./csrf";
const authApi = {
    async loginApi(params) {
        await Csrf.getCookie();
        const response = await axiosClient
            .post("api/auth/login", params)
            .then((repo) => {
                return repo;
            })
            .catch((error) => {
                // console.log(error.response.data.errors);
                return error.response;
            });
        return response;
    },

    async logout() {
        await Csrf.getCookie();
        return axiosClient.post("api/auth/logout");
    },
};
export default authApi;
