import { Menu, ShieldHalf } from "lucide-react";
import React from "react";
import MenuButton from "./MenuButton";

const Footer = (props) => {
  const { toggleMenuOptionFn, toggleLeaderboardOptionFn } = props.config;
  return (
    <div className="bg-black border-solid border-zinc-700 border-t flex flex-row justify-around p-3 fixed bottom-0 w-full lg:hidden">
      <MenuButton
        config={{
          icon: <Menu />,
          text: "Menu",
          onClickFn: () => toggleMenuOptionFn(),
        }}
      />
      <MenuButton
        config={{
          icon: <ShieldHalf />,
          text: "Leaderboard",
          onClickFn: () => toggleLeaderboardOptionFn(),
        }}
      />
    </div>
  );
};

export default Footer;
