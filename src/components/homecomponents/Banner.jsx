import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full bg-bannercolor h-auto flex flex-col sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row px-5">
      <div className=" w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 flex px-4  justify-center flex-col py-5 items-start self-center h-full">
        <img
          src="/homebanner.jpg "
          className="h-auto w-full sm:w-3/4 md:w-3/4  lg:w-1/2 xl:w-3/2 rounded-lg"
        />
        <span className="text-center text-bannertext font-serif font-semibold text-lg ">
          The highest quality yarn{" "}
        </span>
      </div>
      <div className="border-solid border-2 border-bannertext w-[60] h-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 self-center flex flex-col justify-around px-4">
        <h1 className="text-3xl text-bannertext font-extrabold">
          Have you checked our latest news yet?
        </h1>
        <span className="text-bannertext">
          check out our lattest hottest news about Groovy’s new collections ,
          and next bazars ,sales and much more all you need is to be uptodate to
          our news so you dont mess out on anything new
        </span>
        <Link to="/news">
          <Button
            variant="filled"
            className="bg-orange-800 text-bannertext self-center"
          >
            check it out{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
