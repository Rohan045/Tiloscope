import { Pencil, Upload } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import IconInfo from "./IconInfo";

const MyBoardCard = (props) => {
  const { boardInfo } = props.boardInfo;
  const navigate = useNavigate();
  const onEdit = () => {
    navigate("/home/createBoard", { state: { boardInfo: boardInfo } });
  };
  const onPost = () => {
    // call api to change the public key under playerboard
  };
  return (
    <div className="flex flex-col justify-between border-solid border-zinc-700 border-b px-3 pt-3 md:flex-row">
      <span>Created 7 hours ago</span>
      <div className="flex flex-row justify-around my-3">
        <button
          className="flex flex-row justify-center mr-3 bg-transparent border-solid border-zinc-700 border-[1px] w-1/2"
          onClick={() => onEdit()}
        >
          <IconInfo config={{ icon: <Pencil />, text: "Edit" }} />
        </button>
        <button
          className="flex flex-row justify-center bg-transparent border-solid border-zinc-700 border-[1px] w-1/2"
          onClick={() => onPost()}
        >
          <IconInfo config={{ icon: <Upload />, text: "Post" }} />
        </button>
      </div>
    </div>
  );
};

export default MyBoardCard;
