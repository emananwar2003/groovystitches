import { useState } from "react";
import Banner from "./../../../components/homecomponents/Banner";
import CarouselHome from "./../../../components/homecomponents/CarouselHome";
import Homecard from "../../../components/homecomponents/Homecard";
import Washing from "./../../../components/homecomponents/Washing";
const Home = () => {
  const [trending, setTrending] = useState([
    {
      id: 1,
      img: "bublegum.jpg",
      title: "bublegum bag",
      details: "bublegum is your favourite bag for bubbly girls",
      price: "450",
    },
    {
      id: 2,
      img: " colorful wallet.jpg",
      title: " colorful wallet",
      details: "colorful wallets that can fit your cards and money",
      price: "150 ",
    },
    {
      id: 3,
      img: "mashroum.jpg",
      title: "giant mashroum",
      details: "our giant mashroum for accessory holding",
      price: "125 ",
    },
    {
      id: 4,
      img: "sobya.jpg",
      title: "sobya",
      details: "sobya is our seasonal bag  made speacialy for ramdan",
      price: "550 ",
    },
  ]);
  return (
    <div className="flex  flex-col justify-center items-center bg-[#Fdf3e6] gap-20">
      <Banner />
      <CarouselHome trending={trending} />
      <Homecard />
      <Washing />
    </div>
  );
};

export default Home;
