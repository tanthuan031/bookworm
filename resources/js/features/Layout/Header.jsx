import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/bookcover/logo.jpg";
import { Button, Form, Image, Modal } from "react-bootstrap";
export default function Header() {
    // Show login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // CheckActivePage
    // const activePage =({isActive})=>{
    //     return {

    //     }
    // }

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
                                    Cart
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Button
                                    className="nav-link border-0 custom-button-default"
                                    onClick={handleShow}
                                    variant="info"

                                    // style= { width:"100px"}
                                >
                                    Sign in
                                </Button>
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
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="info"
                                type="submit"
                                // onClick={handleClose}
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
