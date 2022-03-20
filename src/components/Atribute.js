import React from "react";

const Atribute = ({ atribute, name }) => {
  const { value, displayValue } = atribute;
  const showTextOrNot = () => {
    return value.includes("#") ? "" : displayValue;
  };
  return (
    <button
      key={value}
      title={`${name}: ${displayValue}`}
      type="button"
      className="product-atribute-btn"
      style={{ backgroundColor: value }}
    >
      {showTextOrNot()}
    </button>
  );
};

export default Atribute;
