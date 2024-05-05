import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  variable: string;
};
const initialState: TInitialState = {
  variable: "",
};

const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    forUpdate: (state, action) => {
      state.variable = action.payload;
    },
    forAdd: (state, action) => {
      state.variable = action.payload;
    },
  },
});
export const { forAdd, forUpdate } = variableSlice.actions;
export default variableSlice.reducer;
