import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/cart/Cart";
import Check from "./pages/checkout/Check";
import Login from "./pages/login/Login";
import Signup from "./pages/sign up/Signup";
import Products from "./pages/products/Products";
import Productdetail from "./pages/productdetail/Productdetail";
import News from "./pages/news/News";
import Notfound from "./pages/Notfound/Notfound";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Check />} />
        <Route path="login" element={<Login />} />
        <Route path="sign" element={<Signup />} />
        <Route path="products" element={<Products />} />
        <Route path="productdetail/:id" element={<Productdetail />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
