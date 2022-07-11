import { call, put, takeLatest } from "redux-saga/effects";
import booksApi from "../../api/booksApi";
import { bookActions } from "./bookSlice";

function* fetchBookList(action) {
    try {
        const response = yield call(booksApi.getAll, action.payload);
        yield put(bookActions.fetchBookListSuccess(response));
    } catch (error) {
        yield put(bookActions.fetchBookListError());
    }
}

function* fetchBookHomePage_Feature(action) {
    try {
        const response = yield call(booksApi.getBookHomePage, action.payload);
        yield put(bookActions.fetchBookHomePageSuccess_Feature(response));
    } catch (error) {
        yield put(bookActions.fetchBookHomePageError_Feature());
    }
}
// HomePage_OnSale
function* fetchBookHomePage_OnSale(action) {
    try {
        const response = yield call(booksApi.getBookHomePage, action.payload);
        yield put(bookActions.fetchBookHomePageSuccess_OnSale(response));
    } catch (error) {
        yield put(bookActions.fetchBookHomePageError_OnSale());
    }
}

// getBookId
function* fetchBookId(action) {
    try {
        const response = yield call(booksApi.getBookById, action.payload);

        yield put(bookActions.fetchBookIdSuccess(response));
    } catch (error) {
        yield put(bookActions.fetchBookIdError());
    }
}
export default function* bookSaga() {
    yield takeLatest(bookActions.fetchBookList, fetchBookList);
    yield takeLatest(
        bookActions.fetchBookHomePage_Feature,
        fetchBookHomePage_Feature
    );
    yield takeLatest(
        bookActions.fetchBookHomePage_OnSale,
        fetchBookHomePage_OnSale
    );
    yield takeLatest(bookActions.fetchBookId, fetchBookId);
}
