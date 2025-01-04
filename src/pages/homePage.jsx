import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Leaderboard from "../components/leaderboard";
import Sidebar from "../components/sidebar";

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
      <div className="flex flex-row mx-[10%]">
        <div className="w-1/5 border-solid border-zinc-700 border-r shadow-sm">
          <Sidebar />
        </div>
        <div className="overflow-auto scrollbar-hide h-screen w-3/5">
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
