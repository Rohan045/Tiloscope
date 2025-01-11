import { ArrowBigUp, LoaderCircle, Shield, Vote } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { putApiCall } from "../interceptors/ApiCallInterceptors";
import { useUserManagementStore } from "../stores/UserManagementStore";
import IconInfo from "./IconInfo";
import UserInfo from "./UserInfo";

const UserGridCard = (props) => {
  const {
    name,
    email,
    description,
    photoUrl,
    rank,
    vote,
    boardId,
    likedPlayer,
  } = props;
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();
  const [upvotes, setUpvotes] = useState(vote);
  const [upvoted, setUpvoted] = useState(false);
  const [voteLoading, setVoteLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (loggedInUserInfo === undefined) {
      if (user) {
        setLoggedInUserInfo(user);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    }
    likedPlayer.forEach((player) => {
      if (player.id === loggedInUserInfo.id) {
        setUpvoted(true);
        return;
      }
    });
  });
  const upvoteHandle = async () => {
    try {
      setVoteLoading(true);
      const response = await putApiCall(
        "/playerboard/upvote/" + boardId,
        null,
        true
      );
      setUpvotes(response.liked.length);
      setUpvoted(true);
      setVoteLoading(false);
    } catch (error) {
      alert("Error while trying to upvote!!");
    }
  };
  return (
    <div className="border-solid border-zinc-700 border-b px-3 pt-3">
      <UserInfo
        config={{
          name: name,
          // email: email,
          description: description,
          // rank: rank,
          photoUrl: photoUrl,
        }}
      />

      <div className="flex justify-items-end my-3">
        <div className="flex flex-row justify-between text-xs w-full">
          <div className="flex flex-row">
            <IconInfo
              config={{
                icon: <Shield />,
                text: `Rank ${rank}`,
                color: "text-green-500",
              }}
            />
            {voteLoading ? (
              <IconInfo
                config={{
                  icon: <LoaderCircle class="animate-spin" />,
                  text: "Loading...",
                }}
              />
            ) : (
              <IconInfo
                config={{ icon: <Vote />, text: "Upvotes " + upvotes }}
              />
            )}
          </div>

          <IconInfo
            config={{
              icon: upvoted ? (
                <ArrowBigUp className="fill-zinc-300" />
              ) : (
                <ArrowBigUp className="hover:animate-bounce hover:fill-zinc-300" />
              ),
              text: (
                <div
                  className="flex cursor-pointer"
                  onClick={!upvoted ? upvoteHandle : null}
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
};

export default UserGridCard;
