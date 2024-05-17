import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import model from "../../assets/model/model.png";

const Promotions = () => {
  return (
    <div className="container my-20 mx-auto">
      <div className="flex  justify-center items-center gap-0">
        <div>
          <div className="p-8 bg-blue-gray-100 rounded-l-3xl">
            <Typography
              placeholder={""}
              variant="lead"
              color="deep-orange"
              className="mt-10 space-x-3 text-xs text-start"
            >
              P R O M O T I O N S
            </Typography>
            <Typography
              placeholder={""}
              variant="h4"
              className="mt-10 space-x-3 text-5xl text-start text-blue-gray-900"
            >
              Limited-Time Offer - Enjoy Exclusive Discounts on Premium Eyewear!
            </Typography>
            <Typography
              placeholder={""}
              variant="paragraph"
              className="my-10 space-x-3 text-xl text-start text-blue-gray-900"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae cum reiciendis quaerat perspiciatis dolor, quo
              blanditiis eius, assumenda officia minus harum possimus tempora
              quis. Rerum vitae dolore eum itaque, nulla iure sed aut illo optio
              repellendus quidem natus deserunt animi velit unde fuga. Tempora
              iste veritatis autem maxime ea facere?
            </Typography>
            <Button placeholder={""}>
              <Link to="/products">Shop Now!</Link>
            </Button>
          </div>
        </div>
        <div>
          <img className="w-full  rounded-md" src={model} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
