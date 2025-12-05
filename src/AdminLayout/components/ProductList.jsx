import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import { fetchAllProducts } from "../../utils/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts();
      setProducts(data);
      setError("");
    } catch (err) {
      console.error("Error loading products:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleProductDeleted = () => {
    loadProducts();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center min-h-screen">
        <div className="text-2xl font-semibold text-white bg-black/50 px-8 py-4 rounded-lg">
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center min-h-screen">
        <div className="text-2xl font-semibold text-red-600 bg-white px-8 py-4 rounded-lg shadow-lg">
          {error}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center min-h-screen">
        <div className="text-2xl font-semibold text-gray-700 bg-white px-8 py-4 rounded-lg shadow-lg">
          No products found. Add your first product!
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center min-h-screen py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12">
        {products.map((product) => (
          <ProductCards
            product={product}
            key={product._id}
            onProductDeleted={handleProductDeleted}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
