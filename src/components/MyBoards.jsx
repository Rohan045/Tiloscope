import { Brush } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import { useDialogManagementStore } from "../stores/DialogManagementStore";
import { useUserManagementStore } from "../stores/UserManagementStore";
import DefaultFeedSkeleton from "./DefaultFeedSkeleton";
import UserGrid from "./UserGrid";

function MyBoards() {
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();
  const { setDialogInfo } = useDialogManagementStore();
  const [allBoardList, setAllBoardList] = useState([]);
  const defaultFeed = [
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
    <DefaultFeedSkeleton />,
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (loggedInUserInfo === undefined) {
      if (user) {
        setLoggedInUserInfo(user);
        fetchAllBoardsInfo();
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    } else {
      fetchAllBoardsInfo();
    }
  }, []);

  const fetchAllBoardsInfo = async () => {
    try {
      const response = await getApiCall("/playerboard/my");
      if (response.length === 0) {
        setDialogInfo({
          type: "info",
          text: "No boards available!!",
        });
        return;
      }
      setAllBoardList(response);
    } catch (e) {
      setDialogInfo({
        type: "error",
        text: "An error occured. Please try again",
      });
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-solid border-zinc-700 border-b justify-between p-3 py-5">
        <div className="flex flex-row w-[150px]">
          <Brush />
          <span className="font-meduim pl-5">My Boards</span>
        </div>
      </div>

      <div className="flex flex-col p-3">
        <div className="flex flex-col w-full">
          {allBoardList.length > 0
            ? allBoardList.map((boardInfo, index) => {
                return (
                  <div key={index} className="card flex flex-col mb-3">
                    <UserGrid
                      key={index}
                      boardInfo={{ boardInfo }}
                      MyBoard={true}
                    />
                  </div>
                );
              })
            : defaultFeed.map((def, index) => {
                return (
                  <div key={index} className="card flex flex-col mb-3">
                    {def}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default MyBoards;
