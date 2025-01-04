import React, { useEffect, useState } from "react";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import UserGrid from "./userGrid";

function Feed() {
  const [allBoardList, setAllBoardList] = useState();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  var userGrids = [
    {
      name: "Rohan",
      points: 52,
      rank: 1,
      upvotes: 10,
    },
    {
      name: "Vishal",
      points: 52,
      rank: 2,
      upvotes: 8,
    },
    {
      name: "Soumya",
      points: 52,
      rank: 3,
      upvotes: 6,
    },
    {
      name: "Arpita",
      points: 52,
      rank: 4,
      upvotes: 4,
    },
    {
      name: "Rajib",
      points: 52,
      rank: 5,
      upvotes: 2,
    },
  ];

  useEffect(() => {
    const fetchAllBoardsInfo = async () => {
      const response = await getApiCall("/playerboard");
      setAllBoardList(response);
    };
    fetchAllBoardsInfo();
  }, []);

  return (
    <>
      <div class="flex flex-row justify-center">
        <div className="overflow-y-scroll overflow-x-scroll px-4 scrollbar-hide h-screen w-max divide-y divide-y-white">
          {allBoardList !== undefined &&
            allBoardList.length > 0 &&
            allBoardList.map((boardInfo, index) => {
              return <UserGrid key={index} boardInfo={{ boardInfo }} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Feed;
