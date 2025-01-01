import { Brush } from "lucide-react";
import React, { useState } from "react";
import { putApiCall } from "../interceptors/ApiCallInterceptors";
import { useActiveTileManagement } from "../stores/BoardManagementStore";
import IconInfo from "./IconInfo";
import Square from "./Square";
import Tile from "./Tile";

const Board = (props) => {
  const { rows, cols, name, squareDataList, tileDataList } = props.config;
  const { activeTileIndex, setActiveTileIndex } = useActiveTileManagement();
  const [squareList, setSquareList] = useState(squareDataList);
  const [tileList, setTileList] = useState(tileDataList);
  const [moveSaveStatus, setMoveSaveStatus] = useState();

  const handleOnDragStart = (e, id) => {
    setActiveTileIndex(id);
  };

  const handleOnDrop = async (e, index) => {
    const tile = tileList.find((tile) => tile.id === activeTileIndex);

    if (!tile) return;

    // const newSquareList = squareList.map((square) => {
    //   const newTiles = square.tiles.filter((t) => {}); //t.id !== tile.id
    //   return { ...square, tiles: newTiles };
    // });

    squareList[index].tiles.push(tile);
    setSquareList(squareList);

    const response = await putApiCall(
      "/playerboard/updatePlayerBoard",
      {
        playerBoardSquareId: squareList[index].playerBoardSquareId,
        tileId: [squareList[index].tiles[0].id],
      },
      true
    );

    setMoveSaveStatus("Saving move...");
    setTimeout(() => {
      setMoveSaveStatus("");
    }, 1000);

    setActiveTileIndex(null);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <IconInfo
          config={{
            icon: <Brush />,
            text: name,
          }}
        />
        <span>{moveSaveStatus}</span>
      </div>
      <div className="flex flex-col mt-5">
        <div
          className={`grid gap-0 h-fit`}
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
            className="flex flex-row mt-5"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
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
