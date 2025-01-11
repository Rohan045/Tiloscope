import { Pencil, Upload, EyeOff } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { putApiCall } from "../interceptors/ApiCallInterceptors";
import {
    useDialogManagementStore,
    useLoaderManagementStore,
} from "../stores/DialogManagementStore";
import IconInfo from "./IconInfo";
import { useState } from "react";

const MyBoardCard = (props) => {
    const { boardInfo } = props.boardInfo;
    const [isPosted, setIsPosted] = useState(boardInfo.visible);
    const { setDialogInfo } = useDialogManagementStore();
    const { setLoaderInfo } = useLoaderManagementStore();
    const navigate = useNavigate();
    const onEdit = () => {
        navigate("/home/createBoard", { state: { boardInfo: boardInfo } });
    };
    const onPost = async (visible) => {
        const payload = {
            "playerBoardId": boardInfo.id,
            "visible": visible
        };
        try {
            setLoaderInfo({
                text: visible ? "Posting..." : "Hiding...",
            });
            await putApiCall("/playerboard/visibility", payload, true)
        } catch (error) {
            setDialogInfo({
                type: "error",
                text: visible ? "An error occurred while posting the board" : "An error occurred while hiding the board",
            });
        } finally {
            setLoaderInfo(undefined);
            setDialogInfo({
                type: "info",
                text: visible ? "Posted successfully" : "Post Hidden successfully",
            })
            setIsPosted(visible)
        }
    };
    function calculateTimeDifference(apiTimestamp) {
        // Parse the timestamp into a Date object
        const timestampDate = new Date(apiTimestamp);
    
        // Get the current time
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const diffInMs = currentDate - timestampDate;
    
        // Convert milliseconds to hours
        const diffInHours = diffInMs / (1000 * 60 * 60);
        console.log(diffInHours);
        // Determine if the difference is less than a day
        if (diffInHours < 1) {
            return `Less than an hour ago`;
        } else if(diffInHours < 24){
            return `${Math.floor(diffInHours)} hours ago`;
        } else {
            // Convert hours to days
            const diffInDays = diffInHours / 24;
            return `${Math.floor(diffInDays)} days ago`;
        }
    }
    return (
        <div className="flex flex-col justify-between border-solid border-zinc-700 border-b px-3 pt-3 md:flex-row">
            <span>{calculateTimeDifference(boardInfo.lastUpdated)}</span>
            <div className="flex flex-row justify-around my-3">
                <button
                    className="flex flex-row justify-center mr-3 bg-transparent border-solid border-zinc-700 border-[1px] w-1/2"
                    onClick={() => onEdit()}
                >
                    <IconInfo config={{ icon: <Pencil />, text: "Edit" }} />
                </button>
                <button
                    className={"flex flex-row justify-center border-solid border-zinc-700 border-[1px] w-1/2 bg-transparent " + (isPosted ? "hover:bg-red-700" : "hover:bg-green-700")}
                    onClick={() => onPost(isPosted ? false : true)}
                >
                    {isPosted ? <IconInfo config={{ icon: <EyeOff />, text: "Hide" }} /> : <IconInfo config={{ icon: <Upload />, text: "Post" }} />}
                </button>
            </div>
        </div>
    );
};

export default MyBoardCard;
