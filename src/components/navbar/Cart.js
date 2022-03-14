import { Component } from "react";
import Icon from "./Icon";
import cartIcon from "../../assets/cart-icon.png";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cartItemsToDisplay } = this.props;
    return (
      <div className="cart-items">
        <Icon iconImg={cartIcon} name="cart" />
        <span className="item-count-on-cart">{cartItemsToDisplay}</span>
      </div>
    );
  }
}

export default Cart;
