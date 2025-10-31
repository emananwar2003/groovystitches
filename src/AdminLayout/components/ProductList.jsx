import React from "react";
import ProductCards from "./ProductCards";

const ProductList = ({ products }) => {
  return (
    <div className="flex justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center min-h-screen py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12">
        {products.map((product, index) => (
          <ProductCards product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
