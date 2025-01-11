import React from "react";
import userIcon from "../assets/user-icon.png";

const UserInfo = (props) => {
  const { name, email, description, rank, photoUrl } = props.config;

  return (
    <div className="flex pb-2 cursor-pointer">
      <div className="rounded-full h-[50px] w-[50px] border-solid border-zinc-700 border bg-slate-800">
        <img
          src={photoUrl || userIcon}
          alt="dp"
          className="object-cover rounded-full w-[50px] h-[50px]"
        />
      </div>
      <div className="flex flex-col justify-center ml-3">
        <span className="font-bold">{name}</span>
        {email && <span className="text-xs">{email}</span>}
        {rank && <span className="text-xs">{rank}</span>}
        {description && <span className="text-xs">{description}</span>}
      </div>
    </div>
  );
};

export default UserInfo;
