import React from "react";
import knittingImage from "/AboutImages/WhatsApp Image 2025-10-16 at 21.34.32_316cc46d.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10 max-w-4xl">
        <div className="flex-shrink-0">
          <img
            src={knittingImage}
            className="w-56 h-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4 hover:text-black">
            Where yarn meets color and every stitch has a groove ✨ What started
            as a gift to a friend turned into a passion for making people smile
            through handmade pieces that look like them. Every stitch is made
            with love and a touch of groove because your bag, top, or accessory
            should be as fun and unique as you are! Bright colors, happy vibes,
            comfy feels that's the Groovy way. Made to bring happiness,
            confidence, and a little bit of magic to your day.
          </p>
          <p className="text-gray-700 leading-relaxed hover:text-black">
            Every piece is made with care, creativity, and a little bit of
            groovy magic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
