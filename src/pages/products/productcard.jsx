const ProductCard = ({ image, name, price }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-700 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
