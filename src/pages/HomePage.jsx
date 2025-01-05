import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import Sidebar from "../components/Sidebar";
import { useUserManagementStore } from "../stores/UserManagementStore";

const HomePage = () => {
  const navigate = useNavigate();
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (loggedInUserInfo === undefined) {
      if (user) {
        setLoggedInUserInfo(JSON.parse(user));
        navigate("feed");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    } else {
      navigate("feed");
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-row h-[90%] lg:mx-[10%]">
        <div className="w-1/4 border-solid border-zinc-700 border-x">
          <Sidebar />
        </div>
        <div className="overflow-auto w-2/4 scrollbar-hide">
          <Outlet />
        </div>
        <div className="w-1/4 border-solid border-zinc-700 border-x">
          <Leaderboard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
