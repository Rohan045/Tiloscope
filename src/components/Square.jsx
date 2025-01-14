import React from "react";
import { useActiveTileManagement } from "../stores/BoardManagementStore";
import Tile from "./Tile";

const handleOnDragOver = (e) => {
  e.preventDefault();
};

const Square = (props) => {
  const { tiles } = props.config;
  const { setActiveTileIndex } = useActiveTileManagement();
  const index = props.index;
  const onDropFn = props.onDropFn;
  const onClickFn = props.onClickFn;

  const handleOnDragStart = (e, id) => {
    setActiveTileIndex(id);
  };

  const handleOnSelectTile = (e, id) => {
    setActiveTileIndex(id);
  };

  return (
    <div
      className="centered w-[50px] h-[50px] bg-white"
      onDrop={(e) => onDropFn(e, index)}
      onClick={(e) => onClickFn(e, index)}
      onDragOver={handleOnDragOver}
    >
      {tiles.map((tile) => (
        <div key={tile.id} className="m-2">
          <Tile
            index={index}
            key={tile.id}
            config={tile}
            onDragStartFn={(e) => handleOnDragStart(e, tile.id)}
            onClickFn={(e) => handleOnSelectTile(e, tile.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Square;
