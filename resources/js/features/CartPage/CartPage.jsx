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

export default function CartPage() {
    return (
        <Container className="margin-Top">
            <Row className="about-title">
                <h3> Your cart: 3 items </h3>
            </Row>

            <Row className="mt-5">
                <Col md={7}>
                    <Card
                        key={"Light"}
                        text={"dark"}
                        style={{ width: "100%" }}
                        className="mb-5"
                    >
                        <Card.Header>
                            <Row className="text-center">
                                <Col md={5}>Product</Col>
                                <Col md={2}>Price</Col>
                                <Col md={2}>Quantity</Col>
                                <Col md={3}>Total</Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row className="text-center mt-3 border-bottom shadow p-2">
                                <Col md={5}>
                                    <Row>
                                        <Col md={6}>
                                            <Image
                                                src={slide}
                                                className="img-fluid rounded-start"
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className="d-flex justify-content-center flex-column"
                                        >
                                            <h4 className="card-title">
                                                Book title
                                            </h4>
                                            <p className="card-text">Author</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <div>
                                        <h6>$29.99</h6>
                                        <del>$44.99</del>
                                    </div>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <InputGroup>
                                        <Button className="custom-btn btn-cart-quantity">
                                            -
                                        </Button>
                                        <Form.Control
                                            value="1"
                                            className="input-group-text border-0 custom-btn btn-cart-quantity "
                                            disabled="disabled"
                                            // className="custom-btn btn-cart-quantity"
                                        />
                                        <Button className="custom-btn btn-cart-quantity">
                                            +
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col
                                    md={3}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    Total
                                </Col>
                            </Row>
                            <Row className="text-center mt-3 border-bottom shadow p-2">
                                <Col md={5}>
                                    <Row>
                                        <Col md={6}>
                                            <Image
                                                src={slide}
                                                className="img-fluid rounded-start"
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className="d-flex justify-content-center flex-column"
                                        >
                                            <h4 className="card-title">
                                                Book title
                                            </h4>
                                            <p className="card-text">Author</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <div>
                                        <h6>$29.99</h6>
                                        <del>$44.99</del>
                                    </div>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <InputGroup>
                                        <Button className="custom-btn btn-cart-quantity">
                                            -
                                        </Button>
                                        <Form.Control
                                            value="1"
                                            className="input-group-text border-0 custom-btn btn-cart-quantity "
                                            disabled="disabled"
                                            // className="custom-btn btn-cart-quantity"
                                        />
                                        <Button className="custom-btn btn-cart-quantity">
                                            +
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col
                                    md={3}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    Total
                                </Col>
                            </Row>
                            <Row className="text-center mt-3 border-bottom shadow p-2">
                                <Col md={5}>
                                    <Row>
                                        <Col md={6}>
                                            <Image
                                                src={slide}
                                                className="img-fluid rounded-start"
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className="d-flex justify-content-center flex-column"
                                        >
                                            <h4 className="card-title">
                                                Book title
                                            </h4>
                                            <p className="card-text">Author</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <div>
                                        <h6>$29.99</h6>
                                        <del>$44.99</del>
                                    </div>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <InputGroup>
                                        <Button className="custom-btn btn-cart-quantity">
                                            -
                                        </Button>
                                        <Form.Control
                                            value="1"
                                            className="input-group-text border-0 custom-btn btn-cart-quantity "
                                            disabled="disabled"
                                            // className="custom-btn btn-cart-quantity"
                                        />
                                        <Button className="custom-btn btn-cart-quantity">
                                            +
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col
                                    md={3}
                                    className="d-flex justify-content-center flex-column"
                                >
                                    Total
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className="ml-5">
                    <Card
                        key={"Light"}
                        text={"dark"}
                        style={{ width: "18rem", marginLeft: "100px" }}
                        className="mb-5 shadow-sm"
                    >
                        <Card.Header className="text-center">
                            Cart Totals
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <p className="text-center mt-3">$99.97</p>
                            </Card.Title>
                            <Card.Text>
                                <Button
                                    variant="info"
                                    className="product-btn-add-cart"
                                >
                                    Place order
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
