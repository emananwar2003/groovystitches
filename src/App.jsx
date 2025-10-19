import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Cart from "./pages/cart/Cart";
import Check from "./pages/checkout/Check";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Notfound from "./pages/Notfound/Notfound";
import Productdetail from "./pages/productdetail/Productdetail";
import Signup from "./pages/sign up/Signup";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Check />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Signup />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="/productdetail/:id" element={<Productdetail />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
