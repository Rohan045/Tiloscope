import { PaintBucketIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import { useDialogManagementStore } from "../stores/DialogManagementStore";
import { useUserManagementStore } from "../stores/UserManagementStore";
import DefaultFeedSkeleton from "./DefaultFeedSkeleton";
import IconInfo from "./IconInfo";
import UserGrid from "./UserGrid";

function Feed() {
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
  const [pageNo, setPageNo] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (loggedInUserInfo === undefined) {
      if (user) {
        setLoggedInUserInfo(user);
        fetchAllBoardsInfo(pageNo);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    } else {
      fetchAllBoardsInfo(pageNo);
    }
  }, []);

  const fetchAllBoardsInfo = async (pageNo) => {
    try {
      const response = await getApiCall("/playerboard?page=" + (pageNo + 1));
      if (response.length === 0) {
        setDialogInfo({
          type: "info",
          text: "No more data to load",
        });
        return;
      }

      const updatedList = allBoardList.concat(response);
      setAllBoardList(updatedList);
      setPageNo(pageNo + 1);
    } catch (e) {
      setDialogInfo({
        type: "error",
        text: "An error occured. Please try again",
      });
    }
  };

  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-col w-full">
        {allBoardList.length > 0
          ? allBoardList.map((boardInfo, index) => {
              return (
                <div key={index} className="card flex flex-col mb-3">
                  <UserGrid key={index} boardInfo={{ boardInfo }} />
                  {index === allBoardList.length - 1 && (
                    <div className="flex flex-row justify-center p-5">
                      <div
                        className="cursor-pointer"
                        onClick={() => fetchAllBoardsInfo(pageNo)}
                      >
                        <IconInfo
                          config={{
                            icon: <PaintBucketIcon />,
                            text: (
                              <span className="text-xs">
                                Click to load more data...
                              </span>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  )}
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
  );
}

export default Feed;
