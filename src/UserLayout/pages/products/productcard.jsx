// src/UserLayout/pages/products/productcard.jsx

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      className="w-72 bg-deep-orange-50 shadow-lg rounded-xl overflow-hidden
     hover:scale-105 transition-transform duration-300"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-gray-500 font-bold mt-2">{price} EGP</p>
      </div>
    </div>
  );
};

export default ProductCard;
