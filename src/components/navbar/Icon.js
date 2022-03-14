import { Component } from "react";

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { iconImg, name } = this.props;
    return (
      <div className={`icon ${"icon-" + name}`}>
        <img src={iconImg} alt={name} />
      </div>
    );
  }
}

export default Icon;
