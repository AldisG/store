import React, { Component } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
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
  addItemToTheCart = () => {
    const { addAnewItem } = this.props;
    // const { cart } = this.props.cart;
    // console.log(cart);
    // addAnewItem("aaaaaaaaa");
  };
  // const { ID } = useParams()
  // const result = showList.find(({ show }) => String(show.id) === String(ID))
  render() {
    const { name, brand, category, description, gallery, id, inStock, prices } =
      this.props.product;

    const { showCartAddIcon } = this.state;
    const { activeCurrency } = this.props.cart;

    const thumbnailPhoto = gallery[0];

    const currentPrice = prices.find(
      (item) => item.currency.label === activeCurrency.label
    );

    return (
      <div
        className={`Product ${inStock ? "Product--not-available" : ""}`}
        onMouseOver={() => this.showAddToCartItem()}
        onMouseLeave={() => this.hideAddToCartItem()}
      >
        <div className="product-thumbnail">
          {inStock && <span className="out-of-stock">OUT OF STOCK</span>}
          <img src={thumbnailPhoto} alt={name} />
        </div>

        {!inStock && (
          <AddToCartIcn
            showCartAddIcon={showCartAddIcon}
            addItemToTheCart={this.addItemToTheCart}
          />
        )}
        <SmallProductInfo
          name={name}
          symbol={currentPrice.currency.symbol}
          amount={currentPrice.amount}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
// <LinkToItem linkId={id} classNameProp="navigation-link" text="" /> piemers
