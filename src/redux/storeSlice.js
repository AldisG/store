import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ title: "dummy item", price: 10, amount: 3 }],
  activeCurrency: {
    label: "",
    symbol: "",
  },
  selectedCategory: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    updateActiveCurrency: (state, { payload }) => {
      state.activeCurrency = payload;
    },
    updateSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    // setAllItems: (state, { payload }) => {
    //   state.selectedCategory = payload;
    // },
  },
});

export const { addItems, updateActiveCurrency, updateSelectedCategory } =
  counterSlice.actions;

export default counterSlice.reducer;
