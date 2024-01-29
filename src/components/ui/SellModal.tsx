import { Button, Typography } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decreaseSell,
  increaseSell,
} from "../../redux/features/sell/sellSlice";
import {
  useDeleteProductMutation,
  useEditProductMutation,
} from "../../redux/features/products/productsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  addToStore,
  setQuantity,
} from "../../redux/features/products/productsSlice";

const SellModal = () => {
  const { quantity, id, product } = useAppSelector((state) => state.product);
  const [deleteProduct] = useDeleteProductMutation();
  const [editProduct] = useEditProductMutation();
  const { amount } = useAppSelector((state) => state.sell);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // sell product handle
  const handleSell = () => {
    if (quantity > 0) {
      dispatch(addToStore());
      const options = {
        id: id,
        data: { ...product, quantity: quantity },
      };

      editProduct(options);
      toast.success(`Product added successfully`);
    }
    if (quantity == amount) {
      deleteProduct(id).then(() => navigate("/products"));
      toast.success("Product deleted");
    }
  };

  const handleIncrease = () => {
    if (amount < product.quantity) {
      dispatch(increaseSell(1));
      dispatch(setQuantity(quantity - 1));
    }
    // if (amount == quantity) {
    //   deleteProduct(id).then(() => navigate("/products"));
    //   toast.success("Product deleted");
    // }
    if (amount >= product.quantity) {
      toast.error("Product limit reached");
    }
  };
  const handleDecrease = () => {
    if (amount <= product.quantity && amount > 0) {
      dispatch(decreaseSell(1));
      dispatch(setQuantity(quantity + 1));
    }

    if (amount == 0) {
      toast.error("Product limit reached");
    }
  };

  return (
    <div className="flex justify-around space-x-4">
      <Button placeholder={""} onClick={handleIncrease}>
        +
      </Button>
      <Typography placeholder={""}>{amount}</Typography>
      <Button placeholder={""} onClick={handleDecrease}>
        -
      </Button>
      <Button placeholder={""} onClick={handleSell}>
        Sell
      </Button>
    </div>
  );
};

export default SellModal;
