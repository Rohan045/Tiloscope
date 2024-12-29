import React from "react";

const IconInfo = (props) => {
  const { icon, text } = props.config;
  return (
    <div className="flex flex-row mr-5">
      <div className="centered mr-2">{icon}</div>
      <div className="centered">{text}</div>
    </div>
  );
};

export default IconInfo;
