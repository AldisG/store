import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { categories } = this.props;

    return (
      <nav className="nav">
        <ul>
          {categories?.map((item) => (
            <li key={item}>
              <Link to="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
