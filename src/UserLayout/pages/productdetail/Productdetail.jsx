// src/UserLayout/pages/productdetail/Productdetail.jsx

import { useParams } from "react-router-dom";
import { useCart } from "../../../contextapi/Cartcontext";
import { useProducts } from "../../../contextapi/ProductsContext";

const Productdetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { getProductById, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-red-600">Product not found</p>
      </div>
    );
  }

  const imgSrc = product.image?.startsWith("http")
    ? product.image
    : `/${product.image}`;

  return (
    <div className="flex flex-col justify-end p-8 sm:flex-row sm:p-8 gap-4 sm:justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center h-screen sm:gap-12">
      <img
        src={imgSrc}
        alt={product.name}
        className="h-64 sm:w-96 sm:h-3/5 rounded-2xl"
      />

      <div className="flex flex-col gap-2 justify-center h-3/6 ">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">Price: {product.price} EGP</p>
        <p className="text-gray-600">
          {product.description || product.details}
        </p>

        <button
          onClick={() => addToCart({ ...product, id: product._id })}
          className="mt-3 w-full  bg-orange-800 hover:bg-orange-900 text-white py-2 rounded-lg  transition"
        >
          Add to Cart
        </button>
        <button className="mt-3 w-full  bg-orange-800 hover:bg-orange-900 text-white py-2 rounded-lg  transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Productdetail;
