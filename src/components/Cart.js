import { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.currencies);
  }
  render() {
    const { currencies } = this.props;
    return <div className="Cart">Cart</div>;
  }
}

export default Cart;
