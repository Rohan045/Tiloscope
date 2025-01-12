import { UserRoundPen, X } from "lucide-react";
import React from "react";
import { useEditProfileManagementStore } from "../stores/DialogManagementStore";
import IconInfo from "./IconInfo";

const ProfileBox = () => {
    const { profileInfo,setProfileInfo } = useEditProfileManagementStore();

    return (
        <div className="card flex flex-col w-full bg-zinc-800 text-gray-300 md:w-1/2 lg:w-1/4">
            <div className="flex flex-row justify-between p-3 border-solid border-zinc-700 border-b font-semibold">
                <IconInfo
                    config={{
                        icon: <UserRoundPen />,
                        text: "Profile",
                    }}
                />
                <div
                    className="vertical-centered cursor-pointer"
                    onClick={() => setProfileInfo(undefined)}
                >
                    <X />
                </div>
            </div>
            <div className="flex flex-col bg-[rgb(23,23,23)] p-3">
                <div className="h-fit overflow-auto">
                    <span>{profileInfo.name}</span>
                </div>
                <div className="flex flex-row justify-end">
                    <button onClick={() => setProfileInfo(undefined)}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileBox;
