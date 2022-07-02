import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Category(){
    return (
        <div>
            <h5 className="shop-page-filter-header">Filter By</h5>
            <Row className="shop-page-filter-category mb-4 ">
                <h5>Category</h5>
                <div className="list-group" id="list-tab" role="tablist">
                    <Link
                        className="list-group-item list-group-item-action active"
                        id="list-home-list"
                        data-toggle="list"
                        to="#list-home"
                        role="tab"
                        aria-controls="home"
                    >
                        Category 1
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-profile-list"
                        data-toggle="list"
                        to="#list-profile"
                        role="tab"
                        aria-controls="profile"
                    >
                        Category 2
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-messages-list"
                        data-toggle="list"
                        to="#list-messages"
                        role="tab"
                        aria-controls="messages"
                    >
                        Category 3
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-settings-list"
                        data-toggle="list"
                        to="#list-settings"
                        role="tab"
                        aria-controls="settings"
                    >
                        Category 4
                    </Link>
                </div>
            </Row>
            <Row className="shop-page-filter-category mb-4 ">
                <h5>Author</h5>
                <div className="list-group" id="list-tab" role="tablist">
                    <Link
                        className="list-group-item list-group-item-action active"
                        id="list-home-list"
                        data-toggle="list"
                        to="#list-home"
                        role="tab"
                        aria-controls="home"
                    >
                        Category 1
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-profile-list"
                        data-toggle="list"
                        to="#list-profile"
                        role="tab"
                        aria-controls="profile"
                    >
                        Category 2
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-messages-list"
                        data-toggle="list"
                        to="#list-messages"
                        role="tab"
                        aria-controls="messages"
                    >
                        Category 3
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-settings-list"
                        data-toggle="list"
                        to="#list-settings"
                        role="tab"
                        aria-controls="settings"
                    >
                        Category 4
                    </Link>
                </div>
            </Row>
            <Row className="shop-page-filter-category mb-4 ">
                <h5>Star</h5>
                <div className="list-group" id="list-tab" role="tablist">
                    <Link
                        className="list-group-item list-group-item-action active"
                        id="list-home-list"
                        data-toggle="list"
                        to="#list-home"
                        role="tab"
                        aria-controls="home"
                    >
                        Category 1
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-profile-list"
                        data-toggle="list"
                        to="#list-profile"
                        role="tab"
                        aria-controls="profile"
                    >
                        Category 2
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-messages-list"
                        data-toggle="list"
                        to="#list-messages"
                        role="tab"
                        aria-controls="messages"
                    >
                        Category 3
                    </Link>
                    <Link
                        className="list-group-item list-group-item-action"
                        id="list-settings-list"
                        data-toggle="list"
                        to="#list-settings"
                        role="tab"
                        aria-controls="settings"
                    >
                        Category 4
                    </Link>
                </div>
            </Row>
        </div>
    );
}