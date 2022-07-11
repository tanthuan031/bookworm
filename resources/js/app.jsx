import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./features/About";
import CartPage from "./features/CartPage/CartPage";
import HomePage from "./features/HomePages/HomePage";
import Footer from "./features/Layout/Footer";
import Header from "./features/Layout/Header";
import ProductPage from "./features/ProductPage/ProductPage";
import ShopPage from "./features/ShopPages/ShopPage";
import { store } from "./redux/store";
import Welcome from "./welcome";

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
