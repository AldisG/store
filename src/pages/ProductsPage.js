import React, { Component } from "react";
import Product from "../components/store-products/Product";
// import { dispatch, getState } from "../redux/store";
import { addItems } from "../redux/storeSlice";

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/mapStates";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  storeDataToDisplay = () => {};
  render() {
    const { selectedCategory } = this.props.cart;
    const { storeApiData } = this.props;
    const correctCategoryItems = storeApiData.find(
      (item) => item.name === selectedCategory
    ).products;

    const activeCategory =
      selectedCategory[0].toUpperCase() + selectedCategory.slice(1);

    return (
      <div className="ProductsPage">
        <h1 className="ProductsPage__header">{activeCategory}</h1>
        <div className="ProductsPage__product-list">
          {correctCategoryItems.length > 0 &&
            correctCategoryItems.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

// <LinkToItem linkId={id} classNameProp="navigation-link" text="" /> piemers
