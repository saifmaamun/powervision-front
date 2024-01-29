import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";

function NavList() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Pages
        </a>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Account
        </a>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blocks
        </a>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </a>
      </Typography> */}
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/products"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Products
        </Link>
      </Typography>
      {localStorage.email === "" ? (
        <>
          <Typography
            placeholder={""}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/login"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Login
            </Link>
          </Typography>
          <Typography
            placeholder={""}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/signin"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Signin
            </Link>
          </Typography>
        </>
      ) : (
        <div>
          <Typography
            placeholder={""}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Button onClick={() => (localStorage.email = "")} placeholder={""}>
              <Link
                to="/login"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                LogOut
              </Link>
            </Button>
          </Typography>
        </div>
      )}
    </ul>
  );
}

export function Navigationbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar placeholder={""} fullWidth className="mx-auto  px-6 py-3">
      <div className="flex items-center justify-around text-blue-gray-900">
        <Typography
          placeholder={""}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Link to="/" className="flex items-center  transition-colors">
            Power Vision
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              placeholder={""}
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <Link
                to="/products"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Products
              </Link>
            </Typography>
            {localStorage.email === "" ? (
              <>
                <Typography
                  placeholder={""}
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  <Link
                    to="/login"
                    className="flex items-center hover:text-blue-500 transition-colors"
                  >
                    Login
                  </Link>
                </Typography>
                <Typography
                  placeholder={""}
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  <Link
                    to="/signin"
                    className="flex items-center hover:text-blue-500 transition-colors"
                  >
                    Signin
                  </Link>
                </Typography>
              </>
            ) : (
              <div>
                <Typography
                  placeholder={""}
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  <Button
                    onClick={() => (localStorage.email = "")}
                    placeholder={""}
                  >
                    <Link
                      to="/login"
                      className="flex items-center hover:text-blue-500 transition-colors"
                    >
                      LogOut
                    </Link>
                  </Button>
                </Typography>
              </div>
            )}
          </ul>
        </div>
        <IconButton
          placeholder={""}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
