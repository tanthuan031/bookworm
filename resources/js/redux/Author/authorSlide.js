import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading : false,
    listAuthor:[],
}

export const authorSlide=createSlice({
    name:'author',
    initialState,
    reducers:{
        fetchAuthorList(state, action){
            state.loading=true;
        },
        fetchAuthorSuccess(state,action){
            state.loading=false;
            state.listAuthor=action.payload.data.data;
        },
        fetchAuthorError(state,action){
            state.loading=false;
        }

    }
})

// Action
export const authorAction=authorSlide.actions;
// Selectors
export const selectAuthorList=(state)=>state.author.listAuthor;
export const selectAuthorLoading=(state)=>state.author.loading;
// Reducer
const authorReducer=authorSlide.reducer;
export default authorReducer;
