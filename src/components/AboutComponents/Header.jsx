import React from "react";
import logoImage from "/NewsImages/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <img
          src={logoImage}
          className="w-32 h-32 mx-auto mb-4 transition-transform transform hover:scale-125"
        />
        <p className="text-lg text-gray-600 hover:text-black">
          Where every stitch tells a story.
        </p>
      </div>
    </div>
  );
};

export default Header;
