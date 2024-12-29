import { ArrowBigUp, Shield, Vote } from "lucide-react";
import React, { useState } from "react";
import IconInfo from "./IconInfo";

function UserGridCard(props) {
  const [upvotes, setUpvotes] = useState(props.upvotes);
  const [upvoted, setUpvoted] = useState(false);
  const upvoteHandle = () => {
    setUpvoted(true);
    setUpvotes(upvotes + 1);
  };
  return (
    <>
      <div class="rounded-lg pl-5 mt-7">
        <div class="flex pb-2">
          <div class="rounded-full h-[45px] w-[45px] border bg-slate-800">
            {props.imageSrc ? (
              <img
                src={props.imageSrc}
                alt="dp"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              />
            ) : (
              <></>
            )}
          </div>
          <div class="w-4"></div>
          <div class="place-content-center text-l">{props.name}</div>
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
        <div class="h-2"></div>
      </div>
    </>
  );
}

export default UserGridCard;
