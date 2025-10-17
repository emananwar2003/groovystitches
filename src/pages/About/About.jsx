import logoImage from "../../assets/AboutImages/Groovy-Stitches.png";
import knittingImage from "../../assets/AboutImages/WhatsApp Image 2025-10-16 at 21.34.32_316cc46d.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaSnapchatGhost,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF5EC] flex flex-col items-center justify-center p-6 sm:p-8 font-sans">
      <div className="text-center mb-12">
        <img src={logoImage} className="w-32 h-32 mx-auto mb-4" />
        <p className="text-lg text-gray-600">
          Where every stitch tells a story.
        </p>
      </div>

      {/* "About Us" Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10 max-w-4xl">
        {/* Knitting Image */}
        <div className="flex-shrink-0">
          <img
            src={knittingImage}
            className="w-56 h-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where yarn meets color and every stitch has a groove ✨ What started
            as a gift to a friend turned into a passion for making people smile
            through handmade pieces that look like them. Every stitch is made
            with love and a touch of groove because your bag, top, or accessory
            should be as fun and unique as you are! Bright colors, happy vibes,
            comfy feels that's the Groovy way. Made to bring happiness,
            confidence, and a little bit of magic to your day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every piece is made with care, creativity, and a little bit of
            groovy magic.
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      <button className="bg-[#E88C5A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#D97A49] transition duration-300 ease-in-out shadow-md mb-16">
        Learn More
      </button>

      {/* Contact Us Section */}
      <div className="bg-[#FBE9D7] p-8 rounded-2xl shadow-lg max-w-3xl text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h3>
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

export default About;
