import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import Sidebar from "../components/Sidebar";
import { useUserManagementStore } from "../stores/UserManagementStore";

const HomePage = () => {
  const navigate = useNavigate();
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();

  const [feedContainerHeight, setFeedContainerHeight] = useState();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  useEffect(() => {
    setFeedContainerHeight(getRemainingHeight());
    window.addEventListener("resize", getRemainingHeight);
    return () => {
      window.removeEventListener("resize", getRemainingHeight);
    };
  }, []);

  const getRemainingHeight = () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const windowHeight = window.innerHeight;
    const remainingHeight = windowHeight - headerHeight;
    document.getElementById("feed-container").style.height =
      remainingHeight + "px";
  };

  const toggleMenuOption = () => {
    setIsLeftDrawerOpen((isLeftDrawerOpen) => !isLeftDrawerOpen);
  };

  const toggleLeaderboardOption = () => {
    setIsRightDrawerOpen((isRightDrawerOpen) => !isRightDrawerOpen);
  };

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
      <div className="flex flex-row flex-grow lg:mx-[10%]">
        <div className="w-1/4 border-solid border-zinc-700 border-x hidden flex-grow bg-black lg:block">
          <Sidebar />
        </div>
        <div
          id="feed-container"
          className="overflow-auto scrollbar-hide w-full lg:w-2/4 bg-black"
          style={{
            height: feedContainerHeight,
          }}
        >
          <Outlet />
        </div>
        <div className="w-1/4 border-solid border-zinc-700 border-x hidden flex-grow bg-black lg:block">
          <Leaderboard />
        </div>
      </div>

      {/* <button onClick={toggleDrawer}>Show</button> */}
      <Drawer
        open={isLeftDrawerOpen}
        onClose={toggleMenuOption}
        direction="left"
        className="bg-black"
      >
        <div className="bg-black h-screen border-solid border-zinc-700 border-r">
          <Sidebar />
        </div>
      </Drawer>

      <Drawer
        open={isRightDrawerOpen}
        onClose={toggleLeaderboardOption}
        direction="right"
        className="bg-black"
      >
        <div className="bg-black h-screen border-solid border-zinc-700 border-l">
          <Leaderboard />
        </div>
      </Drawer>

      <Footer
        config={{
          toggleMenuOptionFn: toggleMenuOption,
          toggleLeaderboardOptionFn: toggleLeaderboardOption,
        }}
      />
    </>
  );
};

export default HomePage;
