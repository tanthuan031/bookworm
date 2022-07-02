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
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import { Link } from "react-router-dom";
import Category from "./Category";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Products from "./Products";

export default function ShopPage() {

    return (
        <Container className="shop-page">
            <Row>
                <Col md={2} className="shop-page-filter">
                    <Category />
                </Col>
                <Col md={10} className="ml-5">
                  <Products/>
                </Col>
            </Row>
        </Container>
    );
}
