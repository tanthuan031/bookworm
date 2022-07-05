import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import bookReducer from './Books/bookSlice';
import rootSaga from './rootSaga';



const sagaMiddleware=createSagaMiddleware();
export const store = configureStore({
    reducer: {
       books:bookReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);


