import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  amount: number;
  message: string;
};

const initialState: TInitialState = {
  amount: 0,
  message: "",
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    increaseSell: (state, action) => {
      state.amount += action.payload;
    },
    decreaseSell: (state, action) => {
      state.amount -= action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { increaseSell, decreaseSell, setMessage, resetAmount } =
  saleSlice.actions;

export default saleSlice.reducer;
