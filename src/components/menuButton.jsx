import { motion, useAnimation } from "framer-motion";
import React from "react";

const MenuButton = (props) => {
  const { icon, text, onClickFn } = props.config;
  const animateController = useAnimation();

  const startButtionPressAnimation = async () => {
    await animateController.start({
      scale: 0.7,
      transition: { type: "spring", duration: 0.1 },
    });
    await animateController.start({
      scale: 1,
      transition: { type: "spring", duration: 0.5 },
    });
  };

  const handleClick = async () => {
    await startButtionPressAnimation();
    onClickFn();
  };

  return text !== "" ? (
    <motion.div
      initial={{ scale: 1 }}
      animate={animateController}
      className="flex flex-row bg-white shadow-xl rounded-full p-2 px-3 cursor-pointer mx-2 hover:text-indigo-700"
      onClick={() => handleClick()}
    >
      <div className="centered md:mr-2">{icon}</div>
      <div className="centered hidden md:flex">{text}</div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ scale: 1 }}
      animate={animateController}
      className="flex flex-row bg-white shadow-xl rounded-full p-3 mx-2 cursor-pointer hover:text-indigo-700"
      onClick={() => handleClick()}
    >
      <div className="centered">{icon}</div>
    </motion.div>
  );
};

export default MenuButton;
