import React, { useEffect } from "react";
import {
  useDialogManagementStore,
  useLoaderManagementStore,
  useEditProfileManagementStore
} from "../stores/DialogManagementStore";
import DialogBox from "./DialogBox";
import LoaderBox from "./LoaderBox";
import ProfileBox from "./ProfileBox";

const DialogLoaderContainer = () => {
  const { dialogInfo } = useDialogManagementStore();
  const { loaderInfo } = useLoaderManagementStore();
  const { profileInfo } = useEditProfileManagementStore();

  useEffect(() => { }, [dialogInfo, loaderInfo, profileInfo]);

  return (
    <>
      {(dialogInfo !== undefined || loaderInfo !== undefined || profileInfo !== undefined) && (
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

          {profileInfo !== undefined && (
            <ProfileBox/>
          )}
        </div>
      )}
    </>
  );
};

export default DialogLoaderContainer;
