import React from "react";
import { Link } from "react-router-dom";
import logoImage from "/NewsImages/logo.png";
import { useCart } from "../../../contextapi/Cartcontext";

const Checkout = () => {
  const { cartItems, total } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed");
  };

  return (
    <div className="bg-[#fdf3e6] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img src={logoImage} className="w-20 h-20 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
        </div>

        {/* لو الكارت فاضي */}
        {cartItems.length === 0 ? (
          <div className="text-center space-y-3">
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
            <Link to="/cart" className="text-sm text-orange-800 underline">
              Go back to cart
            </Link>
          </div>
        ) : (
          <>
            {/* Order summary  */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Order Summary
              </h2>
              <div className="space-y-1 max-h-32 overflow-y-auto text-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-base font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Form  */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="+20..."
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Address
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your address"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Payment Method
                </label>
                <p className="text-sm text-gray-600">Cash on delivery</p>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-orange-800 hover:bg-orange-900 text-white py-2.5 rounded-full font-semibold text-sm transition-all"
              >
                Place Order
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link
                to="/cart"
                className="text-sm text-orange-800 hover:underline"
              >
                ← Back to Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
