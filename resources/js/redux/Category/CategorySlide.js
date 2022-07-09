import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    listCategory:[],
    filter:null,

}


export const categorySlide = createSlice({
    name:'category',
    initialState,
    reducers:{
        fetchCategoryList(state,actions){
            state.loading=true;
        },
        fetchCategorySuccess(state,action){
            state.loading=false;
            state.listCategory=action.payload.data.data
        },
        fetchCategoryError(state,action){
            state.loading=false;
        }
    }

})

// Actions
export const categoryAction=categorySlide.actions;
// Selectors
export const selectCategoryList=(state)=>state.category.listCategory;
export const selectCategoryLoading=(state)=>state.category.loading;

// Reducer
const categoryReducer = categorySlide.reducer;
export default categoryReducer;


