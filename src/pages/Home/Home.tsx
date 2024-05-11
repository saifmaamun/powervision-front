import { Carousel } from "@material-tailwind/react";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { IProduct } from "../../types/productTypes";
import Slide from "../../components/ui/Slide";

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
    </div>
  );
};

export default Home;
