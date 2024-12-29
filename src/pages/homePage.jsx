import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
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
      <div className="flex flex-row mx-[10%]">
        <div className="w-1/4 border-r shadow-sm">
          <Sidebar />
        </div>
        <div className="overflow-y-scroll scrollbar-hide h-screen w-2/4">
          <Outlet />
        </div>
        <div className="w-1/4 border-l shadow-sm">
          <Leaderboard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
