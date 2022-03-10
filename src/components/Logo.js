import { Component } from "react";
import logo from "../assets/logo.png";

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
