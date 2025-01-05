import { ShieldHalf } from "lucide-react";
import React from "react";
import IconInfo from "./IconInfo";
import LeaderboardUser from "./LeaderboardUser";

const Leaderboard = () => {
  var leaderBoard = [
    {
      name: "Rohan",
      points: 52,
      rank: 1,
    },
    {
      name: "Vishal",
      points: 52,
      rank: 2,
    },
    {
      name: "Soumya",
      points: 52,
      rank: 3,
    },
    {
      name: "Arpita",
      points: 52,
      rank: 4,
    },
    {
      name: "Rajib",
      points: 52,
      rank: 5,
    },
  ];
  return (
    <>
      <div class="flex flex-col">
        <div class="vertical-centered font-bold border-solid border-zinc-700 border-b p-3 h-[70px]">
          <IconInfo
            config={{
              icon: <ShieldHalf />,
              text: "Leaderboard",
            }}
          />
        </div>
        {leaderBoard.map((user) => {
          return (
            <LeaderboardUser
              name={user.name}
              points={user.points}
              rank={user.rank}
            />
          );
        })}
      </div>
    </>
  );
};

export default Leaderboard;
