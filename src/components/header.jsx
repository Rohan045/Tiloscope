import { Github } from "lucide-react";
import React from "react";
import logo from "../assets/main-title-image.png";
import IconInfo from "./IconInfo";

const Header = () => {
  return (
    <div className="sticky bg-zinc-800 top-0 z-10 flex flex-row justify-between p-1 px-5 border-solid border-zinc-700 border-b">
      <div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "spring" }}
        className="centered"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]"
        />
      </div>

      <div
        className="flex flex-row cursor-pointer"
        onClick={() => {
          window.open(process.env.REACT_APP_FRONTEND_URL, "_blank");
          window.open(process.env.REACT_APP_BACKEND_URL, "_blank");
        }}
      >
        <IconInfo
          config={{
            icon: <Github />,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
