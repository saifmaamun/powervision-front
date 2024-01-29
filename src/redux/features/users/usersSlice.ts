import { createSlice } from "@reduxjs/toolkit";

type ICredentials = {
  email: string;
  password: string;
};

type TInitialState = {
  email: string;
  password: string;
  user: ICredentials;
};
const initialState: TInitialState = {
  email: "",
  password: "",
  user: {
    email: "",
    password: "",
  },
};
// export const createUser = createAsyncThunk(
//   'user/',
//   async ({ email, password }: ICredentials) => {
//     const data = await useSignUpMutation( data);
//     return data.user.email;
//   }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPass: (state, action) => {
      state.password = action.payload;
    },
    setUser: (state, action) => {
      state.user.email = action.payload;
      // state.user.email = state.email;
    },
    resetState: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmail, setUser, setPass, resetState } = userSlice.actions;

export default userSlice.reducer;
