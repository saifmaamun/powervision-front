import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/productTypes";
type TInitialState = {
  brands: [];
  cloneProducts: IProduct[];
};

const initialState: TInitialState = {
  brands: [],
  cloneProducts: [],
};

const cloneProductSlice = createSlice({
  name: "cloneProduct",
  initialState,
  reducers: {
    addToCloneState: (state, action) => {
      state.cloneProducts = action.payload;
    },
    setAllBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
});
export const { addToCloneState, setAllBrands } = cloneProductSlice.actions;

export default cloneProductSlice.reducer;
