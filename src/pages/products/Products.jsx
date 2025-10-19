import ProductCard from "./productcard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Products = () => {
  const products = [
    {
      name: "Apple AirPods",
      price: "$95.00",
      image:
        "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Smart Watch",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gaming Headset",
      price: "$70.00",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
