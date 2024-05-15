import { Carousel, Typography } from "@material-tailwind/react";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { IProduct } from "../../types/productTypes";
import Slide from "../../components/ui/Slide";
import ProductCard from "../../components/ui/ProductCard";
// import back from "../../assets/model/Group 39521.svg";
// import model from "../../assets/model/model1.png";

const Home = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery("");
  console.log(isLoading, isError);
  return (
    <div>
      <Carousel placeholder="" className="">
        {products?.data?.slice(1, 4).map((product: IProduct) => (
          <div key={product.id} className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <Slide product={product} />
          </div>
        ))}
      </Carousel>
      <div>
        <Typography
          placeholder={""}
          variant="h1"
          color="blue-gray"
          className="my-24 text-6xl underline text-center"
        >
          Featured Products
        </Typography>
        <div className="container py-12 my-12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {products?.data?.slice(5, 8).map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div>
        <Typography
          placeholder={""}
          variant="h1"
          color="blue-gray"
          className="my-24 text-6xl underline text-center"
        >
          Hot Sells
        </Typography>
        {/* <div className="relative">
          <img className=" w-3/12 absolute z-0" src={back} alt="" />
          <img className="w-1/4 absolute z-5" src={model} alt="" />
        </div> */}

        <div className="container py-12 my-12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {products?.data?.slice(10, 13).map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
