import ProductCard from "./productcard";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Products = () => {
  const products = [
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
  ];

  return (
    <div
      className="flex flex-wrap gap-6 justify-center 
    p-6 items-center bg-deep-orange-50 bg-[url('/products.jpg')] bg-[length:100%_100%] min-h-screen
    	 "
    >
      <h1 className="text-5xl font-extrabold text-gray-800 text-center sm:w-full">
        Our <span className="text-orange-500 ">Exclusive</span> Products
      </h1>
      {products.map((product, index) => (
        <Link to={`/productdetail/${index}`} key={index}>
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default Products;
