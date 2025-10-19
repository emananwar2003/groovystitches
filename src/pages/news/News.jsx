import React from "react";
import Header from "../../components/NewsComponents/Header";
import NewCollection from "../../components/NewsComponents/NewCollection";
import Upcoming from "../../components/NewsComponents/UpComing";
import Footer from "../../components/NewsComponents/Footer";

const News = () => {
  return (
    <div className="bg-[#fdf3e6] min-h-screen text-gray-700 p-6 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <Header />
        <div className="space-y-12">
          <NewCollection />
          <Upcoming />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default News;
