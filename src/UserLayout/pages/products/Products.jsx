// src/UserLayout/pages/products/Products.jsx

import ProductCard from "./productcard";
import { Link } from "react-router-dom";

import { FilterMenu } from "../../../components/filter/Filter";
import { useFilter } from "../../../contextapi/FilterContext";
import { useProducts } from "../../../contextapi/ProductsContext";

const Products = () => {
  const { selectedCategories } = useFilter();
  const { products, loading, error } = useProducts();

  console.log("📢 Products rendered, products =", products);

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

      {filteredProducts.length === 0 && (
        <p className="text-xl text-gray-700 mt-8">No products to display.</p>
      )}

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
  );
};

export default Products;
