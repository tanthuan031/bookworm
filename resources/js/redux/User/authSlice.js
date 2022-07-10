import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLogin: false,
    logging: false,
    currenUser: {},
    errorsMessage: {},
    token: "",
    isgetUser: false,
    getUser: {},
    getUserErr: "",
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state, action) {
            state.isLogin = true;
            state.logging = false;
            state.currenUser = action.payload.user;
            state.token = action.payload.access_token;
            console.log(action.payload);
        },
        loginFailed(state, action) {
            state.isLogin = false;
            state.logging = false;
            state.errorsMessage = action.payload;
            console.log(action);
        },
        logout(state, action) {
            state.isLogin = false;
            state.currenUser = undefined;
        },
    },
});

// Actions

export const authAction = authSlice.actions;
// Slector
export const selectIsLoggedIn = (state) => state.auth.isLogin;
export const selectLogging = (state) => state.logging;
export const selectLoginError = (state) => state.auth.errorsMessage;
export const selectGetUser = (state) => state.auth.currenUser;
export const selectGetUserToken = (state) => state.auth.token;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
