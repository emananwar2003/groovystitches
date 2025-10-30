import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import EditProductView from "./components/EditProductView";
import AddProductView from "./components/AddProductView";

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route index element={<DashBoard />} />
        <Route path="add-product" element={<AddProductView />} />
        <Route path="edit-product" element={<EditProductView />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
