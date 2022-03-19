import { Component } from "react";
import { renderPrice } from "./activeCurrency";

class SmallProductInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, symbol, amount } = this.props;
    return (
      <div className="product-info">
        <div className="product-title">{name}</div>
        <div className="product-price">{renderPrice(symbol, amount)}</div>
      </div>
    );
  }
}

export default SmallProductInfo;
