import { useState } from "react";
import Banner from "./../../../components/homecomponents/Banner";
import CarouselHome from "./../../../components/homecomponents/CarouselHome";
import Homecard from "../../../components/homecomponents/Homecard";
import Washing from "./../../../components/homecomponents/Washing";
import { useProducts } from "./../../../contextapi/ProductsContext";
const Home = () => {
  const { products } = useProducts();
  const trending = products.slice(-4);
  
  return (
    <div className="flex  flex-col justify-center items-center bg-[#Fdf3e6] gap-20">
      <Banner />
      <CarouselHome trending={trending} />
      <Homecard />
      <Washing />
    </div>
  );
};

export default Home;
