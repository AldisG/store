import React, { Component } from "react";
import Product from "./Product";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  storeDataToDisplay = () => {
    const allStoreProducts = this.props.storeApiData;
    const selectedCategory = this.props.selectedCategory;
    return allStoreProducts.filter(
      (items) => items.name === selectedCategory
    )[0].products;
  };

  render() {
    const { selectedCategory } = this.props;
    return (
      <div className="ProductsPage">
        <h3>Current category: {selectedCategory}</h3>
        <b>items:</b>
        <div>
          {this.storeDataToDisplay()?.map(({ id, name }) => (
            <Product key={id} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductsPage;
// <LinkToItem linkId={id} classNameProp="navigation-link" text="" /> piemers
