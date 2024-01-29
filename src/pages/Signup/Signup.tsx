import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../redux/features/users/usersApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setEmail,
  setPass,
  setUser,
} from "../../redux/features/users/usersSlice";
import { handleOpen } from "../../redux/features/modal/modalSlice";
import SigninModal from "../../components/ui/SigninModal";

export function Signup() {
  const [signUp, { data, isSuccess, error }] = useSignUpMutation();

  const { email, password } = useAppSelector((state) => state.user);
  // const navigate = useNavigate();

  const { open } = useAppSelector((state) => state.modal);
  console.log(open);
  const dispatch = useAppDispatch();
  const handleSignup = () => {
    console.log(email, password);
    const credential = {
      email: email,
      password: password,
    };
    signUp(credential);
    dispatch(handleOpen());
    localStorage.setItem("email", email);
    dispatch(setUser(data?.data?._id));

    // navigate("/");
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
      <Card placeholder={""} color="transparent" shadow={false}>
        <Typography placeholder={""} variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography placeholder={""} color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
              type="email"
              required
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
              required
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
            <Button placeholder={""} className="mt-6" fullWidth loading={true}>
              Put Your Credentials First
            </Button>
          ) : (
            <Button
              placeholder={""}
              onClick={handleSignup}
              className="mt-6"
              fullWidth
            >
              <SigninModal isSuccess={isSuccess} />
              Sign up
            </Button>
          )}

          <Typography
            placeholder={""}
            color="gray"
            className="mt-4 text-center font-normal "
          >
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-deep-orange-300 ">
              Login
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
}
