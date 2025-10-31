import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EditProductCard = () => {
  return (
    <Card className="mt-6 w-96 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-90">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Edit Product
        </Typography>
        <Typography>Edit an product from your site.</Typography>
      </CardBody>
      <Link to="product-list">
        <CardFooter className="pt-0">
          <Button>Edit Product</Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default EditProductCard;
