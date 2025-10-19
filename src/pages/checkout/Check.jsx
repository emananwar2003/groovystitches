const Check = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-600 mb-4">You have 1 item in your cart.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Proceed to Payment
      </button>
    </div>
  );
};

export default Check;
