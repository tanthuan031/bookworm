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
import Category from "./Category";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Products from "./Products";
import booksApi from "../../api/booksApi";
import { useDispatch, useSelector } from "react-redux";
import {
    bookActions,
    selectBookFillter,
    selectBookList,
} from "../../redux/Books/bookSlice";

export default function ShopPage() {
    const filter = useSelector(selectBookFillter);
    const dispatch = useDispatch();
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
    console.log("fil", filter);
    // useEffect(() => {
    //     booksApi.getAll().then((response)=>console.log(response.data));
    // })
    const handlePageChange = (page) => {
        console.log("page11", page);
        dispatch(
            bookActions.setFilter({
                ...filter,
                page: page,
            })
        );
    };
    const handleLimitPage = (per_page) => {
        console.log("jh", per_page);
        dispatch(
            bookActions.setFilter({
                ...filter,
                per_page: per_page,
            })
        );
    };
    const handChangeSort = (sort) => {
        console.log("handChangeSort", sort);
        dispatch(
            bookActions.setFilter({
                ...filter,
                list_books: sort,
            })
        );
    };
    // console.log("fil", filter);
    return (
        <Container className="shop-page">
            <Row>
                <Col md={2} className="shop-page-filter">
                    <Category />
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
