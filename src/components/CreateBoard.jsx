import React, { useEffect, useState } from "react";
import { getApiCall } from "../interceptors/ApiCallInterceptors";
import Board from "./Board";

const CreateBoard = () => {
  const [boardList, setBoardList] = useState();

  useEffect(() => {
    const fetchBoardList = async () => {
      const response = await getApiCall("/board/getAllBoards");
      setBoardList(response);
    };
    fetchBoardList();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-solid border-zinc-700 border-b justify-between p-5 text-sm">
        <div className="flex flex-row">
          <input
            className="mr-3 w-[170px]"
            type="text"
            placeholder="Enter board name"
          />
          <select className="p-2 w-[170px] bg-black">
            <option value="-1">Select board type</option>
            {boardList != undefined &&
              boardList.map((board) => (
                <option key={board.id} value={board.id}>
                  {board.rows}x{board.cols}
                </option>
              ))}
          </select>
        </div>
        <button>Create Board</button>
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
