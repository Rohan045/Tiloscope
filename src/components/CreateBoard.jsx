import React from "react";
import Board from "./Board";

const CreateBoard = () => {
  return (
    <div className="relative">
      <div className="flex flex-row justify-center h-[100vh]">
        <Board
          config={{
            rows: 3,
            cols: 3,
            squareDataList: [
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
              {
                squareId: 1,
                playerBoardSquareId: 1,
                tiles: [],
              },
              {
                squareId: 2,
                playerBoardSquareId: 2,
                tiles: [],
              },
              {
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
            ],
            tileDataList: [
              {
                id: 1,
                name: "Tile 1",
                description: "This is tile 1",
                html: "<strong>Tile 1</strong>",
              },
              {
                id: 2,
                name: "Tile 2",
                description: "This is tile 2",
                html: "<strong>Tile 2</strong>",
              },
              {
                id: 3,
                name: "Tile 3",
                description: "This is tile 3",
                html: "<strong>Tile 3</strong>",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CreateBoard;
