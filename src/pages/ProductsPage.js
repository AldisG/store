import React, { Component } from "react";

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
    console.log(this.storeDataToDisplay());
    const { selectedCategory } = this.props;
    return (
      <div className="ProductsPage">
        <h3>Current category: {selectedCategory}</h3>
        <b>items:</b>
        <ul>
          {this.storeDataToDisplay()?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductsPage;
// <LinkToItem linkId={id} classNameProp="navigation-link" text="" /> piemers
