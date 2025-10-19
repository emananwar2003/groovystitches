import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaSnapchatGhost,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <button className="bg-[#E88C5A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#D97A49] transition-transform transform hover:scale-105 shadow-md mb-16">
        Learn More
      </button>

      {/* Contact Us Section */}
      <div className="bg-[#FBE9D7] p-8 rounded-2xl shadow-lg max-w-3xl text-center transition-transform transform hover:scale-105">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 hover:text-black">
          Contact Us
        </h3>
        <div className="flex gap-3 align-middle justify-evenly">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitter />
          <FaSnapchatGhost />
        </div>
      </div>
    </div>
  );
};

export default Footer;
