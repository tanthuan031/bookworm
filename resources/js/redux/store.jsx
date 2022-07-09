import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import React from "react";
import createSagaMiddleware from "redux-saga";
import authorReducer from "./Author/authorSlide";
import bookReducer from "./Books/bookSlice";
import categoryReducer from "./Category/CategorySlide";
import globalStateReducer from "./glocal/globalSlide";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        books: bookReducer,
        category: categoryReducer,
        author: authorReducer,
        globalstate: globalStateReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
