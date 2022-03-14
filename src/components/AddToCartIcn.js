import { Component } from "react";
import cart from "../assets/add-to-cart.png";

const iconStyle = {
  width: "5.2rem",
};

class AddToCartIcn extends Component {
  render() {
    return (
      <span className="AddToCartIcn" style={iconStyle}>
        <img src={cart} alt="cart" />
      </span>
    );
  }
}

export default AddToCartIcn;
