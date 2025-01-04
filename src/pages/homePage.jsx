import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Leaderboard from "../components/leaderboard";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate("feed");
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-row mx-[10%] h-[90%]">
        <div className="w-1/5 border-solid border-zinc-700 border-r shadow-sm">
          <Sidebar />
        </div>
        <div className="overflow-auto w-3/5">
          <Outlet />
        </div>
        <div className="w-1/5 border-solid border-zinc-700 border-l shadow-sm">
          <Leaderboard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
