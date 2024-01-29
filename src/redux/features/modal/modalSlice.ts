import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  open: boolean;
};
const initialState: TInitialState = {
  open: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.open = !state.open;
    },
  },
});
export const { handleOpen } = modalSlice.actions;

export default modalSlice.reducer;
