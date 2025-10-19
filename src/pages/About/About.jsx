import Header from "../../components/AboutComponents/Header";
import AboutUS from "../../components/AboutComponents/AboutUs";
import Footer from "../../components/AboutComponents/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF5EC] flex flex-col items-center justify-center p-6 sm:p-8 font-sans">
      <Header />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default About;
