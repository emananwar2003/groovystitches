import React from "react";
import logoImage from "/NewsImages/logo.png";

const Cart = () => {
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
          <div>{/*here will be the products*/}</div>
          <div>
            <button className="bg-[#E98F4B] text-white w-full py-4 rounded-full text-lg font-bold hover:bg-[#d97f3b] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg mt-8">
              Checkout
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-xl font-bold text-gray-700 px-2">
          <span>Total:</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
