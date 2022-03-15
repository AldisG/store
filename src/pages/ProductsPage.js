import React, { Component } from "react";
import Product from "../components/store-products/Product";
// import { dispatch, getState } from "../redux/store";
import { addItems } from "../redux/storeSlice";

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/mapStates";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDisplayData: false,
    };
  }
  componentDidMount() {
    this.setState({ canDisplayData: true });
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
          {this.state.canDisplayData &&
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
