import { Carousel,Typography} from "@material-tailwind/react";

import TrendingCard from "./TrendingCard";

const CarouselHome = ({ trending }) => {

    const CarouselDefault = ({ trending }) => {
        return (
            <Carousel className="rounded-xl bg-yellow-100 ">
                
                {trending.map((item) => (
                    <TrendingCard key={item.id} item={item} />
                ))}
            </Carousel>
        );
    };

return (
    <div className="w-full  mx-auto flex flex-col gap-3 ">
        <Typography as="h1" className="text-4xl text-orange-800 font-extrabold text-center ">Trending right now</Typography>

        <CarouselDefault trending={trending} />
    </div>
);
};export default CarouselHome;
