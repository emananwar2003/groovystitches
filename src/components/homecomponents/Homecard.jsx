import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function BlogCard() {
    return (
        <Card className="  self-center overflow-hidden flex flex-col  w-3/4 py-5 sm:flex sm:flex-row sm:gap-3 md:flex md:flex-row md:gap-3 lg:flex lg:flex-row lg:gap-3 xl:flex xl:flex-row xl:gap-3">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none w-[40] px-3  flex items-center justify-center">
                <img src="/cardphotohome.jpg" alt="homecard" className="w-1/2 rounded-xl" />
            </CardHeader>
            <CardBody className="flex flex-col gap-5 items-center !p-3 w-[60]">

                <Typography variant="h4" color="blue-gray" className="text-orange-800">
                    Groovy’s products
                        
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal text-center">
                    Check out our neatly crafted high quality product made specific just for you !
                </Typography>
                <Link to="/products">
                    <Button className="bg-bannercolor hover:bg-orange-800"> see all products</Button>
                </Link>

                
            </CardBody>
        </Card>
    );
}
const Homecard = () => {
    return <div className="w-full flex justify-center">
        <BlogCard/>
    </div>;
};

export default Homecard;