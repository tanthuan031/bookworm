import React, { useState } from "react";
import {
    Card,
    Col,
    Container,
    Pagination,
    Row,
    DropdownButton,
    ButtonGroup,
    Dropdown,
    Image,
    InputGroup,
    Button,
    Form,
    Alert,
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import { Link, useParams } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";
import ProductDetail from "./ProductDetail";
import { useSelector } from "react-redux";
import { selectBookId, selectBookList } from "../../redux/Books/bookSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { bookActions } from "../../redux/Books/bookSlice";
export default function ProductPage() {
    //  const bookList = useSelector(selectBookList);

    //  console.log("aa", bookList);
    const bookId = useParams();
    // console.log("aa", bookId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            bookActions.fetchBookId({
                idBook: bookId,
            })
        );
    }, [dispatch]);
    const getBookId = useSelector(selectBookId);
    // console.log(",,", getBookId);

    return (
        <Container className="margin-Top">
            <Row className="about-title">
                <h3>
                    Category: {(getBookId.category_name + "").toUpperCase()}
                </h3>
            </Row>
            <ProductDetail />
        </Container>
    );
}
