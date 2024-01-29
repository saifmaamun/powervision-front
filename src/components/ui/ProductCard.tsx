import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: {
    _id?: string;
    ownerEmail?: string;
    buyerName?: string;
    name: string;
    brand: string;
    imageUrl: string;
    frameMaterial: string;
    frameShape: string;
    quantity: number;
    saleDate?: string;
    lens: string;
    price: number;
    gender: string;
    lenseColor: string;
    frameColor: string;
    bridgeSize: number;
    border: boolean;
    descriptions: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const id = product._id;
  return (
    <Card placeholder={""} className="mt-6 w-fit">
      <CardHeader placeholder={""} color="blue-gray" className="relative h-56">
        <img src={product.imageUrl} alt="card-image" />
      </CardHeader>
      <CardBody placeholder={""}>
        <Typography
          placeholder={""}
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          {product.name}
        </Typography>
        <Typography placeholder={""}>{product.descriptions}</Typography>
      </CardBody>
      <CardFooter
        placeholder={""}
        className="pt-0 flex justify-between  items-center"
      >
        <Button placeholder={""}>
          <Link to={`/products/${id}`}>Details</Link>
        </Button>
        <Typography placeholder={""} variant="lead">
          ${product.price}
        </Typography>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
