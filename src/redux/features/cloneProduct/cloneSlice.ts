import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/productTypes";
type TInitialState = {
  cloneProducts: IProduct[];
};

const initialState: TInitialState = {
  cloneProducts: [],
};

const cloneProductSlice = createSlice({
  name: "cloneProduct",
  initialState,
  reducers: {
    addToCloneState: (state, action) => {
      state.cloneProducts = action.payload;
    },
  },
});
export const { addToCloneState } = cloneProductSlice.actions;

export default cloneProductSlice.reducer;
