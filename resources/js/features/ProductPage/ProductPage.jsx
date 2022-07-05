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
    Form
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import { Link } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";
import ProductDetail from "./ProductDetail";

export default function ProductPage() {

//  const bookList = useSelector(selectBookList);

//  console.log("aa", bookList);



    return (
        <Container className="margin-Top">
            <Row className="about-title">
                <h3> Category Name </h3>
            </Row>
            <ProductDetail />
        </Container>
    );
}
