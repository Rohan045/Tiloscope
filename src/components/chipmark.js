import React from "react";

const Chipmark = (props) => {
  const { icon, text, isSelected, onClickFn } = props.config;
  return (
    <div
      className="flex flex-row py-3 rounded-2xl mr-5 cursor-pointer"
      style={{
        fontWeight: isSelected ? "bold" : "",
      }}
      onClick={() => onClickFn()}
    >
      <div
        className="flex flex-col justify-center rounded-full border p-3 mr-2"
        style={{ borderWidth: isSelected ? "medium" : "thin" }}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center">{text}</div>
    </div>
  );
};

export default Chipmark;
