import { motion } from "framer-motion";
import React from "react";
import logo from "../assests/main-title-image.png";
import AuthFormV1 from "../components/authenticationV1";
import "../styles/home.css";

const HomePageV1 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col justify-center items-center h-[370px] w-full md:h-[100vh] md:w-1/2">
        <motion.div
          animate={{ scale: 0.75 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
          className="object-contain h-[370px] w-full md:h-full"
        >
          <img
            src={logo}
            alt="TiloScope"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:justify-center md:items-center md:w-2/3">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
          className="glowing-card"
        >
          <div className="flex flex-col px-5 md:p-10">
            <span className="text-2xl md:text-5xl">
              Welcome to <strong>TiloScope!</strong> 🎨 🚀
            </span>
            <ul className="my-3 md:my-7">
              <li>
                <strong># Unleash Your Creativity:</strong> Decorate grids with
                vibrant tiles.
              </li>
              <li>
                <strong># Create Stunning Patterns:</strong> Design unique
                masterpieces.
              </li>
              <li>
                <strong># Share with the World:</strong> Showcase your art to
                everyone.
              </li>
              <li>
                <strong># Earn Votes:</strong> Climb the leaderboard and shine!
              </li>
            </ul>

            <AuthFormV1 />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePageV1;
