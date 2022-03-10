import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/storeSlice";

export const store = configureStore({
  reducer: {
    cart: counterSlice,
  },
});
export const { dispatch, getState } = store;
