import { ArrowBigUp, Shield, Vote } from "lucide-react";
import React, { useState } from "react";
import userIcon from "../assets/user-icon.png";
import IconInfo from "./IconInfo";

function UserGridCard(props) {
  const { name, email, photoUrl, rank, vote } = props;
  const [upvotes, setUpvotes] = useState(vote);
  const [upvoted, setUpvoted] = useState(false);
  const upvoteHandle = () => {
    setUpvoted(true);
    setUpvotes(upvotes + 1);
  };
  return (
    <div className="border-solid border-zinc-700 border-b px-3 pt-3">
      <div class="flex pb-2 ">
        <div class="rounded-full h-[50px] w-[50px] border-solid border-zinc-700 border bg-slate-800">
          <img
            src={photoUrl || userIcon}
            alt="dp"
            className="object-cover rounded-full w-[50px] h-[50px]"
          />
        </div>
        <div className="flex flex-col justify-center ml-3">
          <span class="font-bold">{name}</span>
          <span class="text-xs">{email}</span>
        </div>
      </div>
      <div class="flex justify-items-end my-3">
        <div class="flex flex-row justify-between text-xs w-full">
          <div class="flex flex-row">
            <IconInfo config={{ icon: <Shield />, text: "Rank #100" }} />
            <IconInfo config={{ icon: <Vote />, text: "Upvotes 2" }} />
          </div>

          <IconInfo
            config={{
              icon: upvoted ? (
                <ArrowBigUp class="fill-zinc-300" />
              ) : (
                <ArrowBigUp class="hover:animate-bounce hover:fill-zinc-300" />
              ),
              text: (
                <div
                  class="flex cursor-pointer"
                  onClick={upvoteHandle}
                  disabled={upvoted}
                >
                  <span>Upvote</span>
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserGridCard;
