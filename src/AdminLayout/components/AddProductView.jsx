import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const AddProductView = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCategoryError, setShowCategoryError] = useState(false);

  const handleCategorySelect = (category) => {
    setFormData((prev) => ({ ...prev, category }));
  };

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

    // require category selection
    if (!formData.category) {
      setShowCategoryError(true);
      setTimeout(() => setShowCategoryError(false), 5000);
      return;
    }

    setShowSuccess(true);
    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setPreviewImage(null);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-dark-textPrimary bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center">
      {/* Success Popup */}
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
              <p className="text-sm">Product added successfully.</p>
            </div>
          </div>
        </div>
      )}

      {/* Category Error Popup */}
      {showCategoryError && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div>
              <p className="font-semibold">Error!</p>
              <p className="text-sm">You must select a category first.</p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen flex justify-center items-start pt-24">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-black mb-2 text-center">
              Add New Product
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
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
                          d="M5 8h14l-1.5 11H6.5L5 8z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 8a3 3 0 016 0"
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

              {/* Product Name */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Enter product's name."
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Enter price for your product."
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-y"
                  placeholder="Descripe your product."
                ></textarea>
              </div>

              {/* Category */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Category
                </label>
                <Menu>
                  <MenuHandler>
                    <Button className="bg-orange-800 hover:bg-orange-900">
                      {formData.category || "Select Category"}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      onClick={() => handleCategorySelect("Accessories")}
                    >
                      Accessories
                    </MenuItem>
                    <MenuItem onClick={() => handleCategorySelect("Bags")}>
                      Bags
                    </MenuItem>
                    <MenuItem onClick={() => handleCategorySelect("Tops")}>
                      Tops
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-800 hover:bg-orange-900 text-white py-3 rounded-lg font-semibold"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg font-semibold"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductView;
