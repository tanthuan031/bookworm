import { call, put, takeLatest } from "redux-saga/effects"
import booksApi from "../../api/booksApi";
import { bookActions } from "./bookSlice"



function* fetchBookList(action) {
    try {
        console.log('saga',action.payload);
        const response =yield call(booksApi.getAll,action.payload)
        yield put(bookActions.fetchBookListSuccess(response));
        //  console.log('saga1',response);
        // 

        
    } catch (error) {
        console.log('api failed ',error);
        yield put(bookActions.fetchBookListError());
        
    }
}


function* fetchBookHomePage_Feature(action) {
    try {
        const response =yield call(booksApi.getBookHomePage,action.payload)
        yield put(bookActions.fetchBookHomePageSuccess_Feature(response));
        //  console.log('saga1',response);
        // 

        
    } catch (error) {
        console.log('api failed ',error);
        yield put(bookActions.fetchBookHomePageError_Feature());
        
    }
}
// HomePage_OnSale
function* fetchBookHomePage_OnSale(action) {
    try {
        const response =yield call(booksApi.getBookHomePage,action.payload)
        yield put(bookActions.fetchBookHomePageSuccess_OnSale(response));
        //  console.log('saga1',response);
        // 

        
    } catch (error) {
        console.log('api failed ',error);
        yield put(bookActions.fetchBookHomePageError_OnSale());
        
    }
}
export default function* bookSaga(){
yield takeLatest(bookActions.fetchBookList,fetchBookList);
yield takeLatest(bookActions.fetchBookHomePage_Feature,fetchBookHomePage_Feature);
yield takeLatest(bookActions.fetchBookHomePage_OnSale,fetchBookHomePage_OnSale);
}