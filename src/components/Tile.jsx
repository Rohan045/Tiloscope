import React from "react";

const Tile = (props) => {
  const { id, name, description, html } = props.config;
  const index = props.index;
  const onDragStartFn = props.onDragStartFn;

  return (
    <div
      id={id}
      className="centered w-[50px] h-[50px]"
      style={{ backgroundColor: html }}
      onDragStart={(e) => onDragStartFn(e, id)}
      draggable
    ></div>
  );
};

export default Tile;
