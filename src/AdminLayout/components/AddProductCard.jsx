import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AddProductCard = () => {
  return (
    <Card className="mt-6 w-96 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-90">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Add Product
        </Typography>
        <Typography>Add a new product to your site.</Typography>
      </CardBody>
      <Link to="add-product">
        <CardFooter className="pt-0">
          <Button>Add Product</Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AddProductCard;
