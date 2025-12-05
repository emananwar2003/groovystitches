import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../utils/productApi";

const ProductCards = ({ product, onProductDeleted }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Do you want to delete this product?",
      text: `"${product.name}" will be permanently deleted.`,
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#ef4444",
      denyButtonText: "Don't delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setDeleting(true);
      try {
        await deleteProduct(product._id);
        Swal.fire("Deleted!", "Product has been deleted.", "success");

        // Notify parent component to refresh the list
        if (onProductDeleted) {
          onProductDeleted();
        }
      } catch (error) {
        Swal.fire(
          "Error!",
          "Failed to delete product. Please try again.",
          "error"
        );
        console.error("Delete error:", error);
      } finally {
        setDeleting(false);
      }
    } else if (result.isDenied) {
      Swal.fire("Cancelled", "Product was not deleted.", "info");
    }
  };

  // Handle image path
  const imgSrc = product.image?.startsWith("http")
    ? product.image
    : `/${product.image}`;

  return (
    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-4 bg-white/90 backdrop-blur-md">
      <CardBody>
        <div className="flex flex-col items-center text-center">
          <Avatar size="xl" src={imgSrc} alt={product.name} className="mb-4" />
          <Typography color="blue-gray" variant="h6" className="font-semibold">
            {product.name}
          </Typography>
          <Typography
            color="gray"
            variant="small"
            className="text-lg font-medium mb-2"
          >
            ${product.price.toFixed(2)}
          </Typography>
          <Typography
            color="gray"
            variant="small"
            className="text-sm mb-4 line-clamp-2"
          >
            {product.description}
          </Typography>
          <div className="flex gap-3">
            <Link to="/admin/edit-product" state={{ product }}>
              <Button className="bg-orange-800 hover:bg-orange-900 px-6">
                Edit
              </Button>
            </Link>
            <Button
              onClick={handleDelete}
              disabled={deleting}
              className="bg-red-500 hover:bg-red-700 px-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCards;
