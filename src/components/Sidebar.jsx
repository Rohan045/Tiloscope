import { Brush, House, LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.png";
import { useUserManagementStore } from "../stores/UserManagementStore";

const Sidebar = () => {
  const style =
    "vertical-centered cursor-pointer w-full h-[70px] hover:bg-zinc-700 ";
  const navigate = useNavigate();

  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();

  useEffect(() => {}, [loggedInUserInfo]);

  const handleButton = (button) => () => {
    if (button === "logOut") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLoggedInUserInfo(undefined);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="centered mb-5 py-5">
        <img
          src={loggedInUserInfo?.photoUrl || userIcon}
          alt="user-icon"
          className="rounded-full object-cover w-[120px] h-[120px] p-5 lg:w-[150px] lg:h-[150px]"
        />

        <span className="text-2xl font-bold">{loggedInUserInfo?.name}</span>
        <span>{loggedInUserInfo?.email}</span>
        <span>rank #100</span>
      </div>

      <div className={style} onClick={() => navigate("feed")}>
        <div className="flex flex-row w-[150px]">
          <House />
          <span className="font-meduim pl-5">Home</span>
        </div>
      </div>
      <div className={style} onClick={() => navigate("createBoard")}>
        <div className="flex flex-row w-[150px]">
          <Brush />
          <span className="font-meduim pl-5">Create Board</span>
        </div>
      </div>
      <div className={style} onClick={() => navigate("boards")}>
        <div className="flex flex-row w-[150px]">
          <Brush />
          <span className="font-meduim pl-5">My Boards</span>
        </div>
      </div>
      <div className={style} onClick={handleButton("logOut")}>
        <div className="flex flex-row w-[150px]">
          <LogOut />
          <span className="font-meduim pl-5">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
