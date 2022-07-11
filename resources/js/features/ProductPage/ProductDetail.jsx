import { useState } from "react";
import {
    Alert,
    Button,
    Card,
    Col,
    Form,
    Image,
    InputGroup,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import book_default from "../../../assets/bookcover/book-default.jpg";
import { selectBookId } from "../../redux/Books/bookSlice";
import { globalAction } from "../../redux/glocal/globalSlide";
export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const getBookId = useSelector(selectBookId);
    // quantity product cart
    const [stateQuantityCart, setQuantity] = useState(1);
    // Increment Quantity (+);
    const handleIncrementQuanttity = (e) => {
        setQuantity(stateQuantityCart + 1 <= 8 ? stateQuantityCart + 1 : 8);
    };
    // Decrement -
    const handleDecrement = (e) => {
        setQuantity(stateQuantityCart - 1 >= 1 ? stateQuantityCart - 1 : 1);
    };
    // Handle to Cart
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleAddToCart = (e) => {
        const quantity = stateQuantityCart;
        let total_cart = 0;
        let cart = {};
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        if (localStorage.getItem("total_cart")) {
            total_cart = JSON.parse(localStorage.getItem("total_cart"));
        }

        let idBook = e.target.dataset.id;
        if (idBook in cart) {
            const quantitycheck = cart[idBook].quantity;

            if (quantitycheck > 8 || quantitycheck + quantity > 8) {
                setShow1(true);
                setTimeout(() => {
                    setShow1(false);
                }, 3000);
                return;
            } else {
                cart[idBook].quantity += quantity;
                total_cart += quantity;
            }
        } else {
            let cartItem = {
                id: getBookId.id,
                author_id: getBookId.author_id,
                book_title: getBookId.book_title,
                author_name: getBookId.author_name,
                book_price: getBookId.book_price,
                book_cover_photo: getBookId.book_cover_photo,
                discount_price: getBookId.book_price,
                final_price: getBookId.final_price,
                average_star: getBookId.average_star,
                quantity: quantity,
            };
            cart[idBook] = cartItem;
            total_cart += quantity;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total_cart", JSON.stringify(total_cart));
        dispatch(
            globalAction.fetchglobalStateTotalCart({
                totalCart: total_cart,
            })
        );
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    return (
        <>
            <Row className="mt-5">
                <Col md={7}>
                    <div className="card mb-3 p-2" id={getBookId.id}>
                        <input
                            value={getBookId.id}
                            hidden={true}
                            className="cart_item_id"
                        />
                        <Row className="no-gutters">
                            <Col md={4}>
                                {/* <Image src="..." alt="..."> */}
                                <Image
                                    src={`${
                                        getBookId.book_cover_photo != null
                                            ? "/images/" +
                                              getBookId.book_cover_photo
                                            : book_default
                                    }.jpg`}
                                    className="img-fluid rounded-start"
                                />

                                <div className="p-2">
                                    By (author) <b> {getBookId.author_name}</b>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {getBookId.book_title}
                                    </h5>
                                    <div className="card-text">
                                        {getBookId.book_summary}
                                    </div>

                                    <div className="card-text mt-3">
                                        {getBookId.author_bio}
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
                        <Card.Header>
                            <div className="card-text">
                                {(() => {
                                    if (getBookId.discount != null) {
                                        return (
                                            <div className="card-book-price">
                                                <small className="text-muted card-book-price">
                                                    <del>
                                                        {getBookId.book_price}$
                                                    </del>
                                                </small>
                                                <small className="text-muted card-price-discount">
                                                    {(
                                                        getBookId.final_price *
                                                        stateQuantityCart
                                                    ).toFixed(2)}
                                                    $
                                                </small>{" "}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div>
                                                <small className="text-muted card-book-price card-price-discount">
                                                    {(
                                                        getBookId.book_price *
                                                        stateQuantityCart
                                                    ).toFixed(2)}
                                                    $
                                                </small>
                                            </div>
                                        );
                                    }
                                })()}
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Quantity</Card.Title>
                            <Card.Text>
                                <InputGroup>
                                    <Button
                                        className="custom-btn"
                                        onClick={handleDecrement}
                                        id="reduced"
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        value={stateQuantityCart}
                                        className="input-group-text border-0 custom-btn "
                                        disabled="disabled"

                                        // className="custom-btn"
                                    />
                                    <Button
                                        className="custom-btn"
                                        id="increased"
                                        onClick={handleIncrementQuanttity}
                                    >
                                        +
                                    </Button>
                                </InputGroup>
                                <Button
                                    variant="info"
                                    className="product-btn-add-cart"
                                    onClick={handleAddToCart}
                                    data-id={getBookId.id}
                                >
                                    Add to cart
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="alertAddCart">
                <Alert show={show} variant="success">
                    Add to cart successfully !
                </Alert>
                <Alert show={show1} variant="warning">
                    The number of books has been maxed !
                </Alert>
                {/* {!show && <Button onClick={handleAddToCart}>Show Alert</Button>} */}
            </div>
        </>
    );
}
