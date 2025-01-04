import React, { useEffect, useState } from "react";
import { getApiCall, postApiCall } from "../interceptors/ApiCallInterceptors";
import { useUserManagementStore } from "../stores/UserManagementStore";

import Board from "./Board";

const CreateBoard = () => {
  const { loggedInUserInfo } = useUserManagementStore();
  const [boardList, setBoardList] = useState();
  const [createdBoard, setCreatedBoard] = useState();
  const [inputForm, setInputForm] = useState({
    boardId: "",
  });

  useEffect(() => {
    const fetchBoardList = async () => {
      const response = await getApiCall("/board");
      setBoardList(response);
    };
    fetchBoardList();
  }, []);

  const handleBoardTypeChange = (boardId) => {
    inputForm.boardId = boardId;
    setInputForm(inputForm);
  };

  const createBoard = async (e) => {
    e.preventDefault();
    setCreatedBoard(undefined);

    if (inputForm.boardId === "-1" || inputForm.boardId === "") {
      alert("Select board type");
      return;
    }
    const playerEmail = loggedInUserInfo.email;
    const boardId = inputForm.boardId;

    const response = await postApiCall(
      `/playerboard/${boardId}`,
      null,
      true
    );

    setCreatedBoard(response);
    alert("Board created successfully");
  };

  const convertToThisList = (playerBoardSquares) => {
    const thisList = [];
    playerBoardSquares.forEach((square) => {
      const thisSquare = {
        squareId: square.squareId,
        playerBoardSquareId: square.id,
        tiles: square.tiles === null ? [] : square.tiles,
      };
      thisList.push(thisSquare);
    });

    return thisList;
  };

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-row border-solid border-zinc-700 border-b justify-between p-5 text-sm"
        onSubmit={(e) => createBoard(e)}
      >
        <div className="flex flex-row">
          <select
            className="p-2 w-[170px] bg-black"
            onChange={(e) => handleBoardTypeChange(e.target.value)}
            required
          >
            <option value="-1">Select board type</option>
            {boardList !== undefined &&
              boardList.map((board) => (
                <option key={board.id} value={board.id}>
                  {board.rows}x{board.cols}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">Create Board</button>
      </form>

      <div className="centered h-[70vh] overflow-auto">
        {createdBoard !== undefined && (
          <Board
            config={{
              rows: createdBoard?.board?.rows,
              cols: createdBoard?.board?.cols,
              name: <span className="text-2xl font-bold mx-2">Board New</span>,
              squareDataList: convertToThisList(
                createdBoard.playerBoardSquares
              ),
              tileDataList: loggedInUserInfo?.tiles,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CreateBoard;
