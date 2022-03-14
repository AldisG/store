import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartAndCurrency from "./CartAndCurrency";
import Logo from "./Logo";

import { updateSelectedCategory } from "../../redux/storeSlice";
import { dispatch, getState } from "../../redux/store";

import { mapStateToProps, mapDispatchToProps } from "../../redux/mapStates";
import { connect } from "react-redux";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      categories,
      currencies,
      cart: { selectedCategory, cart },
    } = this.props;

    const activeCategory = (item) =>
      item === selectedCategory ? "active" : "";

    const handleClick = (item) => {
      const { setActiveCategory } = this.props;
      setActiveCategory(item);
    };
    return (
      <div className="navigation-container">
        <nav className="nav">
          {categories?.map((item) => (
            <li key={item}>
              <Link
                to="/"
                className={`link ${activeCategory(item)}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </nav>
        <Logo />
        <CartAndCurrency currencies={currencies} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
