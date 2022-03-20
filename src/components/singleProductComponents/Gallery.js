import React, { Component } from "react";
import Gallerylistitems from "./GalleryListItems";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePic: 0,
    };
  }
  changeActivePic(value) {
    if (this.state.activePic !== value) {
      this.setState({ activePic: value });
    }
  }
  render() {
    const { gallery, name, inStock } = this.props;
    const { activePic } = this.state;
    return (
      <div className="gallery-container">
        <div className="available-images">
          {gallery.map((item, i) => (
            <Gallerylistitems
              key={item}
              item={item}
              changeActivePic={() => this.changeActivePic(i)}
            />
          ))}
        </div>
        <div className={`gallery-item-large ${inStock ? "unavailable" : ""}`}>
          {inStock && <span className="out-of-stock">OUT OF STOCK</span>}
          <img src={gallery[activePic]} alt={name} />
        </div>
      </div>
    );
  }
}

export default Gallery;
