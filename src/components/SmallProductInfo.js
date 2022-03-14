import { Component } from "react";

class SmallProductInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, symbol, amount } = this.props;
    return (
      <div className="product-info">
        <div className="product-title">{name}</div>
        <div className="product-price">{`${symbol} ${amount}`}</div>
      </div>
    );
  }
}

export default SmallProductInfo;
