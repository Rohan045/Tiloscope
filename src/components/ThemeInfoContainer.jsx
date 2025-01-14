import React from "react";

const ThemeInfoContainer = (props) => {
  const { theme, description } = props.config;
  return (
    <div className="flex text-sm flex-col p-3 border-solid border-zinc-700 border-b bg-black">
      <div className="flex flex-row justify-between">
        <span className="font-bold">{theme}</span>
      </div>

      <p className="text-sm mt-5">{description}</p>
    </div>
  );
};

export default ThemeInfoContainer;
