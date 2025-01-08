import React from "react";
import { Pencil, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IconInfo from "./IconInfo";

const MyBoardCard = (props) => {
    const { boardInfo } = props.boardInfo;
    const navigate = useNavigate();
    const onEdit = () => {
        navigate("/home/createBoard", { state: { "boardInfo" : boardInfo } });
    };  
    const onPost = () => {
        // call api to change the public key under playerboard
    };
    return (
        <div className="flex border-solid border-zinc-700 border-b px-3 pt-3 w-full">
            <div className="w-1/2">
                Created 7 hours ago
            </div>
            <div className="flex justify-items-end my-3 w-1/2">
                <button className="mr-3 bg-transparent border-solid border-zinc-700 border-[1px]" onClick={() => onEdit()}>
                    <IconInfo config={{ icon: <Pencil />, text: "Edit" }} />
                </button>
                <button className="ml-7 bg-transparent border-solid border-zinc-700 border-[1px]" onClick={() => onPost()}>
                    <IconInfo config={{ icon: <Upload />, text: "Post" }} />
                </button>
            </div>
        </div>
    );
};

export default MyBoardCard;
