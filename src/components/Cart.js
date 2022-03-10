import { Component } from "react";
import { updateActiveCurrency } from "../redux/storeSlice";
import { dispatch, getState } from "../redux/store";
import Icon from "./Icon";
import cartIcon from "../assets/cart-icon.png";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: {},
      cartItemsToDisplay: 0,
    };
  }
  componentDidMount() {
    const { cart, activeCurrency } = getState().cart;
    this.setState({
      currentCurrency: activeCurrency,
      cartItemsToDisplay: cart.length,
    });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.cartItemsToDisplay !== this.state.cartItemsToDisplay) {
      console.log(this.state.storeApiData);
    }
  }
  changeCurrentCurrency = (e) => {
    const val = e.target.value.split(" ");
    dispatch(
      updateActiveCurrency({
        label: val[1],
        symbol: val[0],
      })
    );
  };
  // componentDidUpdate() {
  //   const { cart, activeCurrency } = getState().cart;

  //   console.log(activeCurrency);
  // }
  render() {
    const { currencies } = this.props;
    const { cartItemsToDisplay } = this.state;
    return (
      <div className="Cart">
        <div className="currency-container">
          {currencies.length > 0 && (
            <select onChange={(e) => this.changeCurrentCurrency(e)}>
              {currencies?.map(({ symbol, label }) => (
                <option key={label} value={`${symbol} ${label}`}>
                  {`${symbol} ${label}`}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="cart-items">
          <Icon iconImg={cartIcon} name="cart" />
          {cartItemsToDisplay > 0 && (
            <span className="item-count-on-cart">{cartItemsToDisplay}</span>
          )}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     carts: state.cart.cart,
//   };
// };
// export default connect(mapStateToProps)(Cart);
export default Cart;
