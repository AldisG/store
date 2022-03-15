import React, { Component } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showSelectedItem = () => {
    const { ID } = useParams();
    console.log(ID);
    // const result = showList.find(({ show }) => String(show.id) === String(ID))
  };
  render() {
    return <div className="SingleProductPage">SingleProductPage</div>;
  }
}

export default SingleProductPage;
