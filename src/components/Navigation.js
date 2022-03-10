import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Logo from "./Logo";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { categories, currencies } = this.props;

    return (
      <div className="navigation-container">
        <nav className="nav">
          {categories?.map((item, i) => (
            <li key={item}>
              <Link to="/" className={`link ${!i ? "active" : ""}`}>
                {item}
              </Link>
            </li>
          ))}
        </nav>
        <Logo />
        <Cart currencies={currencies} />
      </div>
    );
  }
}

export default Navigation;
