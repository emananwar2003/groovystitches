import React from "react";

import groovyStitchesLogo from "../../assets/NewsImages/logo.png";
import sweaterImage from "../../assets/NewsImages/SweatShirt.png";
import womanImage from "../../assets/NewsImages/woman photo.png";

const News = () => {
  return (
    <div className="bg-[#fdf3e6] min-h-screen text-gray-700 p-6 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-800">NEWS</h1>
          <div className="pt-4 flex justify-center">
            <img src={groovyStitchesLogo} className="w-40 h-40" />
          </div>
          <p className="text-xl leading-relaxe text-gray-800 hover:text-black">
            Where every stitch tells a story.
          </p>
        </header>

        <div className="space-y-12">
          {/* --- New Collection Section --- */}
          <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex-shrink-0 bg-orange-300 p-4 rounded-2xl border-2 border-stone-800 shadow-md">
              <img src={sweaterImage} className="w-32 h-auto" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-relaxed text-gray-800 ">
                New Collection Launch
              </h2>
              <p className="text-base leading-relaxed hover:text-black">
                Discover our latest collection of handmade, retro-inspired
                designs that add a touch of nostalgia to your wardrobe.
              </p>
            </div>
          </section>

          {/* --- Upcoming Workshop Section --- */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex-shrink-0 bg-orange-300 p-4 rounded-2xl border-2 border-stone-800 shadow-md">
              <img src={womanImage} className="w-32 h-auto" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-black">
                Upcoming Workshop
              </h2>
              <p className="text-base leading-relaxed hover:text-black">
                Join us for a hands-on workshop and learn the art of crochet
                from our experienced instructor.
              </p>
            </div>
          </section>
        </div>

        <footer className="text-center pt-6">
          <button className="bg-[#e58742] text-white font-bold py-3 px-10 rounded-xl text-lg shadow-md border-2 border-[#4a2c2a] hover:bg-[#d17430] transition-transform transform hover:scale-105">
            Read More
          </button>
        </footer>
      </div>
    </div>
  );
};

export default News;
