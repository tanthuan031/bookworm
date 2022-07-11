import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    loadingHomePage_Feature: false,
    loadingHomePage_OnSale: false,
    loadingBookId: false,
    list: [],
    getBookId: [],
    getBookHomePage_Feature: [],
    getBookHomePage_OnSale: [],
    filter: {
        page: 1,
        per_page: 5,
        list_books: "on-sale-sort",
        author_id: null,
        category_id: null,
        star: null,
    },
    filterHomePage_Feature: {
        list_books: "featured-recommend",
    },
    filterHomePage_OnSale: {
        list_books: "on-sale",
    },
    filterBookId: {
        idBook: "",
    },
    pagination: {
        current_page: 1,
        page: 1,
        per_page: 5,
        prev: null,
        next: null,
        total: null,
    },
};
export const bookSlide = createSlice({
    name: "books",
    initialState,
    reducers: {
        fetchBookList(state, action) {
            state.loading = true;
        },
        fetchBookListSuccess(state, action) {
            state.list = action.payload.data.data;
            state.pagination = action.payload.data.pagination;
            state.loading = false;
        },
        fetchBookListError(state, action) {
            state.loading = false;
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
        // ******************************************************
        // BookHomePage_Feature
        fetchBookHomePage_Feature(state, action) {
            state.loadingHomePage_Feature = true;
        },
        fetchBookHomePageSuccess_Feature(state, action) {
            state.getBookHomePage_Feature = action.payload.data;
            state.loadingHomePage_Feature = false;
        },
        fetchBookHomePageError_Feature(state, action) {
            state.loadingHomePage_Feature = false;
        },
        setFilterHomePage_Feature(state, action) {
            state.filterHomePage_Feature = action.payload;
        },
        // /************************************************************************** */
        // BookHomePage_OnSale
        fetchBookHomePage_OnSale(state, action) {
            state.loadingHomePage_OnSale = true;
        },
        fetchBookHomePageSuccess_OnSale(state, action) {
            console.log("dli", action.payload.data);
            state.getBookHomePage_OnSale = action.payload.data;
            state.loadingHomePage_OnSale = false;
        },
        fetchBookHomePageError_OnSale(state, action) {
            state.loadingHomePage_OnSale = false;
        },
        setFilterHomePage_OnSale(state, action) {
            state.filterHomePage_OnSale = action.payload;
        },

        // /************************************************************************** */
        // getBookID
        fetchBookId(state, action) {
            state.loadingBookId = true;
        },
        fetchBookIdSuccess(state, action) {
            state.getBookId = action.payload.data.data;
            state.loadingBookId = false;
        },
        fetchBookIdError(state, action) {
            state.loadingBookId = false;
        },
    },
});

// Actions
export const bookActions = bookSlide.actions;

// Selectors
// ListBook
export const selectBookList = (state) => state.books.list;
export const selectBookLoading = (state) => state.books.loading;
export const selectBookFillter = (state) => state.books.filter;
export const selectBookPagination = (state) => state.books.pagination;
// HomePage-Feature
export const selectBookListHomepage_Feature = (state) =>
    state.books.getBookHomePage_Feature;
export const selectBookHomePageLoading_Feature = (state) =>
    state.books.loadingHomePage_Feature;
export const selectBookHomePageFillter_Feature = (state) =>
    state.books.filterHomePage_Feature;
// HomePage-Onsale

export const selectBookListHomepage_OnSale = (state) =>
    state.books.getBookHomePage_OnSale;
export const selectBookHomePageLoading_OnSale = (state) =>
    state.books.loadingHomePage_OnSale;
export const selectBookHomePageFillter_OnSale = (state) =>
    state.books.filterHomePage_OnSale;

// getBookId

export const selectBookId = (state) => state.books.getBookId;
export const selectBookIdLoading = (state) => state.books.loadingBookId;

// Reducer
const bookReducer = bookSlide.reducer;
export default bookReducer;
