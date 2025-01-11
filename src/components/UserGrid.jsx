import React from "react";
import bgImg from "../assets/usergrid-background.svg";
import { useLeaderboardManagement } from "../stores/LeaderboardManagementStore";
import Board from "./Board";
import MyBoardCard from "./MyBoardCard";
import UserGridCard from "./UserGridCard";

const UserGrid = (props) => {
  const { boardInfo } = props.boardInfo;
  const { leaderboard, setLeaderboard } = useLeaderboardManagement();

  const getRankFromPlayerBoard = (email) => {
    return leaderboard.findIndex((player) => player[1] === email) + 1;
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
    <div className="flex flex-col w-full">
      {!props.MyBoard ? (
        <UserGridCard
          name={boardInfo?.player?.name}
          email={boardInfo?.player?.email}
          description={boardInfo?.player?.description}
          photoUrl={boardInfo?.player?.photoUrl}
          rank={getRankFromPlayerBoard(boardInfo?.player?.email)}
          vote={boardInfo?.liked?.length}
          boardId={boardInfo?.id}
          likedPlayer={boardInfo?.liked}
        />
      ) : (
        <MyBoardCard boardInfo={{ boardInfo }} />
      )}

      <div
        className="flex flex-row justify-center p-3"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover", // adjust to your needs
          backgroundPosition: "center", // adjust to your needs
        }}
      >
        <Board
          config={{
            rows: boardInfo?.board?.rows,
            cols: boardInfo?.board?.cols,
            name: <span>Board 1</span>,
            squareDataList: convertToThisList(boardInfo?.playerBoardSquares),
            tileDataList: [],
          }}
        />
      </div>
    </div>
  );
};

export default UserGrid;
