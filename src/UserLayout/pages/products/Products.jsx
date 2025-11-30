// src/UserLayout/pages/products/Products.jsx

import ProductCard from "./productcard";
import { Link } from "react-router-dom";

import { FilterMenu } from "../../../components/filter/Filter";
import { useFilter } from "../../../contextapi/FilterContext";
import { useProducts } from "../../../contextapi/ProductsContext";

const Products = () => {
  const { selectedCategories } = useFilter();
  const { products, loading, error } = useProducts();

  console.log("Products rendered, products =", products);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Loading products...</p>
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

  let filteredProducts = [];

  if (
    !selectedCategories ||
    selectedCategories.length === 0 ||
    selectedCategories.includes("All")
  ) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => {
      if (!p.category) return false;
      return selectedCategories.some(
        (cat) =>
          p.category.toLowerCase().trim() === String(cat).toLowerCase().trim()
      );
    });
  }

  if (!filteredProducts.length && products.length) {
    filteredProducts = products;
  }

  return (
    <div className="p-6 bg-deep-orange-50 bg-[url('/products.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
        Our <span className="text-orange-500 ">Exclusive</span> Products
      </h1>

      <div className="self-start mb-6">
        <FilterMenu />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-xl text-gray-700 mt-8">No products to display.</p>
      ) : (
        <div className="w-full max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-8">
          {filteredProducts.map((product) => {
            const imgSrc = product.image?.startsWith("http")
              ? product.image
              : `/${product.image}`;

            return (
              <Link to={`/productdetail/${product._id}`} key={product._id}>
                <ProductCard
                  image={imgSrc}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
