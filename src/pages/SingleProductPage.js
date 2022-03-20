import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { renderPrice } from "../components/activeCurrency";
import Atributes from "../components/Atributes";
import Gallery from "../components/singleProductComponents/Gallery";
import { mapStateToProps } from "../redux/mapStates";
import { convertedDescription } from "../util/customFunctions";

// Can't access params using Class components, therefor i used Functional component just for this component
export function SingleProductPage(props) {
  const { ID } = useParams();
  const { allItems, activeCurrency } = props.cart;
  const productsInfo = allItems[0].products.find((item) => item.id === ID);
  const { inStock, name, brand, description, prices, gallery, attributes } =
    productsInfo;

  const desc = convertedDescription(description);

  const price = prices.find(
    ({ currency: { label } }) => label === activeCurrency.label
  );

  return (
    <div className="SingleProductPage">
      <div className="gallery-container">
        <Gallery gallery={gallery} name={name} inStock={inStock} />
      </div>

      <div className="product-info-wrapper">
        <div className="header">
          <h2 className="title">{name}</h2>
          <p className="brand">{brand}</p>
        </div>

        <div className="atributes">
          {attributes.length > 0 && <Atributes attributes={attributes} />}
        </div>

        <h2 className="roboto-condensed-font price-word">PRICE:</h2>
        <span className="price">
          {renderPrice(price.currency.symbol, price.amount)}
        </span>

        <button
          title="Add this item to your cart!"
          className="add-to-cart-btn"
          disabled={inStock}
        >
          ADD TO CART
        </button>
        <p className="roboto-font description">{desc}</p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SingleProductPage);
