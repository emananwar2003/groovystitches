import { FaHandHoldingHeart, FaHandsWash } from "react-icons/fa";
import { VscSymbolColor } from "react-icons/vsc";
const Washing = () => {
    return (
        <div className=" bg-gradient-to-r from-[#FFB766] via-[#FF8C33] to-[#f0732a] px-3 gap-1 flex flex-col justify-center align-middle sm:flex-row sm:justify-evenly sm:align-middle md:flex-row md:justify-evenly md:align-middle lg:flex-row lg:justify-evenly lg:gap-2">
            <div className="flex flex-col sm:w-1/3   justify-center align-middle items-center text-center gap-2">
                <FaHandHoldingHeart className="text-6xl text-white text-center" />
                <h1 className="text-3xl text-white text-center">Handmade with love</h1>
                <span className=" text-white">Every stitch is made with love and care especially for you with the highest quality yarn the best is for the best</span>
            </div>
            <div className="flex flex-col sm:w-1/3  text-center justify-center items-center gap-2">
                <FaHandsWash className="text-6xl text-white text-center" />
                <h1 className="text-3xl text-white ">Handwash only!</h1>
                <span className=" text-white ">Please know that our products are delecate and must be washed by hand and we do not hold any responisbility for any misuse</span>
            </div>
            <div className="flex flex-col sm:w-1/3  text-center  items-center gap-2">
                <VscSymbolColor className="text-6xl text-white text-center" />
                <h1 className="text-3xl text-white ">customizable</h1>
                <span className=" text-white ">Our prducts are customizable to your liking all you have to do is screenshot the product that you like and contact us through </span>
            </div>
            

            
        </div>
    );
};

export default Washing;