import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToFilterableProducts,
  setGenderFilter,
  filterOff,
  filterSwitch,
  setMaterialFilter,
  setBrandFilter,
} from "../../redux/features/filteredProduct/filterSlice";

export function FilterMenu() {
  // states
  const dispatch = useAppDispatch();
  const { cloneProducts } = useAppSelector((state) => state.clone);
  // trying filtering
  const filterableData = [...cloneProducts];

  const [openNav, setOpenNav] = useState(false);

  // set gender
  const handleGenderChange = async (e: { target: { value: unknown } }) => {
    dispatch(filterSwitch());
    dispatch(addToFilterableProducts(filterableData));
    dispatch(setGenderFilter(e?.target?.value));
  };
  // set material
  const handleMetarialChange = (e: { target: { value: unknown } }) => {
    dispatch(filterSwitch());
    dispatch(addToFilterableProducts(filterableData));
    dispatch(setMaterialFilter(e?.target?.value));
  };
  // set Brand
  const handleBrandChange = (e: { target: { value: unknown } }) => {
    dispatch(filterSwitch());
    dispatch(addToFilterableProducts(filterableData));
    dispatch(setBrandFilter(e?.target?.value));
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="grid grid-flow-col gap-2 space-x-4">
      <Button placeholder="" onClick={() => dispatch(filterOff())}>
        Clear All
      </Button>
      <ul className="mt-2 mb-4  top-0 z-10  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        Select Gender :
        <li className="w-fit  ">
          <select className=" " onChange={handleGenderChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
            <option value="children">Children</option>
          </select>
        </li>
      </ul>
      <ul className="mt-2 mb-4  top-0 z-10  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        Select Material :
        <li className="w-fit  ">
          <select className=" " onChange={handleMetarialChange}>
            <option value="metal">Metal</option>
            <option value="acetate">Acetate</option>
            <option value="plastic">Plastic</option>
          </select>
        </li>
      </ul>
      <ul className="mt-2 mb-4  top-0 z-10  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        Select Brand :
        <li className="w-fit  ">
          <select className=" " onChange={handleBrandChange}>
            <option value="oliver peoples">Oliver Peoples</option>
            <option value="warby parker">Warby Parker</option>
            <option value="ray-ban">Ray-Ban</option>
            <option value="prada">Prada</option>
          </select>
        </li>
      </ul>
    </div>
  );

  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <div className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6">
      <Navbar
        placeholder={""}
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              placeholder={""}
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="z-10" open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}
