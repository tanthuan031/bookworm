import { call, put, takeLatest } from "redux-saga/effects";
import authApi from "../../api/Auth/authApi";
import { authAction } from "./authSlice";

function* handleLogin(action) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
        const reponse = yield call(authApi.loginApi, action.payload.data);
        if (reponse.status === 422) {
            yield put(authAction.loginFailed(reponse.data.errors));
        } else {
            localStorage.setItem("access_token", reponse.data.access_token);
            const fullname =
                reponse.data.user.lastname + reponse.data.user.lastname;
            localStorage.setItem("fullname", fullname);
            yield put(authAction.loginSuccess(reponse.data));
        }
    }
}
function* handleLogout() {
    if (Boolean(localStorage.getItem("access_token"))) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("fullname");
        const reponse = yield call(authApi.logout);
    }
}
export default function* authSaga() {
    // yield fork(watchLoginFlow);
    yield takeLatest(authAction.login, handleLogin);
    yield takeLatest(authAction.logout, handleLogout);
}
