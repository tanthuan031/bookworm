import React from "react";
import ReactDOM from "react-dom/";
import Welcome from "./welcome";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from "./components/HomePages/HomePage";
import About from "./components/About";

import Footer from "./components/Layout/Footer";
import ShopPage from "./components/ShopPages/ShopPage";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";

ReactDOM.render(
    <HashRouter>
        <Header />
        <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />}/>          
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
    </HashRouter>,
    document.getElementById("root")
);
