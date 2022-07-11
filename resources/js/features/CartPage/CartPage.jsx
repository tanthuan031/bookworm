import { isEmpty } from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    InputGroup,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import book_default from "../../../assets/bookcover/book-default.jpg";
import {
    globalAction,
    selectglobalState,
    selectglobalStateListItemCart,
} from "../../redux/glocal/globalSlide";
import {
    orderAction,
    selectIsOrder,
    selectOrderCartError,
    selectOrderMessage,
    selectOrderMessageError,
} from "../../redux/Order/orderSlide";
import { authAction } from "../../redux/User/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
export default function CartPage() {
    var total_cart = 0;

    const listCart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : {};
    total_cart = JSON.parse(localStorage.getItem("total_cart"))
        ? JSON.parse(localStorage.getItem("total_cart"))
        : 0;
    const listBookCartItem = Object.values(listCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            globalAction.fetchglobalStateListItemCart({
                listItemCart: listBookCartItem,
            })
        );
    }, [dispatch]);
    const listCartItem = useSelector(selectglobalStateListItemCart);

    let totalPriceItem = 0;

    const handleDecrement = (e) => {
        // Get element from cart onclick
        var fieldName = e.target.dataset.field;
        var parent = e.target.closest("div");
        var elementInputCart = parent.querySelector(
            "input[name=" + fieldName + "]"
        );
        var elementbtnIncrement = parent.querySelector(".button-plus");
        var elementToTolItemCart = document.querySelector(
            e.target.dataset.target
        );
        const idCartItem = e.target.dataset.iditem;
        const finalPrice = listCartItem[e.target.dataset.id].final_price;
        var currentVal = elementInputCart.value;

        if (currentVal > 1) {
            elementInputCart.value = --currentVal;
            elementbtnIncrement.disabled = false;
            if (listCart) {
                if (idCartItem in listCart) {
                    listCart[idCartItem].quantity -= 1;
                    total_cart -= 1;
                }
            }
            // toTalItemTarget * --currentVal;
        } else {
            let result = confirm("Are you want to delete this book ?");
            if (result == true) {
                delete listCart[idCartItem];
                total_cart -= 1;
            }
        }

        elementToTolItemCart.innerHTML = `${(currentVal * finalPrice).toFixed(
            2
        )}$`;

        localStorage.setItem("cart", JSON.stringify(listCart));
        localStorage.setItem("total_cart", JSON.stringify(total_cart));
        dispatch(
            globalAction.fetchglobalStateTotalCart({
                totalCart: total_cart,
            })
        );
        const listBookCartItem = Object.values(listCart);
        dispatch(
            globalAction.fetchglobalStateListItemCart({
                listItemCart: listBookCartItem,
            })
        );
    };

    // Handle decrement and increment
    // Create 1 dataQuantity in button + - get from localStorage (So luong sp hien tai trong item)
    // Lang nghe su thay doi cua cai item do va va cap nhat so luong vao the input
    // -

    // +
    const handleInCrement = (e) => {
        // Get element from cart onclick
        var fieldName = e.target.dataset.field;
        var parent = e.target.closest("div");
        var elementInputCart = parent.querySelector(
            "input[name=" + fieldName + "]"
        );
        var elementToTolItemCart = document.querySelector(
            e.target.dataset.target
        );
        const idCartItem = e.target.dataset.iditem;
        const finalPrice = listCartItem[e.target.dataset.id].final_price;
        var currentVal = elementInputCart.value;

        if (currentVal <= 7) {
            elementInputCart.value = ++currentVal;
            if (listCart) {
                if (idCartItem in listCart) {
                    listCart[idCartItem].quantity += 1;
                    total_cart += 1;
                }
            }
        } else {
            elementInputCart.value = 8;
            currentVal = 8;

            e.target.disabled = true;
        }

        elementToTolItemCart.innerHTML = `${(currentVal * finalPrice).toFixed(
            2
        )}$`;

        localStorage.setItem("cart", JSON.stringify(listCart));
        localStorage.setItem("total_cart", JSON.stringify(total_cart));
        dispatch(
            globalAction.fetchglobalStateTotalCart({
                totalCart: total_cart,
            })
        );
        const listBookCartItem = Object.values(listCart);
        dispatch(
            globalAction.fetchglobalStateListItemCart({
                listItemCart: listBookCartItem,
            })
        );
    };
    // Handle Place Order
    const [isOrderedSucc, setIsOrder] = useState(true);
    const handlePlaceOder = (e) => {
        const listCartItemLocal = JSON.parse(localStorage.getItem("cart"))
            ? JSON.parse(localStorage.getItem("cart"))
            : {};
        const totalCartItemLocal = JSON.parse(
            localStorage.getItem("total_cart")
        )
            ? JSON.parse(localStorage.getItem("total_cart"))
            : "";

        const access_token = localStorage.getItem("access_token")
            ? localStorage.getItem("access_token")
            : "";

        const arraylistCartItemLocal = Object.values(listCartItemLocal);

        if (isEmpty(arraylistCartItemLocal)) {
            Swal.fire("Warning!", "You are not item in cart ?", "warning");
            return;
        } else if (isEmpty(access_token)) {
            Swal.fire("Warning!", "Please ! Login to order", "warning");
            dispatch(authAction.logout());
        } else {
            dispatch(
                orderAction.fetchOrder({
                    order_amount: totalCartItemLocal,
                    order_item: arraylistCartItemLocal,
                })
            );
        }
    };

    const isOrdered = useSelector(selectIsOrder);
    const checkCartItemExits = useSelector(selectOrderCartError);
    const messageErr = useSelector(selectOrderMessageError);
    const message = useSelector(selectOrderMessage);
    const navigate = useNavigate();

    if (isOrdered === true) {
        Swal.fire("Success", `${message}`, "success");
        localStorage.removeItem("total_cart");
        localStorage.removeItem("cart");
        return navigate("/");
    }

    return (
        <>
            <Container className="margin-Top">
                <Row className="about-title">
                    <h3> Your cart:{useSelector(selectglobalState)} item</h3>
                </Row>

                <Row className="mt-5">
                    <Col md={7}>
                        <Card
                            key={"Light"}
                            text={"dark"}
                            style={{ width: "100%" }}
                            className="mb-5 shadow-none"
                        >
                            <Card.Header>
                                <Row className="text-center shadow-sm p-3  bg-white rounded ">
                                    <Col md={5}>Product</Col>
                                    <Col md={3}>Price</Col>
                                    <Col md={2}>Quantity</Col>
                                    <Col md={2}>Total</Col>
                                </Row>
                            </Card.Header>
                            <Card.Body className="card-body-containt">
                                {listCartItem.map((itemCart, idex) => {
                                    return (
                                        <Row className="text-center mt-3 border-bottom shadow p-2 cart_item ">
                                            <Col md={5}>
                                                <Link
                                                    to={`/shop/${itemCart.id}`}
                                                    className="cart_item"
                                                    target="_blank"
                                                >
                                                    <Row>
                                                        <Col md={6}>
                                                            <Image
                                                                src={`${
                                                                    itemCart.book_cover_photo !=
                                                                    null
                                                                        ? "/images/" +
                                                                          itemCart.book_cover_photo
                                                                        : book_default
                                                                }.jpg`}
                                                                className="img-fluid rounded-start image-card"
                                                            />
                                                        </Col>
                                                        <Col
                                                            md={6}
                                                            className="d-flex justify-content-center flex-column"
                                                        >
                                                            <h4 className="card-title-custom">
                                                                {
                                                                    itemCart.book_title
                                                                }
                                                            </h4>
                                                            <p className="card-text-custom">
                                                                {
                                                                    itemCart.author_name
                                                                }
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </Col>
                                            <Col
                                                md={2}
                                                className="d-flex justify-content-center flex-column"
                                            >
                                                <div>
                                                    <h6 className="custom-text-red">
                                                        {itemCart.final_price}$
                                                    </h6>
                                                    <del>
                                                        {itemCart.book_price}$
                                                    </del>
                                                </div>
                                            </Col>
                                            <Col
                                                md={3}
                                                className="d-flex justify-content-center flex-column"
                                            >
                                                <InputGroup>
                                                    <Button
                                                        className=" button-minus custom-btn btn-cart-quantity"
                                                        data-quatitycart={
                                                            itemCart.quantity
                                                        }
                                                        data-id={idex}
                                                        data-iditem={
                                                            itemCart.id
                                                        }
                                                        data-field="quantity"
                                                        onClick={
                                                            handleDecrement
                                                        }
                                                        data-target={`#totalCart${idex}`}
                                                    >
                                                        -
                                                    </Button>
                                                    <Form.Control
                                                        value={
                                                            itemCart.quantity
                                                        }
                                                        className=" quantity-field input-group-text border-0 custom-btn btn-cart-quantity "
                                                        disabled="disabled"
                                                        id={itemCart.id}
                                                        data-iditem={
                                                            itemCart.id
                                                        }
                                                        name="quantity"
                                                        step="0"
                                                        max="8"
                                                        type="number"

                                                        // className="custom-btn btn-cart-quantity"
                                                    />
                                                    <Button
                                                        className="button-plus custom-btn btn-cart-quantity"
                                                        data-quatitycart={
                                                            itemCart.quantity
                                                        }
                                                        data-id={idex}
                                                        data-field="quantity"
                                                        data-iditem={
                                                            itemCart.id
                                                        }
                                                        onClick={
                                                            handleInCrement
                                                        }
                                                        data-target={`#totalCart${idex}`}
                                                    >
                                                        +
                                                    </Button>
                                                </InputGroup>
                                            </Col>
                                            <Col
                                                md={2}
                                                className="d-flex justify-content-center flex-column custom-text-red"
                                                id={`totalCart${idex}`}
                                            >
                                                {(
                                                    itemCart.quantity *
                                                    itemCart.final_price
                                                ).toFixed(2)}
                                                $
                                            </Col>
                                        </Row>
                                    );
                                })}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} className="ml-5 custom-carttotal">
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
                                    <p className="text-center mt-3">
                                        {(() => {
                                            let totalCart = 0;
                                            listCartItem.map((item, index) => {
                                                totalCart +=
                                                    item.quantity *
                                                    item.final_price;
                                            });
                                            return totalCart.toFixed(2);
                                        })()}
                                    </p>
                                </Card.Title>
                                <Card.Text>
                                    <Button
                                        variant="info"
                                        className="product-btn-add-cart  btn-primary"
                                        onClick={handlePlaceOder}
                                    >
                                        Place order
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <div className="alertAddCart">
                <Alert show={show} variant="warning">
                    You can only add min 1 and max 8 books !
                </Alert>
                {/* {!show && <Button onClick={handleAddToCart}>Show Alert</Button>} */}
            {/* </div> */}
        </>
    );
}
