import React, { Component } from "react";
import Atribute from "./Atribute";

class Atributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePic: 0,
    };
  }
  render() {
    const { attributes } = this.props;
    return (
      <>
        {attributes.map(({ name, items }) => (
          <div className="atributes">
            <h3 className="roboto-condensed-font">{name}:</h3>
            <div className="atribute-buttons">
              {items.map((item) => (
                <Atribute key={item.value} atribute={item} name={name} />
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Atributes;
