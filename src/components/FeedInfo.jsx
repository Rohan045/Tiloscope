import { PaintBucketIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import IconInfo from "./IconInfo";
import UserGrid from "./UserGrid";

function Feed() {
  const [allBoardList, setAllBoardList] = useState([]);
  const [pageNo, setPageNo] = useState(-1);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    fetchAllBoardsInfo(pageNo);
  }, []);

  const fetchAllBoardsInfo = async (pageNo) => {
    const response = await getApiCall("/playerboard?page=" + (pageNo + 1));

    if (response.length === 0) {
      alert("No more data to load");
      return;
    }

    const updatedList = allBoardList.concat(response);
    setAllBoardList(updatedList);
    setPageNo(pageNo + 1);
  };

  return (
    <div class="flex flex-col p-3">
      {allBoardList !== undefined && allBoardList.length > 0 && (
        <div class="flex flex-col w-full">
          {allBoardList.map((boardInfo, index) => {
            return (
              <div class="card flex flex-col mb-3">
                <UserGrid key={index} boardInfo={{ boardInfo }} />
                {index === allBoardList.length - 1 && (
                  <div class="flex flex-row justify-center p-5">
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
          })}
        </div>
      )}
    </div>
  );
}

export default Feed;
