import { useDispatch } from "react-redux";
import { addItemsToCart } from "../redux/userCartSlice";

export const useCustomDispatch = (cartData) => {
  const sendData = useDispatch();
  sendData(addItemsToCart(cartData));
  return;
};
export default {};
