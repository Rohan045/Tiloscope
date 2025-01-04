import React from "react";
import Board from "./Board";
import UserGridCard from "./userGridCard";

function UserGrid(props) {
  const { boardInfo } = props.boardInfo;
  const gridSize = 5;
  const gridData = Array(Math.pow(gridSize, 2)).fill(null);
  const tileData = [];

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
    <>
      <div class="inline items-end">
        <div class="inline mb-7">
          <UserGridCard
            name={boardInfo?.player?.name}
            email={boardInfo?.player?.email}
            photoUrl={boardInfo?.player?.photoUrl}
            rank={props.rank}
            vote={boardInfo?.vote}
          />
        </div>

        {/* <Board
          config={{
            rows: 5,
            cols: 5,
            name: <span>Board 1</span>,
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
                squareId: 3,
                playerBoardSquareId: 3,
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
                squareId: 3,
                playerBoardSquareId: 3,
                tiles: [],
              },
            ],
            tileDataList: [],
          }}
        /> */}

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
    </>
  );
}

export default UserGrid;
