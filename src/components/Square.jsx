import React from "react";
import { useActiveTileManagement } from "../stores/BoardManagementStore";
import Tile from "./Tile";

const handleOnDragOver = (e) => {
  e.preventDefault();
};

const Square = (props) => {
  const { squareId, playerBoardSquareId, tiles } = props.config;
  const { activeTileIndex, setActiveTileIndex } = useActiveTileManagement();
  const index = props.index;
  const onDropFn = props.onDropFn;

  const handleOnDragStart = (e, id) => {
    setActiveTileIndex(id);
  };

  return (
    <div
      className="centered w-[100px] h-[100px] bg-white"
      onDrop={(e) => onDropFn(e, index)}
      onDragOver={handleOnDragOver}
    >
      {tiles.map((tile) => (
        <div key={tile.id} className="m-2">
          <Tile
            index={index}
            key={tile.id}
            config={tile}
            onDragStartFn={(e, id) => handleOnDragStart(e, tile.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Square;
