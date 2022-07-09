import React, { useState } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    DropdownButton,
    ButtonGroup,
    Dropdown,
} from "react-bootstrap";
import book_default from "../../../assets/bookcover/book-default.jpg";
import { Link } from "react-router-dom";
import { IoStar, IoStarOutline } from "react-icons/io5";
import PaginationComponent from "../Pagination/PaginationComponent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import {
    selectBookList,
    selectBookListHomepage,
    selectBookPagination,
} from "../../redux/Books/bookSlice";

export default function Products({
    onPageChange,
    onChangeLimitPage,
    onChangeSort,
    filter,
}) {
    // Show btn sort onSale...
    const bookList = useSelector(selectBookList);
    console.log("bookList", bookList);
    const bookListPagination = useSelector(selectBookPagination);
    // define value of sort field
    const nameSort = {
        "on-sale-sort": "Sort by on sale",
        "featured-popular-sort": "Sort by popularity",
        // asc
        asc: "Sort by price: low to high",
        // desc
        desc: "Sort by price:high to low",
    };
    // console.log(nameSort[1]);
    const [key, setIndex] = useState("Sort by on sale");
    // Show sort order
    const handleSelect = (selectedIndex, e) => {
        setIndex(nameSort[selectedIndex]);
        if (!onChangeSort) return;
        onChangeSort(selectedIndex);
    };
    // Show btn sort show 5 items...
    const [keyShow, setIndexShow] = useState(5);
    const handleSelectShow = (selectedIndex, e) => {
        setIndexShow(selectedIndex);
        //  put data cur_page about parent (show 5 , show 15)
        // console.log("kj", selectedIndex);
        if (!onChangeLimitPage) return;

        onChangeLimitPage(selectedIndex);
    };

    // Pagination
    const perPage = bookListPagination.perPage;
    // const currentPage = bookListPagination.current_page;
    const totalBooks = bookListPagination.toTalPage;
    const initialPage = {
        // totalRecords: 0,
        activePage: 1,
        // limit: 0,
    };
    const [dataPage, setPage] = useState(initialPage);

    const handlePageChange = (page) => {
        setPage({
            activePage: page,
        });

        if (!onPageChange) return;
        //  put data about parent
        onPageChange(page);
    };
    console.log("bookList", bookList);
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        Show {keyShow} in {totalBooks} books
                    </Col>
                    <Col md={8}>
                        <div className="mb-3 btn-shop-page-product   ">
                            <DropdownButton
                                as={ButtonGroup}
                                title={key}
                                id="bg-nested-dropdown"
                                className="btn-shop-page-product-sort"
                                onSelect={handleSelect}
                            >
                                <Dropdown.Item
                                    eventKey={"on-sale-sort"}
                                    as={Link}
                                    to={"?on-sale-sort"}
                                >
                                    Sort by on sale
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey={"featured-popular-sort"}
                                    as={Link}
                                    to={"?popular-sort"}
                                >
                                    Sort by popularity
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey={"asc"}
                                    as={Link}
                                    to={"?sort=asc"}
                                >
                                    Sort by price: low to high
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey={"desc"}
                                    as={Link}
                                    to={"?sort=desc"}
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
                    {bookList.map((book, index) => (
                        <Col md={3} className="mb-2">
                            <div className="card-group">
                                <Link to={`${book.id}`} className="card">
                                    <Card.Img
                                        variant="top"
                                        // src={slide}
                                        src={`${
                                            book.book_cover_photo != null
                                                ? "/images/" +
                                                  book.book_cover_photo
                                                : book_default
                                        }.jpg`}
                                    />
                                    <Card.Body className="card-body-item-custom">
                                        <Card.Title className="card-title-custom">
                                            {book.book_title}
                                        </Card.Title>
                                        <Card.Text className="card-text-custom">
                                            {book.author.author_name}
                                        </Card.Text>
                                        <div className="star-body">
                                            {(() => {
                                                if (
                                                    book.average_star < 2 &&
                                                    book.average_star >= 1
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
                                                    book.average_star >= 2 &&
                                                    book.average_star < 3
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
                                                    book.average_star >= 3 &&
                                                    book.average_star < 4
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
                                                    book.average_star >= 4 &&
                                                    book.average_star < 5
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
                                                    book.average_star >= 5 &&
                                                    book.average_star < 6
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
                                            if (book.discount != null) {
                                                return (
                                                    <div>
                                                        <small className="text-muted card-book-price">
                                                            <del>
                                                                {
                                                                    book.book_price
                                                                }
                                                                $
                                                            </del>
                                                        </small>
                                                        <small className="text-muted card-price-discount">
                                                            {
                                                                book.discount
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
                                                            {book.book_price}$
                                                        </small>
                                                    </div>
                                                );
                                            }
                                        })()}
                                    </Card.Footer>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row>
                    {/* <div className=" pagination justify-content-center mt-4">
                        <PaginationComponent
                            // getAllData={initialPage.data}
                            totalRecords={totalBooks}
                            itemsCountPerPage={perPage}
                            currentPage={callbackCurrentPage}
                        />
                    </div> */}

                    <div className="pagination-wrapper ">
                        <Pagination
                            aria-label="Page navigation example"
                            itemClass="page-item"
                            linkClass="page-link"
                            prevPageText="Prev"
                            nextPageText="Next"
                            firstPageText="First"
                            lastPageText="Last"
                            ellipsi
                            activePage={dataPage.activePage}
                            // Per_Page
                            itemsCountPerPage={perPage}
                            // Total list item books
                            totalItemsCount={totalBooks}
                            onChange={handlePageChange}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}
