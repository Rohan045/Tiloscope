import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoaderBox = (props) => {
  const { text } = props.config;
  return (
    <div className="card flex flex-col bg-zinc-800 text-gray-300 text-sm w-[200px] h-[200px]">
      <div className="centered">
        <ColorRing
          visible={true}
          height="150"
          width="150"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
      <div className="horizontal-centered">{text || "Loading..."}</div>
    </div>
  );
};

export default LoaderBox;
