import React, { useState } from "react";
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/bookcover/logo.jpg";
import {
    Button,
    Form,
    Image,
    Modal,
    Nav,
    Navbar,
    NavDropdown,
    Toast,
} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    globalAction,
    selectglobalState,
} from "../../redux/glocal/globalSlide";
import { useSelector } from "react-redux";
import {
    authAction,
    selectGetUser,
    selectGetUserLogin,
    selectGetUserToken,
    selectIsLoggedIn,
    selectLogging,
    selectLoginError,
} from "../../redux/User/authSlice";
import Swal from "sweetalert2";
import { info } from "laravel-mix/src/Log";
import { isEmpty } from "lodash";
export default function Header() {
    // Show login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Show totalCart
    const toTalCart = JSON.parse(localStorage.getItem("total_cart"))
        ? JSON.parse(localStorage.getItem("total_cart"))
        : 0;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            globalAction.fetchglobalStateTotalCart({
                totalCart: toTalCart,
            })
        );
    }, [dispatch]);
    const totalCartBook = useSelector(selectglobalState);
    console.log(totalCartBook);

    // Handle LogIn - Logout **************************************
    // StateLuu data
    const [stateLogin, setLogin] = useState({
        email: "",
        password: "",
    });

    const handleChangeInput = (e) => {
        setLogin({ ...stateLogin, [e.target.name]: e.target.value });
    };

    // State show User already login
    const [user, setUser] = useState();
    // console.log("fh", stateLogin);
    const handleLoginOnClick = (e) => {
        e.preventDefault();
        const data = {
            email: stateLogin.email,
            password: stateLogin.password,
        };
        dispatch(
            authAction.login({
                data,
            })
        );
    };

    const checkLogin = useSelector(selectIsLoggedIn);
    const token = useSelector(selectGetUserToken);
    const messageError = useSelector(selectLoginError);
    const userLogin = useSelector(selectGetUser);
    let navigate = useNavigate();
    useEffect(() => {
        if (checkLogin == true) {
            setShow(false);
            Swal.fire("Good job!", "You clicked the button!", "success");
            return navigate("shop");
        }
    }, [checkLogin]);
    console.log("token", token);
    console.log("lhong,", checkLogin);
    console.log("user=", userLogin);

    // Handle Logout
    const handleLogoutOnClick = (e) => {
        e.preventDefault();
        dispatch(authAction.logout());
    };
    return (
        <header className="header">
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
                <div className="container-fluid">
                    <Image className="header-logo" src={logo} />
                    <a className="navbar-brand ml-3" href="#">
                        BOOKWORM
                    </a>
                    <div
                        className="collapse navbar-collapse justify-content-end "
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-3  ">
                            <li className="nav-item ">
                                <NavLink
                                    // className={"nav-link "}
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "link-active" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    // className="nav-link"
                                    to="/shop"
                                    className={({ isActive }) =>
                                        isActive ? "link-active" : "nav-link"
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "link-active" : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    // className="nav-link"
                                    to="/cart"
                                    className={({ isActive }) =>
                                        isActive ? "link-active" : "nav-link"
                                    }
                                >
                                    <span> Cart({totalCartBook})</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {(() => {
                                    const username =
                                        localStorage.getItem("fullname");
                                    if (!isEmpty(username)) {
                                        return (
                                            <Navbar.Collapse
                                                id="navbar-dark-example"
                                                className="custom-text-white"
                                            >
                                                <Nav>
                                                    <NavDropdown
                                                        id="nav-dropdown-dark-example"
                                                        title={username}
                                                        menuVariant="dark"
                                                    >
                                                        <NavDropdown.Item
                                                            onClick={
                                                                handleLogoutOnClick
                                                            }
                                                        >
                                                            Logout
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav>
                                            </Navbar.Collapse>
                                        );
                                    } else {
                                        return (
                                            <Button
                                                className="nav-link border-0 custom-button-default"
                                                onClick={handleShow}
                                                variant="info"

                                                // style= { width:"100px"}
                                            >
                                                Sign in
                                            </Button>
                                        );
                                    }
                                })()}

                                {/*<Link className="nav-link"  to='/s'>Shop</Link>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleLoginOnClick}>
                        <span className="text-danger text-center">
                            {messageError.email}
                        </span>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={handleChangeInput}
                                value={stateLogin.email}
                                name="email"
                            />
                            <span className="text-danger">
                                {messageError.email}
                            </span>
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handleChangeInput}
                                value={stateLogin.password}
                                name="password"
                            />
                            <span className="text-danger">
                                {messageError.password}
                            </span>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="info"
                                type="submit"
                                // onClick={handleLoginOnClick}
                            >
                                Login
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </header>
    );
}
