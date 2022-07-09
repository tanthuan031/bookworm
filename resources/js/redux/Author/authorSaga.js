import {call,put,takeLatest} from 'redux-saga/effects'
import authorApi from "../../api/authorApi";
import { authorAction } from './authorSlide';


function* fetchAuthorList(actions){
    try {
        
        const response = yield call(authorApi.getAll,actions.payload);
        yield put(authorAction.fetchAuthorSuccess(response));
        
    } catch (error) {
        console.log('api error: ' + error);
        yield put(authorAction.fetchAuthorError(error));
        
    }
}
export default function* authorSaga(){
    yield takeLatest(authorAction.fetchAuthorList,fetchAuthorList);
}