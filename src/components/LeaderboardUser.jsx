import React from "react";

const LeaderboardUser = (props) => {
  const style =
    "p-3 space-x-2 pt-5 flex place-content-center cursor-pointer w-full h-[70px] hover:bg-zinc-700 ";

  return (
    <div className={style}>
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
      <div className="pl-2 h-9 md:w-full place-content-center">
        {props.name} - {props.points}
      </div>
    </div>
  );
};

export default LeaderboardUser;
