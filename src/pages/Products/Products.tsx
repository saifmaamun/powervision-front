import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Skeleton } from "../../components/ui/Skeleton";
import { Typography } from "@material-tailwind/react";
import { IProduct } from "../../types/productTypes";
import ProductCard from "../../components/ui/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCloneState } from "../../redux/features/cloneProduct/cloneSlice";
import { FilterMenu } from "../../components/ui/FilterMenu";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery("");
  const dispatch = useAppDispatch();
  const { gender, status, filterableProducts } = useAppSelector(
    (state) => state.filter
  );

  // const { cloneProducts } = useAppSelector((state) => state.clone);

  // creating a copy of the products coming from backend
  if (!isError && !isLoading) {
    dispatch(addToCloneState(products.data));
  }

  // filtering products

  const filterByGender = (status: boolean, gender: string) => {
    if (status && gender) {
      const results = filterableProducts.filter(
        (product: IProduct) =>
          product.gender.toLocaleLowerCase() === gender.toLowerCase()
      );
      return results;
    }
  };
  const sortedProductsByGender = filterByGender(status, gender);
  console.log(sortedProductsByGender);
  const filteredProducts = sortedProductsByGender;
  // if (sortedProductsByGender) {
  //   const filteredProducts = sortedProductsByGender;
  // }

  // filter by material

  // const filterByMaterial = (status: boolean, material: string) => {
  //   if (status && material) {
  //     const results = filterableProducts.filter(
  //       (product: IProduct) =>
  //         product.frameMaterial.toLocaleLowerCase() === material.toLowerCase()
  //     );
  //     return results;
  //   }
  // };
  // const sortedProductsByMaterial = filterByMaterial(status, material);
  // let filteredProducts = sortedProductsByMaterial;

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
    <>
      <FilterMenu />

      {status ? (
        <div className="container my-12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredProducts?.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="container my-12 mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {products?.data.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
