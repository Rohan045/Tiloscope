import { motion } from "framer-motion";
import { Brush, House, LogOut, ShieldHalf } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assests/user-icon.png";
import { useUserManagementStore } from "../stores/UserManagementStore";

function Sidebar() {
  const style =
    "space-x-2 pt-5 flex place-content-center cursor-pointer w-full h-[70px] hover:bg-zinc-800 ";
  const navigate = useNavigate();

  const { loggedInUserInfo } = useUserManagementStore();

  const handleButton = (button) => () => {
    if (button === "logOut") {
      navigate("/");
    } else if (button === "boards") {
      navigate("/game");
    }
  };
  return (
    <>
      <div className="h-screen">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
          className="centered mb-5 py-5"
        >
          <img
            src={loggedInUserInfo?.photo_url || userIcon}
            alt="user-icon"
            className="rounded-full p-5 w-[150px] h-[150px]"
          />

          <span className="text-2xl font-bold">{loggedInUserInfo?.name}</span>
          <span>{loggedInUserInfo?.email}</span>
          <span>rank #100</span>
        </motion.div>

        <div class={style} onClick={() => navigate("feed")}>
          <House />
          <span className="font-meduim pl-5 text-start w-[200px]">Home</span>
        </div>
        <div class={style}>
          <ShieldHalf />
          <span className="font-meduim pl-5 text-start w-[200px]">
            Leaderboard
          </span>
        </div>
        <div class={style} onClick={() => navigate("createBoard")}>
          <Brush />
          <span className="font-meduim pl-5 text-start w-[200px]">
            Create Board
          </span>
        </div>
        <div class={style} onClick={handleButton("boards")}>
          <Brush />
          <span className="font-meduim pl-5 text-start w-[200px]">
            My Boards
          </span>
        </div>
        <div class={style} onClick={handleButton("boards")}>
          <Brush />
          <span className="font-meduim pl-5 text-start w-[200px]">
            All Boards
          </span>
        </div>
        <div class={style} onClick={handleButton("logOut")}>
          <LogOut />
          <span className="font-meduim pl-5 text-start w-[200px]">Log Out</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
