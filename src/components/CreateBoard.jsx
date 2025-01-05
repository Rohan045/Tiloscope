import React, { useEffect, useState } from "react";
import {
  getApiCall,
  postApiCall,
  putApiCall,
} from "../interceptors/ApiCallInterceptors";
import { useUserManagementStore } from "../stores/UserManagementStore";
import IconInfo from "./IconInfo";

import { Plus, Save } from "lucide-react";
import Board from "./Board";

const CreateBoard = () => {
  const { loggedInUserInfo } = useUserManagementStore();
  const [createdBoard, setCreatedBoard] = useState();
  const [squareUpdatePayloadList, setSquareUpdatePayloadList] = useState([]);
  const [inputForm, setInputForm] = useState({
    size: "",
  });
  const boardSize = [3, 4, 5, 6, 7];
  const handleBoardTypeChange = (size) => {
    inputForm.size = size;
    setInputForm(inputForm);
  };

  const saveBoard = async () => {
    if (squareUpdatePayloadList.length === 0) {
      alert("No changes to save");
      return;
    }

    const promises = squareUpdatePayloadList.map((payload) => {
      return putApiCall(
        `/playerboard/square`,
        {
          playerBoardSquareId: payload.playerBoardSquareId,
          tileIds: payload.tileIds,
        },
        true
      );
    });

    try {
      await Promise.all(promises);
      alert("Board changes have been saved successfully");
    } catch (error) {
      alert("An error occurred while saving the board.");
    }
  };

  const createBoard = async (e) => {
    e.preventDefault();
    setCreatedBoard(undefined);
    if (inputForm.boardId === "-1" || inputForm.boardId === "") {
      alert("Select board type");
      return;
    }

    const size = inputForm.size;
    let boardId;
    try{
      const payload = {
        rows: size,
        cols: size
      };
      const response = await postApiCall(`/board`, payload, true);
      boardId = response.id;
      alert("Template Board created successfully");
    } catch(error){
      alert("Error while creating a template board");
    }

    try {
      const response = await postApiCall(`/playerboard/${boardId}`, null, true);
      setCreatedBoard(response);
      alert("Board assigned successfully");
    } catch (error) {
      alert("An error occurred while creating the board.");
    }
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

  const updateSavePayloadList = (payload) => {
    setSquareUpdatePayloadList([...squareUpdatePayloadList, payload]);
  };

  const actionOnSubmit = (e) => {
    e.preventDefault();

    const clickedButton =
      e.nativeEvent.submitter ||
      e.target.querySelector('[type="submit"]:focus');

    if (clickedButton.name === "createBoard") {
      createBoard(e);
    } else if (clickedButton.name === "saveBoard") {
      saveBoard();
    }
  };

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-row border-solid border-zinc-700 border-b justify-between p-5 text-sm"
        onSubmit={(e) => actionOnSubmit(e)}
      >
        <div className="flex flex-row">
          <select
            className="p-2 w-[170px] bg-black"
            onChange={(e) => handleBoardTypeChange(e.target.value)}
            required
          >
            <option value="-1">Select board type</option>
            {/* {boardList !== undefined &&
              boardList.map((board) => (
                <option key={board.id} value={board.id}>
                  {board.rows}x{board.cols}
                </option>
              ))} */}
            {boardSize.map((element) => (
              <option key={element} value={element}>
                {element}x{element}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row">
          <button className="mr-3" name="createBoard" type="submit">
            <IconInfo config={{ icon: <Plus />, text: "Create Board" }} />
          </button>

          {createdBoard !== undefined && (
            <button name="saveBoard" type="submit">
              <IconInfo config={{ icon: <Save />, text: "Save Board" }} />
            </button>
          )}
        </div>
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
              updateSavePayloadListFn: updateSavePayloadList,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CreateBoard;
