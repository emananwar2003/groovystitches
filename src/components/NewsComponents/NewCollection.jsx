import React from "react";
import sweaterImage from "/NewsImages/SweatShirt.png";

const NewCollection = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
        <div className="flex-shrink-0 bg-orange-300 p-4 rounded-2xl border-2 border-stone-800 shadow-md">
          <img src={sweaterImage} className="w-32 h-auto" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold leading-relaxed text-gray-800 ">
            New Collection Launch
          </h2>
          <p className="text-base leading-relaxed hover:text-black">
            Discover our latest collection of handmade, retro-inspired designs
            that add a touch of nostalgia to your wardrobe.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewCollection;
