import { Dialog, Typography } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isSuccess: boolean;
}
// export function LoginModal({ isSuccess }) {
const LoginModal: React.FC<LoginModalProps> = ({ isSuccess }) => {
  console.log(isSuccess);
  const { open } = useAppSelector((state) => state.modal);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(handleOpen());
    navigate("/");
  };

  return (
    <>
      <Dialog placeholder={""} size="xxl" open={open} handler={handleModal}>
        {!isSuccess ? (
          <Typography
            placeholder={""}
            variant="h1"
            className="mx-auto  text-deep-orange-700 p-16"
          >
            Wait a bit
          </Typography>
        ) : (
          <Typography
            placeholder={""}
            variant="h1"
            className="mx-auto  text-deep-orange-700 p-16"
            onClick={() => navigate("/")}
          >
            LogIn SuccessFully
          </Typography>
        )}
      </Dialog>
    </>
  );
};
export default LoginModal;
