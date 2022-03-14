import { Component } from "react";
import cart from "../assets/add-to-cart.png";

class AddToCartIcn extends Component {
  render() {
    const { showCartAddIcon, addItemToTheCart } = this.props;
    return (
      <span
        onClick={() => addItemToTheCart()}
        className={`AddToCartIcn ${
          showCartAddIcon ? "AddToCartIcn--active" : ""
        }`}
      >
        <img src={cart} alt="cart" />
      </span>
    );
  }
}

export default AddToCartIcn;
