import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/users/usersApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import {
  setEmail,
  setPass,
  setUser,
} from "../../redux/features/users/usersSlice";
import LoginModal from "../../components/ui/LoginModal";

const Login = () => {
  const [login, { data, isSuccess, error }] = useLoginMutation();
  // console.log(data, isSuccess);

  const { email, password } = useAppSelector((state) => state.user);

  const { open } = useAppSelector((state) => state.modal);
  console.log(open);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    const credential = {
      email: email,
      password: password,
    };
    login(credential);
    dispatch(handleOpen());
    localStorage.setItem("email", email);
    dispatch(setUser(data?.data?._id));
  };
  return (
    <div className="container mx-auto my-16 flex justify-center">
      {error && (
        <Typography
          placeholder={""}
          variant="h1"
          className="mx-auto text-deep-orange-700 p-16"
        >
          "Put Your Credentials correctly"
        </Typography>
      )}
      <Card
        className="mx-auto"
        placeholder={""}
        color="transparent"
        shadow={false}
      >
        <div className="ps-6">
          <Typography placeholder={""} variant="h4" color="blue-gray">
            Log In
          </Typography>
          <Typography
            placeholder={""}
            color="gray"
            className="mt-1 font-normal"
          >
            Welcome Back!! Nice to meet you! Enter your credentials to login.
          </Typography>
        </div>
        <form className="mx-auto mt-8 mb-2 w-full max-w-screen-lg sm:w-fit">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Your Email
            </Typography>
            <Input
              onChange={(e) => dispatch(setEmail(e.target.value))}
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
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
              Password
            </Typography>
            <Input
              onChange={(e) => dispatch(setPass(e.target.value))}
              crossOrigin={""}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          {!email || !password ? (
            <Button
              placeholder={""}
              onClick={() => handleLogin()}
              className="mt-6"
              fullWidth
              loading={true}
            >
              <LoginModal isSuccess={isSuccess} />
              Put Your Credentials First
            </Button>
          ) : (
            <Button
              placeholder={""}
              onClick={() => handleLogin()}
              className="mt-6"
              fullWidth
            >
              <LoginModal isSuccess={isSuccess} />
              Login
            </Button>
          )}

          <Typography
            placeholder={""}
            color="gray"
            className="mt-4 text-center font-normal"
          >
            New Here?{" "}
            <Link to="/signin" className="font-semibold text-deep-orange-300 ">
              Sign In
            </Link>
          </Typography>
        </form>
        <Typography
          placeholder={""}
          color="gray"
          className="mt-4 text-center font-normal "
        >
          <Link to="/" className="font-semibold text-deep-orange-300 ">
            Home
          </Link>
        </Typography>
      </Card>
    </div>
  );
};

export default Login;
