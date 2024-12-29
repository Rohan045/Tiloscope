import React from "react";
import Board from "./Board";

const CreateBoard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-b justify-between p-5 text-sm">
        <div className="flex flex-row">
          <input
            className="mr-3 p-2 bg-black"
            type="text"
            placeholder="Enter board name"
          />
          <select className="p-2 bg-black">
            <option value="-1">Select board type</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="5x5">5x5</option>
          </select>
        </div>
        <button className="bg-green-600 px-3 hover:bg-green-800 active:bg-green-900">
          Create Board
        </button>
      </div>
      <div className="centered h-[70vh]">
        <Board
          config={{
            rows: 3,
            cols: 3,
            name: <span className="text-2xl font-bold mx-2">Board New</span>,
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
