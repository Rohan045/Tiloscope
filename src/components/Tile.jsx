import React from "react";

const Tile = (props) => {
  const { id, html } = props.config;
  const onDragStartFn = props.onDragStartFn;
  const onClickFn = props.onClickFn;
  const isTileHighlightEnabled = props.isTileHighlightEnabled;

  const handleOnClick = (e, id) => {
    const elementsWithIds = document.querySelectorAll("[id]");
    onClickFn(e, id);
    elementsWithIds.forEach((element) => {
      if (element.id === id && isTileHighlightEnabled) {
        element.style.border = "3px solid #1e90ff";
        setTimeout(() => {
          element.style.border = "none";
        }, 2000);
      }
    });
  };

  return (
    <div
      id={id}
      className="centered w-[50px] h-[50px]"
      style={{ backgroundColor: html }}
      onDragStart={(e) => onDragStartFn(e, id)}
      onClick={(e) => handleOnClick(e, id)}
      draggable
    ></div>
  );
};

export default Tile;
