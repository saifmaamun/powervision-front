import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
} from "../../redux/features/products/productsApi";
import { ProductForm } from "../../components/ui/ProductForm";
import { Skeleton } from "../../components/ui/Skeleton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToStore,
  setBorder,
  setBrand,
  setBridgeSize,
  setBuyerName,
  setDescriptions,
  setFeameColor,
  setFrameMaterial,
  setFrameShape,
  setGender,
  setId,
  setImageUrl,
  setLens,
  setLensColor,
  setName,
  setOwnerEmail,
  setPrice,
  setQuantity,
} from "../../redux/features/products/productsSlice";
import toast from "react-hot-toast";
import SellModal from "../../components/ui/SellModal";
import { resetAmount } from "../../redux/features/sell/sellSlice";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = () => {
    deleteProduct(id).then(() => navigate("/products"));
    toast.success("Product deleted successfully");
  };

  const dispatch = useAppDispatch();
  dispatch(resetAmount(0));

  if (!isError && !isLoading) {
    dispatch(setBorder(product.data.border));
    dispatch(setBrand(product.data.brand));
    dispatch(setBridgeSize(product.data.bridgeSize));
    dispatch(setBuyerName(product.data.buyerName));
    dispatch(setDescriptions(product.data.descriptions));
    dispatch(setFeameColor(product.data.frameColor));
    dispatch(setFrameMaterial(product.data.frameMaterial));
    dispatch(setFrameShape(product.data.frameShape));
    dispatch(setGender(product.data.gender));
    dispatch(setId(id));
    dispatch(setImageUrl(product.data.imageUrl));
    dispatch(setLens(product.data.lens));
    dispatch(setName(product.data.name));
    dispatch(setLensColor(product.data.lenseColor));
    dispatch(setOwnerEmail(product.data.ownerEmail));
    dispatch(setPrice(product.data.price));
    dispatch(setQuantity(product.data.quantity));
    dispatch(addToStore(product.data));
  }

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="mx-auto my-16 container grid sm:grid-cols-1 sm:grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-4">
          <div>
            <div className="mt-6 w-full">
              <CardHeader
                placeholder={""}
                color="blue-gray"
                className="relative"
              >
                <img src={product?.data?.imageUrl} alt="card-image" />
              </CardHeader>
              <CardBody placeholder={""}>
                <Typography placeholder={""} variant="h3" className="mb-2">
                  {product?.data?.name}
                </Typography>

                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Brand: {product?.data?.brand}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Gender:{product?.data?.gender}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Frame Material:{product?.data?.frameMaterial}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Frame Shape: {product?.data?.frameShape}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Frame Color: {product?.data?.frameColor}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Lens: {product?.data?.lens}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Lense Color: {product?.data?.lenseColor}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Border: {product?.data?.border}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Bridge Size: {product?.data?.bridgeSize}mm
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Bridge Size: {product?.data?.descriptions}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Quantity: {product?.data?.quantity}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Price: ${product?.data?.price}
                </Typography>
                <Typography variant="lead" color="blue-gray" placeholder={""}>
                  Owner: {product?.data?.ownerEmail}
                </Typography>
              </CardBody>
              <CardFooter
                placeholder={""}
                className="flex justify-end  space-x-4"
              >
                <SellModal />
                {user.email == product.data.ownerEmail && (
                  <Button color="red" placeholder={""} onClick={handleDelete}>
                    Delete
                  </Button>
                )}
              </CardFooter>
            </div>
          </div>
          <div className="ms-auto w-10/12">
            <ProductForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
