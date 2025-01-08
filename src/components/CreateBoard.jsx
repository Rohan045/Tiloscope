import React, { useEffect, useState } from "react";
import {
  getApiCall,
  postApiCall,
  putApiCall,
} from "../interceptors/ApiCallInterceptors";
import { useUserManagementStore } from "../stores/UserManagementStore";
import IconInfo from "./IconInfo";

import { Plus, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  useDialogManagementStore,
  useLoaderManagementStore,
} from "../stores/DialogManagementStore";
import Board from "./Board";

const CreateBoard = () => {
  const { loggedInUserInfo, setLoggedInUserInfo } = useUserManagementStore();
  const { setDialogInfo } = useDialogManagementStore();
  const { setLoaderInfo } = useLoaderManagementStore();
  const [createdBoard, setCreatedBoard] = useState();
  const [boardList, setBoardList] = useState([]);
  const [squareUpdatePayloadList, setSquareUpdatePayloadList] = useState([]);
  const [inputForm, setInputForm] = useState({
    boardId: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");

    if (loggedInUserInfo === undefined) {
      if (user) {
        setLoggedInUserInfo(user);
      } else {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        navigate("/");
      }
    }
  }, []);
  useEffect(() => {
    const fetchBoardList = async () => {
      try {
        setLoaderInfo({
          text: "Fetching Board Types...",
        });
        const response = await getApiCall("/board");
        setBoardList(response);
      } catch (e) {
        setDialogInfo({
          type: "error",
          text: "An error occurred while fetching the board",
        });
      } finally {
        setLoaderInfo(undefined);
      }
    };
    fetchBoardList();
  }, []);
  const handleBoardTypeChange = (boardId) => {
    inputForm.boardId = boardId;
    setInputForm(inputForm);
  };

  const saveBoard = async () => {
    setLoaderInfo({
      text: "Saving Board Changes...",
    });
    if (squareUpdatePayloadList.length === 0) {
      setDialogInfo({
        type: "info",
        text: "No changes to save",
      });
      return;
    }

    try {
      const promises = await putApiCall(
        "/playerboard",
        {
          playerBoardId: createdBoard?.id,
          playerBoardSquareUpdateRequests: squareUpdatePayloadList,
        },
        true
      );

      setDialogInfo({
        type: "info",
        text: "Board changes have been saved successfully",
      });
    } catch (error) {
      setDialogInfo({
        type: "error",
        text: "An error occurred while saving the board",
      });
    } finally {
      setLoaderInfo(undefined);
    }
  };

  const createBoard = async (e) => {
    e.preventDefault();
    setCreatedBoard(undefined);
    if (inputForm.boardId === "-1" || inputForm.boardId === "") {
      setDialogInfo({
        type: "info",
        text: "Select board type",
      });
      return;
    }

    const boardId = inputForm.boardId;
    try {
      setLoaderInfo({
        text: "Creating Board...",
      });
      const response = await postApiCall(`/playerboard/${boardId}`, null, true);
      setCreatedBoard(response);
      setDialogInfo({
        type: "info",
        text: "Board created successfully",
      });
    } catch (error) {
      setDialogInfo({
        type: "error",
        text: "An error occurred while created the board",
      });
    } finally {
      setLoaderInfo(undefined);
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

            {boardList.map((board) => (
              <option key={board.id} value={board.id}>
                {board.rows}x{board.cols}
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
                createdBoard?.playerBoardSquares
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
