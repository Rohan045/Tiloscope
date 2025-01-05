import { Brush, House, LogOut, ShieldHalf } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.png";
import { useUserManagementStore } from "../stores/UserManagementStore";

function Sidebar() {
  const style =
    "space-x-2 pt-5 flex place-content-center cursor-pointer w-full h-[70px] hover:bg-zinc-700 ";
  const navigate = useNavigate();

  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();

  return (
    <div>
      <div className="centered mb-5 py-5">
        <img
          src={loggedInUserInfo?.photoUrl || userIcon}
          alt="user-icon"
          className="rounded-full p-5 md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
        />

        <span className="text-2xl font-bold">{loggedInUserInfo?.name}</span>
        <span>{loggedInUserInfo?.email}</span>
        <span>rank #100</span>
      </div>

      <div class={style} onClick={() => navigate("feed")}>
        <House />
        <span className="font-meduim pl-5 text-start w-[150px]">Home</span>
      </div>
      <div class={style}>
        <ShieldHalf />
        <span className="font-meduim pl-5 text-start w-[150px]">
          Leaderboard
        </span>
      </div>
      <div class={style} onClick={() => navigate("createBoard")}>
        <Brush />
        <span className="font-meduim pl-5 text-start w-[150px]">
          Create Board
        </span>
      </div>
      <div class={style} onClick={() => navigate("boards")}>
        <Brush />
        <span className="font-meduim pl-5 text-start w-[150px]">My Boards</span>
      </div>
      <div class={style} onClick={() => navigate("/")}>
        <LogOut />
        <span className="font-meduim pl-5 text-start w-[150px]">Log Out</span>
      </div>
    </div>
  );
}

export default Sidebar;
