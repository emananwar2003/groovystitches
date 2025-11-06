import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CardDefault({ item: { id, img, price, details, title } }) {
  return (
    <div className="p-5">
      <Card className="mt-6 w-96 hover:shadow-2xl transition-all duration-300 self-center bg-[#fef7e5]">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2  text-orange-800 font-bold text-2xl"
          >
            {title}
          </Typography>
          <Typography className="text-">{details}</Typography>
          <Typography className="text-brown-600 font-extrabold hover:text-orange-800">
            Price : {price}EGP
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/productdetail/${id}`}>
            <Button className=" bg-orange-800 hover:bg-orange-900">
              More Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

const TrendingCard = ({ item }) => {
  return (
    <div className="flex justify-center">
      <CardDefault item={item} />
    </div>
  );
};

export default TrendingCard;
