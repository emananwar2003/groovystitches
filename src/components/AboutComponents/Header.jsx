import React from "react";
import logoImage from "/NewsImages/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-7xl md:text-8xl font-bold text-gray-800">
          About Us
        </h1>
        <img
          src={logoImage}
          className="w-32 h-32 mx-auto mb-4 transition-transform transform hover:scale-125"
        />
        <p className="text-lg text-gray-700 hover:text-black">
          Where every stitch tells a story.
        </p>
      </div>
    </div>
  );
};

export default Header;
