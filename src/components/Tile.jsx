import React, { useEffect } from "react";

const Tile = (props) => {
  const { id, name, description, html } = props.config;
  const index = props.index;
  const onDragStartFn = props.onDragStartFn;

  useEffect(() => {
    // document.getElementById(id).innerHTML = <span>Code</span>;
  }, [id, html]);

  return (
    <div
      id={id}
      className="centered w-[100px] h-[100px] bg-orange-700"
      onDragStart={(e) => onDragStartFn(e, id)}
      draggable
    ></div>
  );
};

export default Tile;
