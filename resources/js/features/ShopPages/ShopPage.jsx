import React, { useState, useEffect } from "react";
import {
    Card,
    Col,
    Container,
    Pagination,
    Row,
    DropdownButton,
    ButtonGroup,
    Dropdown,
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import { Link, useParams } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Products from "./Products";
import booksApi from "../../api/booksApi";
import { useDispatch, useSelector } from "react-redux";
import {
    bookActions,
    selectBookFillter,
    selectBookList,
} from "../../redux/Books/bookSlice";
import {
    categoryAction,
    selectCategoryList,
} from "../../redux/Category/CategorySlide";
import FilterBy from "./FilterBy";

export default function ShopPage() {
    const filter = useSelector(selectBookFillter);
    const dispatch = useDispatch();
    // **************************
    // Products
    // Get data listBook
    useEffect(() => {
        dispatch(
            bookActions.fetchBookList({
                page: filter.page,
                per_page: filter.per_page,
                list_books: filter.list_books,
                author_id: filter.author_id,
                category_id: filter.category_id,
                star: filter.star,
            })
        );
    }, [dispatch, filter]);

    const handlePageChange = (page) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                page: page,
            })
        );
    };
    // Show page (5,15,25)
    const handleLimitPage = (per_page) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                per_page: per_page,
            })
        );
    };
    const handChangeSort = (sort) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                list_books: sort,
                star: null,
                author_id: null,
                category_id: null,
            })
        );
    };

    // Handle Filter Category
    const hadleFilterCategory = (id) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                category_id: id != 0 ? id : null,
                star: null,
            })
        );
    };

    // Handle Filter Author
    const hadleFilterAuthor = (id) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                author_id: id != 0 ? id : null,
                star: null,
            })
        );
    };

    // Handle Filter Star

    const hadleFilterStar = (id) => {
        dispatch(
            bookActions.setFilter({
                ...filter,
                star: id != 0 ? id : null,
                list_books: null,
                author_id: null,
                category_id: null,
                page: 1,
            })
        );
    };
    return (
        <Container className="shop-page">
            <Row>
                <Col md={2} className="shop-page-filter">
                    <FilterBy
                        onFilterByCategory={hadleFilterCategory}
                        onFilterByAuthor={hadleFilterAuthor}
                        onFilterByStar={hadleFilterStar}
                    />
                </Col>
                <Col md={10} className="ml-5">
                    <Products
                        onPageChange={handlePageChange}
                        onChangeLimitPage={handleLimitPage}
                        onChangeSort={handChangeSort}
                    />
                </Col>
            </Row>
        </Container>
    );
}
