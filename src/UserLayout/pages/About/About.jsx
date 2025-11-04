import AboutUs from "./../../../components/AboutComponents/AboutUs";
import Header from "./../../../components/AboutComponents/Header";
import Footer from "./../../../components/NewsComponents/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fdf3e6] flex flex-col items-center justify-center p-6 sm:p-8 font-sans">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
