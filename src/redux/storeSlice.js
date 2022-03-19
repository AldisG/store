import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  activeCurrency: {
    label: "",
    symbol: "",
  },
  selectedCategory: "",
  allItems: []
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
    setStoreItems: (state, { payload }) => {
      state.allItems = payload;
    },
  },
});

export const { addItems, updateActiveCurrency, updateSelectedCategory, setStoreItems } =
  counterSlice.actions;

export default counterSlice.reducer;
