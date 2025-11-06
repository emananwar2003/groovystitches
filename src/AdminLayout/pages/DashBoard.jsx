import React, { useState } from "react";
import EditProductCard from "../components/EditProductCard";
import AddProductCard from "./../components/AddProductCard";
import AddNewsCard from "../components/AddNewsCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 sm:flex-row bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center">
      <AddProductCard />
      <EditProductCard />
      <AddNewsCard />
    </div>
  );
};

export default Dashboard;
