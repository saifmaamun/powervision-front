import fb from "../../assets/icons/facebook.png";
import tw from "../../assets/icons/twitter.png";
import ln from "../../assets/icons/linkedin.png";
import yt from "../../assets/icons/youtube.png";
import ns from "../../assets/icons/instagram.png";

import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="p-10 text-xs lg:text-base font-light mt-28   bg-blue-gray-900 text-base-content">
      <div className="container grid md:grid-cols-4 sm:grid-cols-1  gap-4 mx-auto">
        <div>
          <Typography
            placeholder=""
            variant="h5"
            color="white"
            className="mb-2 underline"
          >
            Site information
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">COOKIE NOTICES</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">PRIVACY STATEMENT</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">TERMS AND CONDITIONS</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">SCAM AND FRAUD ALERT</Link>
          </Typography>
          <br />
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">SITEMAP</Link>
          </Typography>
        </div>

        <div>
          <Typography
            placeholder=""
            variant="h5"
            color="white"
            className="mb-2 underline"
          >
            News & Media
          </Typography>

          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">SEARCH ALL NEWS</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">LATEST NEWS</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">PUBLICATIONS</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">SPEECHES</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">MEDIA GALLERY</Link>
          </Typography>
          <br />
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">CONTACTS AND RESOURCES</Link>
          </Typography>
        </div>

        <div>
          <Typography
            placeholder=""
            variant="h5"
            color="white"
            className="mb-2 underline"
          >
            Other Websites
          </Typography>

          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">WA’ED VENTURES</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">OUR PARTNERS</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">AEIMCO TRADING COMPANY</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">AEIMCO VENTURES</Link>
          </Typography>
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">OUTLETS</Link>
          </Typography>
          <br />
          <Typography placeholder="" variant="paragraph" className="">
            <Link to="/">POLICIES</Link>
          </Typography>
        </div>

        <div>
          <Typography
            placeholder=""
            variant="h5"
            color="white"
            className="mb-2 underline"
          >
            Social Media
          </Typography>
          <div className="flex gap-5 justify-start">
            <Link to="/">
              <img className="" src={fb} alt="" />
            </Link>
            <Link to="/">
              <img className="" src={tw} alt="" />
            </Link>
            <Link to="/">
              <img className="" src={ln} alt="" />
            </Link>
            <Link to="/">
              <img className="" src={yt} alt="" />
            </Link>
            <Link to="/">
              <img className="" src={ns} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
