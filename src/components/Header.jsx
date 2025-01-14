import { Users } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/main-title-image.png";
import IconInfo from "./IconInfo";

const Header = () => {
  const navigator = useNavigate();

  return (
    <div
      id="header"
      className="sticky top-0 z-10 flex flex-row justify-between p-3 border-solid bg-black border-zinc-700 border-b md:p-1 md:px-5"
    >
      <div
        className="w-[50px] h-[50px] cursor-pointer md:w-[70px] md:h-[70px]"
        onClick={() => navigator("/home/feed")}
      >
        <img src={logo} alt="logo" />
      </div>

      <div className="flex flex-row">
        <div
          className="flex flex-row cursor-pointer"
          onClick={() => {
            window.open(process.env.REACT_APP_PROJECT_DEVPOST_URL, "_blank");
          }}
        >
          <IconInfo
            config={{
              icon: <Users />,
              text: "About",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
