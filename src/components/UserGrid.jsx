import React from "react";
import Board from "./Board";
import UserGridCard from "./UserGridCard";

const UserGrid = (props) => {
  const { boardInfo } = props.boardInfo;
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
    <div class="flex flex-col w-full">
      <UserGridCard
        name={boardInfo?.player?.name}
        email={boardInfo?.player?.email}
        photoUrl={boardInfo?.player?.photoUrl}
        rank={props.rank}
        vote={boardInfo?.vote}
        boardId={boardInfo?.id}
      />

      <div class="flex flex-row justify-center p-3">
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
