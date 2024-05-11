import { Typography, Button } from "@material-tailwind/react";

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

const Slide: React.FC<ProductCardProps> = ({ product }) => {
  const id = product._id;
  return (
    <div className="absolute inset-0 grid h-full w-full  bg-black/75">
      <div className="flex justify-between items-center px-20">
        <div className="w-3/4 text-center md:w-2/4">
          <div className="flex justify-center items-baseline gap-4">
            <Typography
              placeholder=""
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {product.name}
            </Typography>
            <Typography
              placeholder=""
              variant="lead"
              color="red"
              className="mb-4 text-xs md:text-xs lg:text-sm"
            >
              {product.brand}
            </Typography>
          </div>

          <Typography
            placeholder=""
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {product.descriptions}
            {id}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button placeholder="" size="lg" color="white">
              <Link to={`/products/${id}`}>Explore</Link>
            </Button>
            <Button placeholder="" size="lg" color="white" variant="text">
              <Link to={`/products`}>Gallery</Link>
            </Button>
          </div>
        </div>
        <div className="border-8 border-cyan-600 border-double rounded-bl-full rounded-br-3xl rounded-tl-3xl rounded-tr-full">
          <img
            className="h-full rounded-bl-full rounded-br-3xl rounded-tl-3xl rounded-tr-full"
            src={product.imageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
