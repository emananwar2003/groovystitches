import React from "react";
import logoImage from "/NewsImages/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../../contextapi/Cartcontext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    total,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  } = useCart();

  return (
    <div className="bg-[#fdf3e6] min-h-screen flex flex-col items-center justify-center font-sans p-4 ">
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={logoImage}
            className="w-32 h-32 mx-auto mb-4 transition-transform transform hover:scale-125"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="space-y-4">
            {/*  Checks if the cart has items if "True" shows cart is epmty else shows the item */}
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="bg-gray-200 w-7 h-7 rounded-full font-bold text-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-gray-200 w-7 h-7 rounded-full font-bold text-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div>
            <button
              onClick={clearCart}
              className="bg-[#ce2424] text-white w-44 py-3 rounded-full text-lg font-bold hover:bg-[#d9433b] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg mt-8 mr-5"
            >
              Clear
            </button>
            <Link
              to="/checkout"
              className="text-center bg-[#E98F4B] text-white p-12 py-4 rounded-full text-lg font-bold hover:bg-[#d97f3b] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg mt-8"
            >
              Checkout
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-xl font-bold text-gray-700 px-2">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
