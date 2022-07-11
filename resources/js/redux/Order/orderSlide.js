import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    isOderSuccess: false,
    listCart: [],
    message: {},
    messagesError: "",
};

export const orderSlide = createSlice({
    name: "order",
    initialState,
    reducers: {
        fetchOrder(state, action) {
            state.loading = true;
            state.isOderSuccess = false;
        },
        fetchOrderSuccess(state, action) {
            state.loading = false;
            state.listCart = action.payload.data.cart;
            state.message = action.payload.data.message;
            state.isOderSuccess = true;
        },
        fetchOrderFailure(state, action) {
            state.loading = false;
            state.isOderSuccess = false;
            state.messagesError = action.payload;
        },
    },
});
// action
export const orderAction = orderSlide.actions;
// Selectors
export const selectOrderCartError = (state) => state.order.listCart;
export const selectOrderLoading = (state) => state.order.loading;
export const selectOrderMessage = (state) => state.order.message;
export const selectOrderMessageError = (state) => state.order.messagesError;
export const selectIsOrder = (state) => state.order.isOderSuccess;
// reducer
const orderReducer = orderSlide.reducer;
export default orderReducer;
