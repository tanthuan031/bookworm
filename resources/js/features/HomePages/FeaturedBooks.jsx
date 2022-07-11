import React, { useEffect } from "react";
import { Image, Button, Container, Row, Col, Card } from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import book_default from "../../../assets/bookcover/book-default.jpg";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
    selectBookHomePageLoading_Feature,
    selectBookListHomepage_Feature,
} from "../../redux/Books/bookSlice";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

export default function FeaturedBooks({ onChangeFeature }) {
    // <div  className="container mt-2" >

    // getData
    const homeBookPage = useSelector(selectBookListHomepage_Feature);
    const isLoadingFeatured = useSelector(selectBookHomePageLoading_Feature);
    // Handle activeFeature
    const [activeFeature, setActive] = useState("1");
    const handleFeatured = (e) => {
        setActive(e.target.id);
        if (!onChangeFeature) return;

        onChangeFeature(e.target.value);
    };

    return (
        <Container className="mt-5">
            <Row className="pb-1">
                <Col md={12}>
                    <h4 className="text-center justify-content-center">
                        Featured
                    </h4>
                    <div className="featured-btn mb-3">
                        {/*<Button className="btn btn-info ">View All</Button>*/}
                        {/* <div type="button" className="btn btn-info"> */}
                        <Button
                            // to={"/homepage?recommended"}
                            className={`btn  ${
                                activeFeature == "1"
                                    ? "custom-button-default"
                                    : "btn-light cust-btn-feature"
                            }  margin_right-5 `}
                            value={"featured-recommend"}
                            onClick={handleFeatured}
                            id={"1"}
                        >
                            Recommended
                        </Button>
                        {/* </div> */}
                        {/* <div type="button" className=" btn btn-light ml-4 "> */}
                        <Button
                            // to={"/homepage?popular"}
                            value={"featured-popular"}
                            className={`btn 
                            ${
                                activeFeature == "2"
                                    ? "custom-button-default"
                                    : "btn-light cust-btn-feature"
                            } 
                            ml-4 `}
                            onClick={handleFeatured}
                            id={"2"}
                        >
                            Popular
                        </Button>
                        {/* </div> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>

                {(() => {
                    if (isLoadingFeatured) {
                        return (
                            <CircleLoader
                                // color={color}
                                loading={true}
                                className={"overridess"}
                                size={60}
                            />
                        );
                    } else {
                        return (
                            <Col
                                md={10}
                                pt={2}
                                pb={2}
                                pl={2}
                                pr={0}
                                className="on-sale"
                            >
                                {/* <Container className='mt-2'> */}
                                <Row className="mt-2">
                                    {homeBookPage.map((item, index) => (
                                        <Col md={3} className="mb-2">
                                            <Link
                                                to={`shop/${item.id}`}
                                                className="card "
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    // src={slide}
                                                    src={`${
                                                        item.book_cover_photo !=
                                                        null
                                                            ? "/images/" +
                                                              item.book_cover_photo
                                                            : book_default
                                                    }.jpg`}
                                                />
                                                <Card.Body className="card-body-item-custom">
                                                    <Card.Title className="card-title-custom">
                                                        {item.book_title}
                                                    </Card.Title>
                                                    <Card.Text className="card-text-custom">
                                                        {item.author_name}
                                                    </Card.Text>
                                                    <div className="star-body">
                                                        {(() => {
                                                            if (
                                                                item.average_star <
                                                                    2 &&
                                                                item.average_star >=
                                                                    1
                                                            ) {
                                                                return (
                                                                    <>
                                                                        <IoStar className="star-checked" />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                    </>
                                                                );
                                                            } else if (
                                                                item.average_star >=
                                                                    2 &&
                                                                item.average_star <
                                                                    3
                                                            ) {
                                                                return (
                                                                    <>
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                    </>
                                                                );
                                                            } else if (
                                                                item.average_star >=
                                                                    3 &&
                                                                item.average_star <
                                                                    4
                                                            ) {
                                                                return (
                                                                    <>
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                    </>
                                                                );
                                                            } else if (
                                                                item.average_star >=
                                                                    4 &&
                                                                item.average_star <
                                                                    5
                                                            ) {
                                                                return (
                                                                    <>
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStarOutline />
                                                                    </>
                                                                );
                                                            } else if (
                                                                item.average_star >=
                                                                    5 &&
                                                                item.average_star <
                                                                    6
                                                            ) {
                                                                return (
                                                                    <>
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                        <IoStar className="star-checked" />
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <>
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                        <IoStarOutline />
                                                                    </>
                                                                );
                                                            }
                                                        })()}
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    {(() => {
                                                        if (
                                                            item.discount !=
                                                            null
                                                        ) {
                                                            return (
                                                                <div>
                                                                    <small className="text-muted card-book-price">
                                                                        <del>
                                                                            {
                                                                                item.book_price
                                                                            }
                                                                            $
                                                                        </del>
                                                                    </small>
                                                                    <small className="text-muted card-price-discount">
                                                                        {
                                                                            item
                                                                                .discount
                                                                                .discount_price
                                                                        }
                                                                        $
                                                                    </small>{" "}
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div>
                                                                    <small className="text-muted card-book-price card-price-discount">
                                                                        {
                                                                            item.book_price
                                                                        }
                                                                        $
                                                                    </small>
                                                                </div>
                                                            );
                                                        }
                                                    })()}
                                                </Card.Footer>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                                {/* </Container> */}
                            </Col>
                        );
                    }
                })()}

                <Col md={1}></Col>
            </Row>
        </Container>
    );
}
