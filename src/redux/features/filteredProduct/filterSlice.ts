import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/productTypes";

type TInitalState = {
  status: boolean;
  gender: string;
  material: string;
  shape: string;
  lens: string;
  brand: string;
  price: number;
  lenseColor: string;
  frameColor: string;

  filteredProducts: IProduct[];
};

const initialState: TInitalState = {
  status: false,
  gender: "",
  material: "",
  shape: "",
  lens: "",
  brand: "",
  price: 99999,
  lenseColor: "",
  frameColor: "",
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {
    filterSwitch: (state) => {
      state.status = true;
    },
    filterOff: (state) => {
      state.status = false;
    },
    addToFilteredProducts: (state, action) => {
      state.filteredProducts = [...action.payload];
    },
    filterGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});
export const { filterGender, addToFilteredProducts, filterSwitch, filterOff } =
  filterSlice.actions;
export default filterSlice.reducer;
