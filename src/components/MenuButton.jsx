import React from "react";

const MenuButton = (props) => {
  const { icon, text, onClickFn } = props.config;
  return (
    <div className="flex flex-col cursor-pointer" onClick={() => onClickFn()}>
      <div className="horizontal-centered mb-2">{icon}</div>
      <div className="horizontal-centered">{text}</div>
    </div>
  );
};

export default MenuButton;
