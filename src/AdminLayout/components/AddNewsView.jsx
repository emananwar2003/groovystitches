import React, { useState } from "react";

const AddNewsView = () => {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      description: "",
      image: "",
    });
    setPreviewImage(null);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleReset = () => {
    setFormData({
      description: "",
      image: "",
    });
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-dark-textPrimary bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center">
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-orange-800 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">News added successfully.</p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ✅ Flex container to center the form with top spacing */}
      <div className="min-h-screen flex justify-center items-start pt-24">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 ">
            <h1 className="text-3xl font-bold text-black mb-2 text-center">
              Add News
            </h1>

            {/* FORM START */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 mb-4">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-full border-4 border-indigo-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300">
                      {/* icon */}
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h1"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 20a2 2 0 002-2V9a2 2 0 00-2-2h-1"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 5v2a2 2 0 002 2h6a2 2 0 002-2V5"
                        />
                        <line
                          x1="7"
                          y1="12"
                          x2="13"
                          y2="12"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="7"
                          y1="16"
                          x2="13"
                          y2="16"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <rect
                          x="15"
                          y="12"
                          width="3"
                          height="4"
                          rx="0.5"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <label className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white px-6 py-2 rounded-lg transition-colors">
                  <span>Choose Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descripe your product."
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-y"
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-800 hover:bg-orange-900 text-white py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Add News
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-gray-200 text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>
            {/* FORM END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewsView;
