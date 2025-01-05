import React, { useEffect } from "react";
import {
  useDialogManagementStore,
  useLoaderManagementStore,
} from "../stores/DialogManagementStore";
import DialogBox from "./DialogBox";
import LoaderBox from "./LoaderBox";

const DialogLoaderContainer = () => {
  const { dialogInfo } = useDialogManagementStore();
  const { loaderInfo } = useLoaderManagementStore();

  useEffect(() => {}, [dialogInfo, loaderInfo]);

  return (
    <>
      {(dialogInfo !== undefined || loaderInfo !== undefined) && (
        <div className="absolute z-10 centered bg-opacity-50 backdrop-blur-lg h-full w-screen">
          {dialogInfo !== undefined && (
            <DialogBox
              config={{
                type: dialogInfo?.type,
                text: dialogInfo?.text,
              }}
            />
          )}

          {loaderInfo !== undefined && (
            <LoaderBox
              config={{
                text: loaderInfo?.text,
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DialogLoaderContainer;
