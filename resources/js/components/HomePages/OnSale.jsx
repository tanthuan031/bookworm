import React, { useState } from "react";
import {
    Image,
    Button,
    Container,
    Row,
    Col,
    Carousel,
    Card,
} from "react-bootstrap";
import slide from "../../../assets/bookcover/book2.jpg";
import { Link } from "react-router-dom";
import {
    IoCaretBackOutline,
    IoCaretForwardOutline,
    IoChevronBackOutline,
    IoChevronForwardOutline,
    IoStar,
    IoStarOutline,
} from "react-icons/io5";
import { functions } from "lodash";
import { colors } from "laravel-mix/src/Log";

export default function OnSale1() {
   

    return (
        <Container  className="on-sale-mt">
            <Row className="pb-1">
                <Col md={1}></Col>
                <Col md={5}>
                    <h4>On Sale</h4>
                </Col>
                <Col md={5} className="btn-view-all">
                    <Link to="/shop" className="btn btn-info shadow-none ">
                        View All
                    </Link>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="on-sale pt-2 pb-2 ">
                    <Carousel
                        variant="dark"
                        prevLabel={null}
                        nextLabel={null}
                        prevIcon={
                            <IoChevronBackOutline
                                className="btn-slide-on-sale mr-2"
                                // style={{ marginRight: "3.5rem" }}
                            />
                        
                        }
                        nextIcon={
                            <IoChevronForwardOutline
                                className="btn-slide-on-sale "
                                // style={{ marginLeft: "3.5rem" }}
                            />
                        }
                    >
                        <Carousel.Item>
                            {/* <Container> */}
                            <Row>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                            </Row>
                            {/* </Container> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* <Container> */}
                            <Row>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/shop/1" className="card ">
                                        <Card.Img variant="top" src={slide} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>Author</Card.Text>
                                            <div className="star-body">
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStar className="star-checked" />
                                                <IoStarOutline />
                                                <IoStarOutline />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                $Price
                                            </small>
                                        </Card.Footer>
                                    </Link>
                                </Col>
                            </Row>
                            {/* </Container> */}
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    );
}
