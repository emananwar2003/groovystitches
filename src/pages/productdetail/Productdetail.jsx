const Productdetail = () => {
  return (
    <div className="p-8 flex gap-12 justify-center items-center bg-deep-orange-50 h-screen">
      <img
        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=800&q=80"
        alt="product"
        className="w-96 h-3/5 object-cover mb-4"
      />
      <div className="flex flex-col gap-2 justify-center h-3/6">
        <h1 className="text-3xl font-bold mb-4">Apple AirPods</h1>
        <p className="text-gray-700 mb-2">Price: $95.00</p>
        <p className="text-gray-600">
          Wireless earbuds with high-quality sound, voice assistant, and long
          battery life.
        </p>
        <button className="mt-3 w-full bg-deep-orange-200 text-white py-2 rounded-lg hover:bg-deep-orange-300 transition">
          Add to Cart
        </button>
        <button className="mt-3 w-full bg-deep-orange-200 text-white py-2 rounded-lg hover:bg-deep-orange-300 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Productdetail;
