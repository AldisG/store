import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ title: "dummy item", price: 10, amount: 3 }],
  activeCurrency: {
    label: "USD",
    symbol: "$",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      console.log("redux", payload);
      state.cart = [...state.cart, payload];
    },
    updateActiveCurrency: (state, { payload }) => {
      console.log(payload);
      state.activeCurrency = payload;
    },
  },
});

export const { addItems, updateActiveCurrency } = counterSlice.actions;

export default counterSlice.reducer;
