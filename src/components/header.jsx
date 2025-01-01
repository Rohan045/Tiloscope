import { motion } from "framer-motion";
import { Info } from "lucide-react";
import React from "react";
import logo from "../assets/main-title-image.png";

const Header = () => {
  return (
    <div className="sticky bg-zinc-800 top-0 z-10 flex flex-row justify-between p-1 px-5 border-solid border-zinc-700 border-b shadow-sm">
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "spring" }}
        className="centered"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]"
        />
      </motion.div>

      <div className="flex flex-row">
        <div className="centered mr-2">
          <Info />
        </div>
        <div className="centered">
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
