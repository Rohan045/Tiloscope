import React from "react";
import LeaderboardUser from "./LeaderboardUser";

function Leaderboard() {
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
      <div class="md:inline w-1/4 hidden bg-transparent">
        <div class="p-2 h-[100px] font-bold font-mono text-4xl">
          Leaderboard
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
}

export default Leaderboard;
