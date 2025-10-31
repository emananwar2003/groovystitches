import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import EditProductView from "./components/EditProductView";
import AddProductView from "./components/AddProductView";
import ProductList from "./components/ProductList";

const AdminLayout = () => {
  const [products] = useState([
    {
      name: "Bubble Gum Bag",
      price: "$95.00",
      image: "/bublegum.jpg",
    },
    {
      name: "Mashroum",
      price: "$120.00",
      image: "/mashroum.jpg",
    },
    {
      name: "Sobya Bag",
      price: "$70.00",
      image: "/sobya.jpg",
    },
  ]);
  return (
    <>
      <Routes>
        <Route index element={<DashBoard />} />
        <Route
          path="product-list"
          element={<ProductList products={products} />}
        />
        <Route path="add-product" element={<AddProductView />} />
        <Route path="edit-product" element={<EditProductView />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
