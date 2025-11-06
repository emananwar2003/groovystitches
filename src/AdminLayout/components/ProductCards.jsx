import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  const show = () => {
    Swal.fire({
      title: "Do you want to delete this product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Don't delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-4 bg-white/90 backdrop-blur-md">
      <CardBody>
        <div className="flex flex-col items-center text-center">
          <Avatar
            size="xl"
            src={product.image}
            alt={product.name}
            className="mb-4"
          />
          <Typography color="blue-gray" variant="h6" className="font-semibold">
            {product.name}
          </Typography>
          <Typography
            color="gray"
            variant="small"
            className="text-lg font-medium mb-4"
          >
            {product.price}
          </Typography>
          <div className="flex gap-3">
            <Link to="/admin/edit-product" state={{ product }}>
              <Button className=" bg-orange-800 hover:bg-orange-900 px-6">
                Edit
              </Button>
            </Link>
            <Button onClick={show} className="bg-red-500 hover:bg-red-700 px-6">
              Delete
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCards;
