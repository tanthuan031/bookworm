import orderApi from "../../api/OderApi";
import { orderAction } from "./orderSlide";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchOrder(action) {
    try {
        const response = yield call(orderApi.orderCart, action.payload);
        if (response.status === 401) {
            yield put(orderAction.fetchOrderFailure(response.data));
        } else {
            yield put(orderAction.fetchOrderSuccess(response));
        }
    } catch (error) {
        console.log("aa", error);
        yield put(orderAction.fetchOrderFailure(error));
    }
}
export default function* orderSaga() {
    yield takeLatest(orderAction.fetchOrder, fetchOrder);
}
