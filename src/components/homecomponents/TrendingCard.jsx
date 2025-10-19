import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CardDefault({ item: {id, img, price, details, title } }) {
    return (
        <Card className="mt-6 w-96 hover:shadow-2xl transition-all duration-300">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </CardHeader>
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2  text-orange-800 font-bold text-2xl">
                {title}
            </Typography>
                <Typography className="text-">
                    {details}
                </Typography>
                <Typography className="text-brown-600 font-extrabold hover:text-orange-800">
                    price : {price}le
                </Typography>
        </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/productdetail/${id}`}>
                    <Button  className="hover:bg-orange-400 bg-bannercolor">More Details</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

const TrendingCard = ({ item }) => {
    return (
        <div className="flex justify-center">
            <CardDefault  item={item} />
        </div>
    );
};

export default TrendingCard;
