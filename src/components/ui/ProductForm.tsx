import { Card, Typography } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";

import { IProduct } from "../../types/productTypes";
import {
  useAddProductMutation,
  useEditProductMutation,
} from "../../redux/features/products/productsApi";
import toast from "react-hot-toast";
import { forUpdate } from "../../redux/features/variable/variableSlice";

export function ProductForm() {
  const { user } = useAppSelector((state) => state.user);
  const { variable } = useAppSelector((state) => state.variable);

  const [addProduct] = useAddProductMutation();
  const dispatch = useAppDispatch();
  const {
    id,
    ownerEmail,
    buyerName,
    bridgeSize,
    border,
    name,
    brand,
    gender,
    frameMaterial,
    frameShape,
    frameColor,
    imageUrl,
    lens,
    lenseColor,
    descriptions,
    price,
    quantity,
  } = useAppSelector((state) => state.product);

  // update product
  const [editProduct] = useEditProductMutation();
  const handleUpdateProductToDataBase = async (data: IProduct) => {
    const options = {
      id: id,
      data: data,
    };
    editProduct(options);

    // dispatch(handleOpen());
  };
  // update product
  // add new product
  const handleAddNewProductToDataBase = async (data: IProduct) => {
    const productData = { ...data };
    productData.ownerEmail = user.email;
    addProduct(productData);

    // navigate("/products");
  };
  // add new product

  // form

  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: {
      ownerEmail: ownerEmail,
      buyerName: buyerName,
      bridgeSize: bridgeSize,
      border: border,
      name: name,
      brand: brand,
      imageUrl: imageUrl,
      frameMaterial: frameMaterial,
      frameShape: frameShape,
      lens: lens,
      price: price,
      gender: gender,
      lenseColor: lenseColor,
      frameColor: frameColor,
      descriptions: descriptions,
      quantity: quantity,
    },
  });
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    if (variable === "update") {
      handleUpdateProductToDataBase(data);
      toast.success(`Product updated successfully`);
    } else if (variable === "add") {
      handleAddNewProductToDataBase(data);
      toast.success(`Product added successfully`);
    } else {
      console.log("somethings wrong");
    }
  };
  // form
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Update Product
      </Typography>
      {/* form */}

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <br />
        <input
          className="border border-gray-900 w-full px-3 py-2 rounded black "
          {...register("name")}
          placeholder={name}
          color="black"
        />
        <br />
        <div className="flex justify-center align-middle space-x-2">
          <input
            className="border rounded-md border-gray-900 my-5 px-5 py-2 w-full  bg-black text-white  text-sm"
            type="submit"
            value="UPDATE"
            onClick={() => dispatch(forUpdate("update"))}
          />
          <input
            className="border rounded-md border-gray-900 my-5 px-5 py-2 w-full  bg-black text-white  text-sm"
            type="submit"
            value="ADD NEW"
            onClick={() => dispatch(forUpdate("add"))}
          />
        </div>
      </form>

      {/* form */}
    </Card>
  );
}
