import React, { Component } from "react";

class LoadingHinter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="LoadingHinter">
        <h5>Loading</h5>
      </div>
    );
  }
}

export default LoadingHinter;
