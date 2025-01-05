import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("feed");
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
