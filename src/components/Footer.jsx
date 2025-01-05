import { motion } from "framer-motion";
import { Bell, FolderOpen, LayoutGrid, Plus, Save, User } from "lucide-react";
import React from "react";
import MenuButton from "./menuButton";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full md:hidden">
      <div className="flex flex-row justify-center p-5">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
          className="flex flex-row"
        >
          <MenuButton
            config={{
              icon: <Plus strokeWidth={2} />,
              text: "New Board",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <FolderOpen strokeWidth={2} />,
              text: "Open Boards",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <Save strokeWidth={2} />,
              text: "Save Board",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <Bell strokeWidth={2} />,
              text: "Notifications",
              onClickFn: () => {
                alert("Notifications");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <LayoutGrid strokeWidth={2} />,
              text: "All Boards",
              onClickFn: () => {},
            }}
          />
          <MenuButton
            config={{
              icon: <User strokeWidth={2} />,
              text: "",
              onClickFn: () => {},
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
