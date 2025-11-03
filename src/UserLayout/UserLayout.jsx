import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/cart/Cart";
import Check from "./pages/checkout/Check";
import Products from "./pages/products/Products";
import Productdetail from "./pages/productdetail/Productdetail";
import News from "./pages/news/News";
import Notfound from "./pages/Notfound/Notfound";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HeaderNavbar from "./../components/header/component/Navbar";
import Footer from "./../components/footer/Footer";
import Protectcart from "./../contextapi/Protectcart";



const UserLayout = () => {
    
 
    
  return (
    <div>

    <HeaderNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="checkout"
          element={
            <Protectcart>
              <Check />
            </Protectcart>
          }
        />
    
        <Route path="products" element={<Products />} />
        <Route path="productdetail/:id" element={<Productdetail />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserLayout;
