import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import React from "react";
import { HashRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { history } from "../utils/history";
import authorReducer from "./Author/authorSlide";
import bookReducer from "./Books/bookSlice";
import categoryReducer from "./Category/CategorySlide";
import globalStateReducer from "./glocal/globalSlide";
import rootSaga from "./rootSaga";
import authReducer from "./User/authSlice";

const rootReducer = combineReducers({
    // router: connectRouter(history),
    books: bookReducer,
    category: categoryReducer,
    author: authorReducer,
    globalstate: globalStateReducer,
    auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            sagaMiddleware
            // routerMiddleware(history)
            // routerMiddleware(history)
        ),
});
sagaMiddleware.run(rootSaga);
