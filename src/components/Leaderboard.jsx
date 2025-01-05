import { ShieldHalf } from "lucide-react";
import React from "react";
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
      <div className="flex flex-col">
        <div className="vertical-centered font-bold border-solid border-zinc-700 border-b p-3 h-[70px]">
          <div className="flex flex-row w-[150px]">
            <ShieldHalf />
            <span className="font-meduim pl-5">Leaderboard</span>
          </div>
        </div>
        {leaderBoard.map((user, index) => {
          return (
            <LeaderboardUser
              key={index}
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
