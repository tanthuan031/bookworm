import { call, put, takeLatest } from "redux-saga/effects";
import categoryApi from "../../api/categoryAPI";
import { categoryAction } from "./CategorySlide";

function* fetchCategoryList(actions) {
    try {
        const reponse = yield call(categoryApi.getAll, actions.payload);
        yield put(categoryAction.fetchCategorySuccess(reponse));
    } catch (error) {
        yield put(categoryAction.fetchCategoryError(error));
    }
}
export default function* categorySaga() {
    yield takeLatest(categoryAction.fetchCategoryList, fetchCategoryList);
}
