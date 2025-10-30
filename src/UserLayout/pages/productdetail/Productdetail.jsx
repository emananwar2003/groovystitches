import { useParams } from "react-router-dom";
import { useCart } from "../../../contextapi/Cartcontext";

const Productdetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: "0",
      name: "Bubble Gum Bag",
      price: 95.0, // removed by basem cuz it was a string not a number NaN
      image: "/bublegum.jpg",
      description:
        "Stylish and colorful bag made from premium materials — perfect for everyday use. Combines fashion and comfort in one trendy design.",
    },
    {
      id: "1",
      name: "Mashrom",
      price: 120.0,
      image: "/mashroum.jpg",
      description:
        "A modern smartwatch that helps you track your health and stay connected — elegant and functional for every occasion.",
    },
    {
      id: "2",
      name: "Sobya Bag",
      price: 70.0,
      image: "/sobya.jpg",
      description:
        "Experience immersive sound and comfort for long gaming sessions. Sleek design with crystal-clear audio.",
    },
  ];

  const product = products.find((p) => p.id === id);

  return (
    <div className="flex flex-col justify-end p-8 sm:flex-row sm:p-8 gap-4 sm:justify-center items-center bg-[url('/prod-detail.jpg')] bg-[length:150%_100%] h-screen sm:gap-12">
      <img
        src={product?.image}
        alt={product?.name}
        className="h-64 sm:w-96 sm:h-3/5 rounded-2xl"
      />

      <div className="flex flex-col gap-2 justify-center h-3/6 ">
        <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
        <p className="text-gray-700 mb-2">Price: {product?.price}</p>
        <p className="text-gray-600">{product?.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-deep-orange-400 text-white py-2 rounded-lg hover:bg-deep-orange-500 transition"
        >
          Add to Cart
        </button>
        <button className="mt-3 w-full bg-deep-orange-400 text-white py-2 rounded-lg hover:bg-deep-orange-500 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Productdetail;
