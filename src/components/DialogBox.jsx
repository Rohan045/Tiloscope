import { CircleAlert, CircleCheck, CircleX, Info, X } from "lucide-react";
import React from "react";
import { useDialogManagementStore } from "../stores/DialogManagementStore";
import IconInfo from "./IconInfo";

const DialogBox = (props) => {
  const { type, text } = props.config;
  const { setDialogInfo } = useDialogManagementStore();

  return (
    <div className="card flex flex-col w-full bg-zinc-800 text-gray-300 md:w-1/2 lg:w-1/4">
      <div className="flex flex-row justify-between p-3 border-solid border-zinc-700 border-b font-semibold">
        <>
          {type === "success" && (
            <IconInfo
              config={{
                icon: <CircleCheck />,
                text: "Success",
              }}
            />
          )}

          {type === "error" && (
            <IconInfo
              config={{
                icon: <CircleX />,
                text: "Error",
              }}
            />
          )}

          {type === "warning" && (
            <IconInfo
              config={{
                icon: <CircleAlert />,
                text: "Warning",
              }}
            />
          )}

          {type === "info" && (
            <IconInfo
              config={{
                icon: <Info />,
                text: "Information",
              }}
            />
          )}
        </>

        <div
          className="vertical-centered cursor-pointer"
          onClick={() => setDialogInfo(undefined)}
        >
          <X />
        </div>
      </div>
      <div className="flex flex-col bg-[rgb(23,23,23)] p-3">
        <div className="h-[100px] overflow-auto">
          <span>{text}</span>
        </div>
        <div className="flex flex-row justify-end">
          <button onClick={() => setDialogInfo(undefined)}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
