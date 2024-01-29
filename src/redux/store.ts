import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from "./features/products/productsSlice";
import modalReducer from "./features/modal/modalSlice";
import variableReducer from "./features/variable/variableSlice";
import userReducer from "./features/users/usersSlice";
import sellReducer from "./features/sell/sellSlice";
// ...

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: productReducer,
    modal: modalReducer,
    variable: variableReducer,
    user: userReducer,
    sell: sellReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
