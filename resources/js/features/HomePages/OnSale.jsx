// import Swiper core and required modules
import { useState, CSSProperties } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import book_default from "../../../assets/bookcover/book-default.jpg";

// Import Swiper styles
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    selectBookHomePageLoading_OnSale,
    selectBookListHomepage_OnSale,
} from "../../redux/Books/bookSlice";
import { CircleLoader, ClipLoader } from "react-spinners";
export default function OnSale() {
    const onSale = useSelector(selectBookListHomepage_OnSale);
    const isLoadingOnSale = useSelector(selectBookHomePageLoading_OnSale);

    return (
        <Container className="on-sale-mt">
            <Row className="pb-1">
                <Col md={1} sm={1}></Col>
                <Col md={5} sm={5}>
                    <h4>On Sale</h4>
                </Col>
                <Col md={5} sm={5} className="btn-view-all">
                    <Link
                        to="/shop"
                        className="btn custom-button-default shadow-none "
                    >
                        View All
                    </Link>
                </Col>
                <Col md={1} sm={1}></Col>
            </Row>
            <Row>
                <Col md={1} sm={3}></Col>
                <Col md={10} sm={6} className="on-sale pt-2 pb-2 ">
                    {(() => {
                        if (isLoadingOnSale) {
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
                                <Swiper
                                    // install Swiper modules
                                    modules={[
                                        Navigation,
                                        Pagination,
                                        // Scrollbar,
                                        Autoplay,
                                        A11y,
                                    ]}
                                    spaceBetween={25}
                                    slidesPerView={4}
                                    navigation
                                    pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    {onSale.map((itemOnsale, index) => (
                                        <SwiperSlide>
                                            <Link
                                                to={`/shop/${itemOnsale.id}`}
                                                className="card "
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    // src={slide}
                                                    src={`${
                                                        itemOnsale.book_cover_photo !=
                                                        null
                                                            ? "/images/" +
                                                              itemOnsale.book_cover_photo
                                                            : book_default
                                                    }.jpg`}
                                                />
                                                <Card.Body>
                                                    <Card.Title className="card-title-custom">
                                                        {itemOnsale.book_title}
                                                    </Card.Title>
                                                    <Card.Text className="card-text-custom">
                                                        {
                                                            itemOnsale.author
                                                                .author_name
                                                        }
                                                    </Card.Text>
                                                    <div className="star-body">
                                                        {(() => {
                                                            if (
                                                                itemOnsale.average_star <
                                                                    2 &&
                                                                itemOnsale.average_star >=
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
                                                                itemOnsale.average_star >=
                                                                    2 &&
                                                                itemOnsale.average_star <
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
                                                                itemOnsale.average_star >=
                                                                    3 &&
                                                                itemOnsale.average_star <
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
                                                                itemOnsale.average_star >=
                                                                    4 &&
                                                                itemOnsale.average_star <
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
                                                                itemOnsale.average_star >=
                                                                    5 &&
                                                                itemOnsale.average_star <
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
                                                            itemOnsale.discount !=
                                                            null
                                                        ) {
                                                            return (
                                                                <div>
                                                                    <small className="text-muted card-book-price">
                                                                        <del>
                                                                            {
                                                                                itemOnsale.book_price
                                                                            }
                                                                            $
                                                                        </del>
                                                                    </small>
                                                                    <small className="text-muted card-price-discount">
                                                                        {
                                                                            itemOnsale
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
                                                                            itemOnsale.book_price
                                                                        }
                                                                        $
                                                                    </small>
                                                                </div>
                                                            );
                                                        }
                                                    })()}
                                                </Card.Footer>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            );
                        }
                    })()}
                </Col>
                <Col md={1} sm={3}></Col>
            </Row>
        </Container>
    );
}
