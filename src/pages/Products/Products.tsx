import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Skeleton } from "../../components/ui/Skeleton";
import { Typography } from "@material-tailwind/react";
import { IProduct } from "../../types/productTypes";
import ProductCard from "../../components/ui/ProductCard";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery({});
  //   console.log(products, isLoading, isError, isSuccess);
  if (isLoading) {
    return (
      <div className="flex justify-center my-12">
        <Skeleton />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center my-12">
        <Typography placeholder={""} variant="h3">
          Product Not Found
        </Typography>
      </div>
    );
  }
  return (
    <div className="container my-12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
      {products?.data.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
