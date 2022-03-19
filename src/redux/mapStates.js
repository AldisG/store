import {
  addItems,
  updateSelectedCategory,
  updateActiveCurrency,
  setStoreItems,
} from "../redux/storeSlice";

export const mapStateToProps = (state) => state;

export const mapDispatchToProps = (dispatch) => {
  return {
    addAnewItem: (value) => dispatch(addItems(value)),
    setAllItemsList: (value) => dispatch(addItems(value)),
    setActiveCategory: (value) => dispatch(updateSelectedCategory(value)),
    setActiveCurrency: (value) => dispatch(updateActiveCurrency(value)),
    setAllStoreItems: (value) => dispatch(setStoreItems(value)),
  };
};
