import { Dialog, Typography } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import { useNavigate } from "react-router-dom";
interface SigninModalProps {
  isSuccess: boolean;
}

const SigninModal: React.FC<SigninModalProps> = ({ isSuccess }) => {
  const { open } = useAppSelector((state) => state.modal);
  // const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(handleOpen());
    // dispatch(resetState());
    // navigate("/");
  };

  return (
    <>
      <Dialog
        size="xxl"
        placeholder={""}
        open={open}
        handler={() => dispatch(handleModal)}
      >
        {!isSuccess && (
          <Typography
            placeholder={""}
            variant="h1"
            className="mx-auto  text-deep-orange-700 p-16"
          >
            Wait a bit
          </Typography>
        )}{" "}
        :
        {isSuccess && (
          <Typography
            placeholder={""}
            variant="h1"
            className="mx-auto  text-deep-orange-700 p-16"
            onClick={() => navigate("/")}
          >
            User Created SuccessFully
          </Typography>
        )}
        {/* <Typography
          placeholder={""}
          variant="h1"
          className="mx-auto  text-deep-orange-700 p-16"
        >
          User Created SuccessFully
        </Typography> */}
      </Dialog>
    </>
  );
};
export default SigninModal;
