import { RefreshCcw, ShieldHalf } from "lucide-react";
import React, { useEffect } from "react";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import {
  useDialogManagementStore,
  useLoaderManagementStore,
} from "../stores/DialogManagementStore";
import { useLeaderboardManagement } from "../stores/LeaderboardManagementStore";
import UserInfo from "./UserInfo";

const Leaderboard = () => {
  const { setDialogInfo } = useDialogManagementStore();
  const { setLoaderInfo } = useLoaderManagementStore();
  const { leaderboard, setLeaderboard } = useLeaderboardManagement();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoaderInfo({
        text: "Loading Leaderboard...",
      });
      const response = await getApiCall("/player/leaderboard", true);
      setLeaderboard(response);
    } catch (error) {
      setDialogInfo({
        type: "error",
        text: "An error occured. Please try again",
      });
    } finally {
      setLoaderInfo(undefined);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="vertical-centered font-bold border-solid justify-items-center border-zinc-700 border-b p-3 h-[70px] flex flex-row">
        <div className="flex flex-row w-[150px]">
          <ShieldHalf />
          <span className="font-meduim pl-5">Leaderboard</span>
        </div>
        <div className="w-full justify-items-end">
          <RefreshCcw
            className="cursor-pointer"
            onClick={() => fetchLeaderboard()}
          />
        </div>
      </div>
      <div className="p-3">
        {leaderboard.map((data, index) => {
          return (
            <div className="py-1">
              <UserInfo
                config={{
                  name: data[0],
                  email: data[1],
                  description: data[2],
                  rank: index + 1,
                  photoUrl: data[3],
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
