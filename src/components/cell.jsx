import React from "react";

const Cell = (props) => {
  return (
    <div
      className="tile"
      style={{
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default Cell;
