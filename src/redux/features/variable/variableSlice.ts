import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  variable: boolean;
};
const initialState: TInitialState = {
  variable: true,
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
