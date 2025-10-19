import React from "react";
import womanImage from "/NewsImages/woman photo.png";

const UpComing = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 text-center md:text-left">
        <div className="flex-shrink-0 bg-orange-300 p-4 rounded-2xl border-2 border-stone-800 shadow-md">
          <img src={womanImage} className="w-32 h-auto" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-800 hover:text-black">
            Upcoming Workshop
          </h2>
          <p className="text-base leading-relaxed hover:text-black">
            Join us for a hands-on workshop and learn the art of crochet from
            our experienced instructor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UpComing;
