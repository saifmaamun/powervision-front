import { Outlet } from "react-router-dom";
import { Navigationbar } from "../components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <>
      <Navigationbar />
      <div className="">
        <Toaster />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
