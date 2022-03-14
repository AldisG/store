import React, { Component } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapStates";
import AddToCartIcn from "../AddToCartIcn";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showSelectedItem = () => {
    // const { ID } = useParams()
    // const result = showList.find(({ show }) => String(show.id) === String(ID))
  };
  render() {
    const { name, brand, category, description, gallery, id, inStock, prices } =
      this.props.product;
    const thumbnailPhoto = gallery[0];
    const { activeCurrency } = this.props.cart;
    const currentPrice = prices.find(
      (item) => item.currency.label === activeCurrency.label
    );

    return (
      <div className={`Product ${inStock ? "Product--not-available" : ""}`}>
        <div className="product-thumbnail">
          {inStock && <span className="out-of-stock">OUT OF STOCK</span>}
          <img src={thumbnailPhoto} alt={name} />
        </div>
        <AddToCartIcn />
        <div className="product-info">
          <div className="product-title">{name}</div>
          <div className="product-price">
            {`${currentPrice.currency.symbol} ${currentPrice.amount}`}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
// <LinkToItem linkId={id} classNameProp="navigation-link" text="" /> piemers
