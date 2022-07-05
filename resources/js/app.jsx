import React from "react";
import ReactDOM from "react-dom/";
import Welcome from "./welcome";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./features/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from "./features/HomePages/HomePage";
import About from "./features/About";
import Footer from "./features/Layout/Footer";
import ShopPage from "./features/ShopPages/ShopPage";
import ProductPage from "./features/ProductPage/ProductPage";
import CartPage from "./features/CartPage/CartPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:productId" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);
