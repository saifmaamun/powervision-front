import {
  Button,
  Dialog,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import {
  useAddProductMutation,
  useEditProductMutation,
} from "../../redux/features/products/productsApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function AddProductModal() {
  const { product, id } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const [addProduct, { data, isLoading }] = useAddProductMutation();
  console.log(data, isLoading);
  const [editProduct] = useEditProductMutation();
  const { open } = useAppSelector((state) => state.modal);
  const { variable } = useAppSelector((state) => state.variable);
  const dispatch = useAppDispatch();

  // console.log(ownerEmail);
  const handleAddProductToDataBase = async () => {
    if (!variable) {
      if (product.ownerEmail == "") {
        const productData = { ...product };
        productData.ownerEmail = user.email;
        addProduct(productData);
      }
      dispatch(handleOpen());
      toast.success(`Product added successfully`);
      navigate("/products");
    }
    if (variable) {
      const options = {
        id: id,
        data: product,
      };
      editProduct(options);
      toast.success(`Product updated successfully`);
    }
    // dispatch(handleOpen);
    dispatch(handleOpen());
  };

  return (
    <>
      {/* <Dialog placeholder={""} open={open} handler={() => dispatch(handleOpen)}> */}
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <div className="p-16">
          <Typography
            placeholder={""}
            color="blue-gray"
            variant="lead"
            className=""
          >
            Name: {product?.name}
          </Typography>

          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Brand: {product?.brand}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            OwnerEmail: {product?.ownerEmail}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Gender:{product?.gender}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Frame Material:{product?.frameMaterial}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Frame Shape: {product?.frameShape}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Frame Color: {product?.frameColor}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Lens: {product?.lens}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Lense Color: {product?.lenseColor}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Border: {product?.border}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Bridge Size: {product?.bridgeSize}mm
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Bridge Size: {product?.imageUrl}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Bridge Size: {product?.descriptions}
          </Typography>
          <Typography variant="lead" color="blue-gray" placeholder={""}>
            Price: ${product?.price}mm
          </Typography>
        </div>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            // onClick={() => dispatch(handleOpen)}
            onClick={() => dispatch(handleOpen())}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder={""}
            variant="gradient"
            color="green"
            onClick={() => handleAddProductToDataBase()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
