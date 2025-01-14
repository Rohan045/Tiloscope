import download from "downloadjs";
import * as htmlToImage from "html-to-image";
import React from "react";
import bgImg from "../assets/usergrid-background.svg";
import { useDialogManagementStore } from "../stores/DialogManagementStore";
import { useLeaderboardManagement } from "../stores/LeaderboardManagementStore";
import Board from "./Board";
import MyBoardCard from "./MyBoardCard";
import ThemeInfoContainer from "./ThemeInfoContainer";
import UserGridCard from "./UserGridCard";

const UserGrid = (props) => {
  const { boardInfo } = props.boardInfo;
  const { leaderboard } = useLeaderboardManagement();
  const { setDialogInfo } = useDialogManagementStore();

  const getRankFromPlayerBoard = (email) => {
    if (leaderboard !== undefined) {
      return leaderboard.findIndex((player) => player[1] === email) + 1;
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

  const downloadUserGridCard = () => {
    const node = document.getElementById(boardInfo?.id);

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const getShareUrl = () => {
    setDialogInfo({
      type: "info",
      text: (
        <div className="flex flex-col">
          <span>Share link below :</span>
          <div
            className="text-blue-700 cursor-pointer"
            onClick={() =>
              window.open(
                process.env.REACT_APP_FRONTEND_BASE_URL +
                  "/shareView/" +
                  boardInfo?.id
              )
            }
          >
            {process.env.REACT_APP_FRONTEND_BASE_URL +
              "/shareView/" +
              boardInfo?.id}
          </div>
        </div>
      ),
    });
  };

  return (
    <div id={boardInfo?.id} className="flex flex-col w-full">
      {!props.MyBoard ? (
        <UserGridCard
          name={boardInfo?.player?.name}
          email={boardInfo?.player?.email}
          description={boardInfo?.player?.description}
          photoUrl={boardInfo?.player?.photoUrl}
          rank={getRankFromPlayerBoard(boardInfo?.player?.email)}
          vote={boardInfo?.liked?.length}
          playerBoardId={boardInfo?.id}
          likedPlayer={boardInfo?.liked}
          downloadUserGridCardFn={downloadUserGridCard}
          getShareUrlFn={getShareUrl}
        />
      ) : (
        <MyBoardCard boardInfo={{ boardInfo }} />
      )}

      <div
        className="flex flex-col justify-center pb-3"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover", // adjust to your needs
          backgroundPosition: "center", // adjust to your needs
        }}
      >
        <ThemeInfoContainer
          config={{
            theme: boardInfo?.theme?.name,
            description: boardInfo?.theme?.description,
            url: boardInfo?.theme?.url,
          }}
        />

        <div className="horizontal-centered">
          <Board
            config={{
              rows: boardInfo?.board?.rows,
              cols: boardInfo?.board?.cols,
              name: <span>Board 1</span>,
              squareDataList: convertToThisList(boardInfo?.playerBoardSquares),
              tileDataList: [],
              isTileHighlightEnabled: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserGrid;
