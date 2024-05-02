import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  addToStore,
  setBrand,
  setBridgeSize,
  setDescriptions,
  setFeameColor,
  setFrameMaterial,
  setFrameShape,
  setGender,
  setImageUrl,
  setLens,
  setLensColor,
  setName,
  setOwnerEmail,
  setPrice,
} from "../../redux/features/products/productsSlice";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import { AddProductModal } from "./AddProductModal";
import { forAdd, forUpdate } from "../../redux/features/variable/variableSlice";
import { IProduct } from "../../types/productTypes";

export function ProductForm() {
  const { open } = useAppSelector((state) => state.modal);
  const { user } = useAppSelector((state) => state.user);
  console.log(open, user);
  const dispatch = useAppDispatch();
  const {
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
  } = useAppSelector((state) => state.product);

  const addNewProduct = async () => {
    dispatch(forAdd(false));
    dispatch(setOwnerEmail(user?.email));
    dispatch(addToStore());
    dispatch(handleOpen());
  };
  const updateProduct = async () => {
    dispatch(forUpdate(true));
    dispatch(addToStore());
    dispatch(handleOpen());
  };

  // form

  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: {
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
    },
  });
  const onSubmit: SubmitHandler<IProduct> = (data) => console.log(data);
  // form
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Update Or Add New Product
      </Typography>
      {/* form */}

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <br />
          <input
            className="border border-gray-900 w-full rounded black "
            {...register("name")}
            placeholder={name}
            color="black"
          />
          <br />
        </div>

        {/* <input type="submit" /> */}
        <Button placeholder="" className="w-full my-5">
          <input type="submit" />
        </Button>
      </form>

      {/* form */}
    </Card>
  );
}

/*
<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-2">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Glass Model Name
          </Typography>
          <Input
            onBlur={(e) => dispatch(setName(e.target.value))}
            placeholder={name}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Brand Name
          </Typography>
          <Input
            onBlur={(e) => dispatch(setBrand(e.target.value))}
            placeholder={brand}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Gender
          </Typography>
          <Input
            onBlur={(e) => dispatch(setGender(e.target.value))}
            placeholder={gender}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Frame Material
          </Typography>
          <Input
            onBlur={(e) => dispatch(setFrameMaterial(e.target.value))}
            placeholder={frameMaterial}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Frame Shape
          </Typography>
          <Input
            onBlur={(e) => dispatch(setFrameShape(e.target.value))}
            placeholder={frameShape}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Frame Color
          </Typography>
          <Input
            onBlur={(e) => dispatch(setFeameColor(e.target.value))}
            placeholder={frameColor}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Lens Type
          </Typography>
          <Input
            onBlur={(e) => dispatch(setLens(e.target.value))}
            placeholder={lens}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Lens Color
          </Typography>
          <Input
            onBlur={(e) => dispatch(setLensColor(e.target.value))}
            placeholder={lenseColor}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Bridge Size
          </Typography>
          <Input
            type="number"
            onBlur={(e) => dispatch(setBridgeSize(e.target.value))}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Price
          </Typography>
          <Input
            onChange={(e) => dispatch(setPrice(e.target.value))}
            type="number"
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Image Link
          </Typography>
          <Input
            onBlur={(e) => dispatch(setImageUrl(e.target.value))}
            placeholder={imageUrl}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Description
          </Typography>
          <Input
            onBlur={(e) => dispatch(setDescriptions(e.target.value))}
            placeholder={descriptions}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          //  <Typography
          //   placeholder={""}
          //   variant="h6"
          //   color="blue-gray"
          //   className="-mb-3"
          // >
          //   Owner Email
          // </Typography>
          // <Input
          //   value={user.email}
          //   onBlur={() => dispatch(setOwnerEmail(user.email))}
          //   placeholder={descriptions}
          //   crossOrigin={""}
          //   size="lg"
          //   className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          //   labelProps={{
          //     className: "before:content-none after:content-none",
          //   }}
          // /> 
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={() => updateProduct()}
            placeholder={""}
            className="mt-6"
            fullWidth
          >
            Update
            <AddProductModal />
          </Button>
          <Button
            onClick={() => addNewProduct()}
            placeholder={""}
            className="mt-6"
            fullWidth
          >
            Add Product
            <AddProductModal />
          </Button>
        </div>
      </form>
*/
