import {createSlice} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    totalCart:'',
    listItemCart:[],
    filter:null,

}

export const globalState = createSlice({
    name:'globalstate',
    initialState,
    reducers:{
        fetchglobalStateTotalCart(state,actions){
            state.loading=true;
            console.log(actions);
        },
        fetchglobalSuccessTotalCart(state,action){
            state.loading=false;
            state.totalCart=action.payload;
        },
        // ListItem
        fetchglobalStateListItemCart(state,actions){
            state.loading=true;
            console.log( actions );
        },
        fetchListItemCartSuccess(state,action){
            state.loading=false;
            state.listItemCart=action.payload;
        },
        
    }

})

// Actions
export const globalAction=globalState.actions;
// Selectors
export const selectglobalState=(state)=>state.globalstate.totalCart;
export const selectglobalStateListItemCart=(state)=>state.globalstate.listItemCart;

// Reducer
const globalStateReducer = globalState.reducer;
export default globalStateReducer;


