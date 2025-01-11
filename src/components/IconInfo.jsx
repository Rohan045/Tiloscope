import React from "react";

const IconInfo = (props) => {
  const { icon, text, color } = props.config;
  return (
    <div className={`flex flex-row mx-3 ${color && color}`}>
      <div className="centered mr-2">{icon}</div>
      <div className="centered">{text}</div>
    </div>
  );
};

export default IconInfo;
