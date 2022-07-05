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
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import { Link } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ProductDetail(props) {

    // console.log(' product detail',props.bookList);


    
    return (
        
            <Row className="mt-5">
                <Col md={7}>
                    <div className="card mb-3 p-2">
                        <Row className="no-gutters">
                            <Col md={4}>
                                {/* <Image src="..." alt="..."> */}
                                <Image
                                    src={slide}
                                    className="img-fluid rounded-start"
                                />
                                <div className="p-2">By (author) Tan Thuan</div>
                            </Col>
                            <Col md={8}>
                                <div className="card-body">
                                    <h5 className="card-title">Book title</h5>
                                    <div className="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </div>
                                    <div className="card-text">
                                        <small className="text-muted">
                                            Last updated 3 mins ago
                                        </small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={5} className="product-page-quantity">
                    <Card
                        key={"Light"}
                        text={"dark"}
                        style={{ width: "18rem" }}
                        className="mb-5"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Quantity</Card.Title>
                            <Card.Text>
                                <InputGroup>
                                    <Button className="custom-btn">-</Button>
                                    <Form.Control
                                        value="1"
                                        className="input-group-text border-0 custom-btn "
                                        disabled="disabled"
                                        // className="custom-btn"
                                    />
                                    <Button className="custom-btn">+</Button>
                                </InputGroup>
                                <Button
                                    variant="info"
                                    className="product-btn-add-cart"
                                >
                                    Add to cart
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

    );
}
