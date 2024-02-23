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

  filterableProducts: IProduct[];
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
  filterableProducts: [],
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
    addToFilterableProducts: (state, action) => {
      state.filterableProducts = action.payload;
    },
    addToFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    filterByGender: (state, action) => {
      state.gender = action.payload;
    },
    filterByMaterial: (state, action) => {
      state.material = action.payload;
    },
  },
});
export const {
  filterByGender,
  filterByMaterial,
  addToFilterableProducts,
  addToFilteredProducts,
  filterSwitch,
  filterOff,
} = filterSlice.actions;
export default filterSlice.reducer;
