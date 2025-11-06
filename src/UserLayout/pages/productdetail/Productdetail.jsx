import { useParams } from "react-router-dom";
import { useCart } from "../../../contextapi/Cartcontext";

const Productdetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 0,
      img: "bublegum.jpg",
      title: "Bublegum Bag",
      details: "Bublegum is your favourite bag for bubbly girls.",
      price: 450,
    },
    {
      id: 1,
      img: "colorful-wallet.jpg",
      title: " Colorful Wallet",
      details: "Colorful wallets that can fit your cards and money.",
      price: 150,
    },
    {
      id: 2,
      img: "mashroum.jpg",
      title: "Giant Mashroum",
      details: "Our giant mashroum for accessory holding.",
      price: 125,
    },
    {
      id: 3,
      img: "sobya.jpg",
      title: "Sobya",
      details: "Sobya is our seasonal bag  made speacialy for ramdan.",
      price: 550,
    },
  ];
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="flex flex-col justify-end p-8 sm:flex-row sm:p-8 gap-4 sm:justify-center items-center bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center h-screen sm:gap-12">
      <img
        src={`/${product.img}`}
        alt={product?.title}
        className="h-64 sm:w-96 sm:h-3/5 rounded-2xl"
      />

      <div className="flex flex-col gap-2 justify-center h-3/6 ">
        <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
        <p className="text-gray-700 mb-2">Price: {product?.price} EGP</p>
        <p className="text-gray-600">{product?.details}</p>

        <button
          onClick={() => addToCart(product)}
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
