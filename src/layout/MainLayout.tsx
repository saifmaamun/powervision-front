import { Outlet } from "react-router-dom";
import { Navigationbar } from "../components/ui/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Navigationbar />
      <div className="">
        <Toaster />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
