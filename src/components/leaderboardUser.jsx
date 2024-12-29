import React from "react";

function LeaderboardUser(props) {
  return (
    <>
      <div class="sm:flex hidden p-1">
        <div className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
          {props.imageSrc ? (
            <img
              src={props.imageSrc}
              alt="dp"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-bold text-lg">{props.rank}</span>
          )}
        </div>
        <div class="pl-2 h-9 md:w-full place-content-center">
          {props.name} - {props.points}
        </div>
      </div>
    </>
  );
}

export default LeaderboardUser;
