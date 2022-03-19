import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { renderPrice } from "../components/activeCurrency";
import { mapStateToProps } from "../redux/mapStates";

export function SingleProductPage(props) {
  const { ID } = useParams();
  const { allItems, activeCurrency } = props.cart;
  const productsInfo = allItems[0].products.find((item) => item.id === ID);
  const { name, description, prices } = productsInfo;
  const desc = description.replace(/<[^>]+>/g, "");

  const price = prices.find(
    ({ currency: { label } }) => label === activeCurrency.label
  );
  console.log(price);

  return (
    <div className="SingleProductPage">
      <div className="gallery-container">
        <div className="available-images">...</div>
        <div className="selected-image"></div>
      </div>
      <div className="product-info-wrapper">
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="sizes"></div>
        <h2>Perice:</h2>

        <span>{renderPrice(price.currency.symbol, price.amount)}</span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SingleProductPage);
