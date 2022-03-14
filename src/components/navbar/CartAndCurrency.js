import { Component } from "react";
import { updateActiveCurrency } from "../../redux/storeSlice";
import { dispatch, getState } from "../../redux/store";
// import Icon from "./Icon";
// import cartIcon from "../../assets/art-icon.png";
import Cart from "./Cart";
import { mapDispatchToProps, mapStateToProps } from "../../redux/mapStates";
import { connect } from "react-redux";

class CartAndCurrency extends Component {
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
    // const { currencies } = this.props;

    // this.props.setActiveCurrency({
    //   label: currencies[0].label,
    //   symbol: currencies[0].symbol,
    // });
  }

  changeCurrentCurrency = (e) => {
    const val = e.target.value.split(" ");
    console.log(val);
    console.log("current curr", this.props.cart.activeCurrency);
    this.props.setActiveCurrency({
      label: val[1],
      symbol: val[0],
    });
  };

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
        {cartItemsToDisplay > 0 && (
          <Cart cartItemsToDisplay={cartItemsToDisplay} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartAndCurrency);
