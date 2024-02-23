import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Skeleton } from "../../components/ui/Skeleton";
import { Typography } from "@material-tailwind/react";
import { IProduct } from "../../types/productTypes";
import ProductCard from "../../components/ui/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCloneState } from "../../redux/features/cloneProduct/cloneSlice";
import { FilterMenu } from "../../components/ui/FilterMenu";
import { useMemo } from "react";
import { addToFilteredProducts } from "../../redux/features/filteredProduct/filterSlice";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery("");

  const dispatch = useAppDispatch();
  const { gender, material, status, filterableProducts, filteredProducts } =
    useAppSelector((state) => state.filter);

  // creating a copy of the products coming from backend
  if (!isError && !isLoading) {
    dispatch(addToCloneState(products.data));
  }
  //

  //

  // filter by gender and save it in store

  const filterByGender = (status: boolean, gender: string) => {
    if (status && gender) {
      if (!filteredProducts) {
        const results = filterableProducts.filter(
          (product: IProduct) =>
            product.gender.toLocaleLowerCase() === gender.toLowerCase()
        );
        dispatch(addToFilteredProducts(results));
        return results;
      } else {
        const results = filteredProducts.filter(
          (product: IProduct) =>
            product.gender.toLocaleLowerCase() === gender.toLowerCase()
        );
        dispatch(addToFilteredProducts(results));
        return results;
      }
    }
  };

  // filtering products
  const sortedProductsByGender = useMemo(
    () => filterByGender(status, gender),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gender, status]
  );
  console.log(sortedProductsByGender);
  // filter by gender and save it in store

  // filter by Material and save it in store
  const filterByMaterial = (status: boolean, material: string) => {
    if (status && material) {
      const results = filterableProducts.filter(
        (product: IProduct) =>
          product.frameMaterial.toLocaleLowerCase() === material.toLowerCase()
      );
      dispatch(addToFilteredProducts(results));
      return results;
    }
  };
  // filtering products
  const sortedProductsByMaterial = useMemo(
    () => filterByMaterial(status, material),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [material, status]
  );
  console.log(sortedProductsByMaterial);
  // filter by Material and save it in store

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
