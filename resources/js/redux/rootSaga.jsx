import { all } from "redux-saga/effects";
import authorSaga from "./Author/authorSaga";
import bookSaga from "./Books/bookSaga";
import categorySaga from "./Category/CategorySaga";
import globalStateSaga from "./glocal/globalSaga";

export default function* rootSaga() {
    yield all([
        bookSaga(),
        categorySaga(),
        authorSaga(),
        globalStateSaga(),

        // console.log('tao la root saga')
    ]);
}
