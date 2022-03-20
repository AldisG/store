import React, { Component } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapStates";
import AddToCartIcn from "../AddToCartIcn";
import SmallProductInfo from "../SmallProductInfo";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartAddIcon: false,
    };
  }
  showAddToCartItem = () => {
    this.setState({ showCartAddIcon: true });
  };
  hideAddToCartItem = () => {
    this.setState({ showCartAddIcon: false });
  };

  currentPrice = () => {
    const { prices } = this.props.product;
    const { activeCurrency } = this.props.cart;
    return prices.find((item) => item.currency.label === activeCurrency.label);
  };

  addItemToTheCart = (itemData) => {
    const { addAnewItem } = this.props;
    const { name } = this.props.product;

    addAnewItem({
      name: name,
      amount: 1,
      value: this.currentPrice().currency.symbol,
      price: this.currentPrice().amount,
    });
  };

  render() {
    const { name, gallery, id, inStock } = this.props.product;
    const { showCartAddIcon } = this.state;
    const thumbnailPhoto = gallery[0];

    return (
      <div
        className={`Product ${inStock ? "Product--not-available" : ""}`}
        onMouseOver={() => this.showAddToCartItem()}
        onMouseLeave={() => this.hideAddToCartItem()}
      >
        <Link to={`/${id}`}>
          <div className="product-thumbnail">
            {inStock && <span className="out-of-stock">OUT OF STOCK</span>}
            <img src={thumbnailPhoto} alt={name} />
          </div>
        </Link>

        {!inStock && (
          <AddToCartIcn
            addItemToTheCart={this.addItemToTheCart}
            showCartAddIcon={showCartAddIcon}
          />
        )}
        <Link to={`/${id}`}>
          {this.currentPrice() && (
            <SmallProductInfo
              name={name}
              symbol={this.currentPrice().currency.symbol}
              amount={this.currentPrice().amount}
            />
          )}
        </Link>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
