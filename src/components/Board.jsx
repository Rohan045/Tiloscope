import React, { useState } from "react";
import { useActiveTileManagement } from "../stores/BoardManagementStore";
import Square from "./Square";
import Tile from "./Tile";

const Board = (props) => {
  const { rows, cols, squareDataList, tileDataList, updateSavePayloadListFn } =
    props.config;
  const { activeTileIndex, setActiveTileIndex } = useActiveTileManagement();
  const [squareList, setSquareList] = useState(squareDataList);
  const [tileList] = useState(tileDataList);
  const [moveSaveStatus] = useState();

  const handleOnDragStart = (e, id) => {
    setActiveTileIndex(id);
  };

  const handleOnDrop = async (e, index) => {
    const tile = tileList.find((tile) => tile.id === activeTileIndex);

    if (!tile) {
      return;
    }

    // if (squareList[index].tiles.length > 0) {
    //   return;
    // }

    squareList[index].tiles[0] = tile;
    setSquareList(squareList);

    updateSavePayloadListFn({
      playerBoardSquareId: squareList[index].playerBoardSquareId,
      tileIds: [squareList[index].tiles[0].id],
    });

    setActiveTileIndex(null);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="vertical-centered text-sm">{moveSaveStatus}</span>
      </div>
      <div className="flex flex-col mt-5">
        <div
          className="grid gap-0 h-fit w-fit"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {squareList !== undefined &&
            squareList.map((square, index) => (
              <Square
                index={index}
                key={index}
                config={square}
                onDropFn={handleOnDrop}
              />
            ))}
        </div>

        {tileList.length > 0 && (
          <div
            className="grid gap-0 w-fit mt-5"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${Math.ceil(
                tileList.length / cols
              )}, minmax(0, 1fr))`,
            }}
          >
            {tileList.map((tile, index) => (
              <Tile
                index={index}
                key={index}
                config={tile}
                onDragStartFn={handleOnDragStart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
