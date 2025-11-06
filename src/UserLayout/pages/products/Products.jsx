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
import { FilterMenu } from "../../../components/filter/Filter";
import { useFilter } from "../../../contextapi/FilterContext";


const Products = () => {
  const { selectedCategories } = useFilter();
  const products = [
    {
      id: 0,
      img: "bublegum.jpg",
      title: "bublegum bag",
      details: "bublegum is your favourite bag for bubbly girls",
      price: 450,
      category: "Bags",
    },
    {
      id: 1,
      img: "colorful-wallet.jpg",
      title: "colorful wallet",
      details: "colorful wallets that can fit your cards and money",
      price: 150,
      category: "Bags",
    },
    {
      id: 2,
      img: "mashroum.jpg",
      title: "giant mashroum",
      details: "our giant mashroum for accessory holding",
      price: 125,
      category: "Accessories",
    },
    {
      id: 3,
      img: "sobya.jpg",
      title: "sobya",
      details: "sobya is our seasonal bag made speacialy for ramdan",
      price: 550,
      category: "Bags",
    },
  ];
  const filteredProducts = selectedCategories.includes("All")
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));


  return (
    <div
      className="flex flex-wrap gap-6 justify-center 
    p-6 items-center bg-deep-orange-50 bg-[url('/products.jpg')] bg-[length:100%_100%] min-h-screen"
    >
      <h1 className="text-5xl font-extrabold text-gray-800 text-center sm:w-full">
        Our <span className="text-orange-500 ">Exclusive</span> Products
      </h1>
      <div className="items-start self-start">
        <FilterMenu />
      </div>
      {filteredProducts.map((product) => (
        <Link to={`/productdetail/${product.id}`} key={product.id}>
          <ProductCard
            key={product.id}
            image={product.img}
            name={product.title}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default Products;
