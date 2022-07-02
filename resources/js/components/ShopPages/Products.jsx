
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
import { IoStar, IoStarOutline } from "react-icons/io5";
export default function Products(){
        const [key, setIndex] = useState("Sort by on sale");
        const handleSelect = (selectedIndex, e) => {
            // console.log(key);
            // console.log(selectedIndex);
            // console.log(e);
            setIndex(selectedIndex);
        };

        const [keyShow, setIndexShow] = useState(5);
        const handleSelectShow = (selectedIndex, e) => {
            setIndexShow(selectedIndex);
        };
        console.log(keyShow);
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}>Show 1 in 120 books</Col>
                    <Col md={8}>
                        <div className="mb-3 btn-shop-page-product  ">
                            <DropdownButton
                                as={ButtonGroup}
                                title={key}
                                id="bg-nested-dropdown"
                                className="btn-shop-page-product-sort"
                                onSelect={handleSelect}
                            >
                                <Dropdown.Item
                                    eventKey="Sort by on sale"
                                    as={Link}
                                    to={"?on-sale-sort"}
                                >
                                    Sort by on sale
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="Sort by popularity"
                                    as={Link}
                                    to={"?popular-sort"}
                                >
                                    Sort by popularity
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey=" Sort by price: low to high"
                                    as={Link}
                                    to={"?sort=desc"}
                                >
                                    Sort by price: low to high
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="Sort by price:high to low"
                                    as={Link}
                                    to={"?sort=asc"}
                                >
                                    Sort by price:high to low
                                </Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                as={ButtonGroup}
                                title={"Show " + keyShow}
                                id="bg-nested-dropdown"
                                onSelect={handleSelectShow}
                            >
                                <Dropdown.Item
                                    eventKey="5"
                                    as={Link}
                                    to={"?per_page=5"}
                                >
                                    Show 5
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="15"
                                    as={Link}
                                    to={"?per_page=15"}
                                >
                                    Show 15
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="20"
                                    as={Link}
                                    to={"?per_page=20"}
                                >
                                    Show 20
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="25"
                                    as={Link}
                                    to={"?per_page=25"}
                                >
                                    Show 25
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={3} className="mb-2">
                        <Link to="1" className="card ">
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
                        <Link to="2" className="card ">
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

                <Row>
                    <nav aria-label="Page navigation example" className=" mt-4">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="?page=1">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="?page=2">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="?page=3">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Row>
            </Container>
        </div>
    );
}