import React, { Component } from "react";

class Gallerylistitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePic: 0,
    };
  }
  render() {
    const { item, changeActivePic } = this.props;
    return (
      <img
        key={item}
        src={item}
        alt="photo"
        className="gallery-item-small"
        onClick={changeActivePic}
      />
    );
  }
}

export default Gallerylistitems;
