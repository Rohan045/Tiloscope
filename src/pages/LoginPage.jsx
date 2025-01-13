import React from "react";
import logo from "../assets/main-title-image.png";
import Authentication from "../components/Authentication";
import "../styles/home.css";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <div className="flex flex-col justify-center items-center h-[370px] w-full md:h-[100vh] md:w-1/2">
        <div className="object-contain h-[370px] w-full md:h-full">
          <img
            src={logo}
            alt="TiloScope"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col  items-center md:justify-center md:items-center md:w-2/3">
        <div className="card bg-zinc-700 w-fit">
          <div className="flex flex-col  px-5 md:p-10">
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

            <Authentication />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
