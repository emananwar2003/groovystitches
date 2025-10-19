import React from "react";
import groovyStitchesLogo from "/NewsImages/logo.png";

const Header = () => {
  return (
    <div>
      <header className="text-center space-y-4">
        <h1 className="text-7xl md:text-8xl font-bold text-gray-800">NEWS</h1>
        <div className="pt-4 flex justify-center">
          <img
            src={groovyStitchesLogo}
            className="w-40 h-40 transition-transform transform hover:scale-125"
          />
        </div>
        <p className="text-xl leading-relaxe text-gray-800 hover:text-black">
          Where every stitch tells a story.
        </p>
      </header>
    </div>
  );
};

export default Header;
