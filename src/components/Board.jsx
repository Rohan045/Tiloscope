import React, { useState } from "react";
import { useActiveTileManagement } from "../stores/BoardManagementStore";
import Square from "./Square";
import Tile from "./Tile";

const Board = (props) => {
  const { rows, cols, squareDataList, tileDataList } = props.config;
  const { activeTileIndex, setActiveTileIndex } = useActiveTileManagement();
  const [squareList, setSquareList] = useState(squareDataList);
  const [tileList, setTileList] = useState(tileDataList);

  const handleOnDragStart = (e, id) => {
    setActiveTileIndex(id);
  };

  const handleOnDrop = (e, index) => {
    const tile = tileList.find((tile) => tile.id === activeTileIndex);

    if (!tile) return;

    const newSquareList = squareList.map((square) => {
      const newTiles = square.tiles.filter((t) => t.id !== tile.id);
      return { ...square, tiles: newTiles };
    });

    newSquareList[index].tiles.push(tile);
    setSquareList(newSquareList);
    setActiveTileIndex(null);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col mr-7">
        {tileList.map((tile, index) => (
          <Tile
            index={index}
            key={tile.id}
            config={tile}
            onDragStartFn={handleOnDragStart}
          />
        ))}
      </div>

      <div
        className={`grid gap-0 h-fit`}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {squareList.map((square, index) => (
          <Square
            index={index}
            key={square.squareId}
            config={square}
            onDropFn={handleOnDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
