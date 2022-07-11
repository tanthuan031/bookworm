// HomePage_OnSale

import { put, takeLatest } from "redux-saga/effects";
import { globalAction } from "./globalSlide";

function* fetchglobalStateTotalCart(action) {
    const response = action.payload.totalCart;
    yield put(globalAction.fetchglobalSuccessTotalCart(response));
    //  console.log('saga1',response);
}

function* fetchglobalStateListItemCart(action) {
    const response = action.payload.listItemCart;
    yield put(globalAction.fetchListItemCartSuccess(response));
    //  console.log('saga2',response);
}

export default function* globalStateSaga() {
    yield takeLatest(
        globalAction.fetchglobalStateTotalCart,
        fetchglobalStateTotalCart
    );
    yield takeLatest(
        globalAction.fetchglobalStateListItemCart,
        fetchglobalStateListItemCart
    );
}
