import {
  Brush,
  House,
  LogOut,
  Palette,
  Shield,
  UserRoundPen,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.png";
import { useEditProfileManagementStore } from "../stores/DialogManagementStore";
import { useLeaderboardManagement } from "../stores/LeaderboardManagementStore";
import { useUserManagementStore } from "../stores/UserManagementStore";
import IconInfo from "./IconInfo";

const Sidebar = () => {
  const style =
    "vertical-centered cursor-pointer w-full h-[70px] hover:bg-zinc-700 ";
  const navigate = useNavigate();

  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();
  const { leaderboard } = useLeaderboardManagement();
  const { setProfileInfo } = useEditProfileManagementStore();
  const [sidebarContainerHeight, setsidebarContainerHeight] = useState();

  useEffect(() => { }, [loggedInUserInfo]);
  useEffect(() => {
    setsidebarContainerHeight(getRemainingHeight());
    window.addEventListener("resize", getRemainingHeight);
    return () => {
      window.removeEventListener("resize", getRemainingHeight);
    };
  }, []);

  const getRemainingHeight = () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const windowHeight = window.innerHeight;
    const remainingHeight = windowHeight - headerHeight;
    document.getElementById("sidebar").style.height =
      remainingHeight + "px";
  };
  const getRankFromPlayerBoard = (email) => {
    return leaderboard.findIndex((player) => player[1] === email) + 1;
  };
  const handleEditProfileButton = () => {
    setProfileInfo(loggedInUserInfo);
  };
  const handleButton = (button) => () => {
    if (button === "logOut") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLoggedInUserInfo(undefined);
      navigate("/");
    }
  };

  return (
    <div className="overflow-auto scrollbar-hide" id="sidebar" style={{
      height: sidebarContainerHeight
    }}>
      <div className="centered mb-5 py-5">
        <img
          src={loggedInUserInfo?.photoUrl || userIcon}
          alt="user-icon"
          className="rounded-full object-cover w-[120px] h-[120px] p-5 lg:w-[150px] lg:h-[150px]"
        />

        <span className="text-2xl font-bold">{loggedInUserInfo?.name}</span>
        <article className="text-sm break-words text-center mt-2 w-4/5">
          <p>{loggedInUserInfo?.description}</p>
        </article>

        <div className="text-sm mt-5">
          <IconInfo
            config={{
              icon: <Shield />,
              text: `Rank ${getRankFromPlayerBoard(loggedInUserInfo?.email)}`,
              color: "text-green-500",
            }}
          />
        </div>
      </div>

      <div className={style} onClick={() => navigate("feed")}>
        <div className="flex flex-row w-[150px]">
          <House />
          <span className="font-meduim pl-5">Home</span>
        </div>
      </div>
      <div className={style} onClick={() => handleEditProfileButton()}>
        <div className="flex flex-row w-[150px]">
          <UserRoundPen />
          <span className="font-meduim pl-5">Edit Profile</span>
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
          <Palette />
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
