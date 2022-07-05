import {all} from 'redux-saga/effects';
import bookSaga from './Books/bookSaga';

export default function* rootSaga(){
    yield all([
        bookSaga(),
        // console.log('tao la root saga')
    ])
}