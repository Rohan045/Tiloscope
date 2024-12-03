import { motion } from "framer-motion";
import React from "react";
import Cell from "../components/cell";
import Footer from "../components/footer";
import Grid from "../components/grid";
import Header from "../components/header";

const GamePage = () => {
  const gridSize = 5;
  const tileData = [
    { id: 1, component: <Cell color="blue" /> },
    { id: 2, component: <Cell color="green" /> },
    { id: 3, component: <Cell color="yellow" /> },
    { id: 4, component: <Cell color="red" /> },
    { id: 5, component: <Cell color="purple" /> },
    { id: 6, component: <Cell color="orange" /> },
    { id: 7, component: <Cell color="pink" /> },
    { id: 8, component: <Cell color="cyan" /> },
    { id: 9, component: <Cell color="magenta" /> },
    { id: 10, component: <Cell color="lime" /> },
  ];

  const gridData = Array(Math.pow(gridSize, 2)).fill(null);
  //   gridData[3] = tileData[0].component;

  return (
    <div className="relative">
      <Header />
      <motion.div
        animate={{ y: 10 }}
        initial={{ y: 100 }}
        transition={{ type: "spring" }}
        className="flex flex-row justify-center h-[100vh]"
      >
        <Grid
          config={{
            title: "Tiloscope Board",
            gridSize: gridSize,
            gridData: gridData,
            tileData: tileData,
          }}
        />
      </motion.div>
      <Footer />
    </div>
  );
};

export default GamePage;
