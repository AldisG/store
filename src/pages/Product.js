import React, { Component } from "react";
// import { useNavigate, useParams } from "react-router-dom";

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
    return <div className="Product">Product page</div>;
  }
}

export default Product;
