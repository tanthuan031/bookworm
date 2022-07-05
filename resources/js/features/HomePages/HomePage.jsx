import React, { useEffect } from "react";
import FeaturedBooks from "./FeaturedBooks";
import OnSale from "./OnSale";
import { Image, Button, Container, Row, Col, Card } from "react-bootstrap";
import slide from "../../../assets/bookcover/book1.jpg";
import book_default from "../../../assets/bookcover/book-default.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    bookActions,
    selectBookHomePageFillter_Feature,
    selectBookHomePageFillter_OnSale,
    selectBookListHomepage_Feature,
    selectBookListHomepage_OnSale,
} from "../../redux/Books/bookSlice";
import { useState } from "react";

export default function HomePage() {
    // Hadle Featured
    // const dispatch = useSelector(selectBookFillter);
    const filterFeature = useSelector(selectBookHomePageFillter_Feature);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            bookActions.fetchBookHomePage_Feature({
                ...filterFeature,
                list_books: filterFeature.list_books,
            })
        );
    }, [dispatch, filterFeature]);
    const handleFeature = (featured) => {
        dispatch(
            bookActions.setFilterHomePage_Feature({
                list_books: featured,
            })
        );
    };

    // ***********************************************
    // Handle ON-Sale

    const filterOnSale = useSelector(selectBookHomePageFillter_OnSale);
    useEffect(() => {
        dispatch(
            bookActions.fetchBookHomePage_OnSale({
                ...filterOnSale,
                list_books: filterOnSale.list_books,
            })
        );
    }, [dispatch, filterOnSale]);

    return (
        <div>
            <OnSale />
            <FeaturedBooks onChangeFeature={handleFeature} />
        </div>
    );
}
