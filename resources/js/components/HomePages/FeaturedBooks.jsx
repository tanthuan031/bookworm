import React from 'react'
import {Image, Button, Container, Row, Col, Card} from "react-bootstrap";
import slide from '../../../assets/bookcover/book1.jpg'
import {Link} from "react-router-dom";
import {IoStar, IoStarOutline} from "react-icons/io5";


const FeaturedBooks = () => (
    // <div  className="container mt-2" >
    <Container  className="mt-5">
        <Row className="pb-1">
            <Col md={12}>
                <h4 className="text-center justify-content-center">Featured</h4>
                <div className="featured-btn mb-3">
                    {/*<Button className="btn btn-info ">View All</Button>*/}
                    <div type="button" className="btn btn-info">
                        <Link to={"/homepage?recommended"} className="btn-featured-link">
                            Recommended
                        </Link>
                    </div>
                    <div type="button" className="btn btn-light ml-4 ">
                        <Link to={"/homepage?popular"} className="btn-featured-link">
                            Popular
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={1}></Col>
            <Col md={10} pt={2} pb={2} pl={2} pr={0} className="on-sale">
                {/* <Container className='mt-2'> */}
                    <Row className='mt-2'>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Link to="#" className="card ">
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
                                    <small className="text-muted">$Price</small>
                                </Card.Footer>
                            </Link>
                        </Col>
                    </Row>
                {/* </Container> */}
            </Col>
            <Col md={1}></Col>
        </Row>
    </Container>
);

export default FeaturedBooks
